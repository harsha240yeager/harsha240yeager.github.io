import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, Check, AlertCircle } from 'lucide-react';
import { profile } from '../data/portfolio.js';

// Reusable researcher-style contact form. POSTs to Formsubmit.co
// (no account required) which forwards the message to profile.email.
//
// On the very first submission, Formsubmit sends a one-time email to
// the inbox owner asking them to click an "Activate" link. After
// activation, every subsequent submission is delivered instantly.
//
// We honeypot bots with the `_honey` field, request a JSON response
// with `_captcha=false` so the visitor doesn't get bounced through
// Formsubmit's captcha page, and direct successful submissions back
// to the contact section anchor.
export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill every field; humans don't see this one.
    if (data.get('_honey')) {
      setStatus('sent');
      return;
    }

    try {
      const res = await fetch(profile.contactFormEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || `Request failed (${res.status}).`);
      }
      form.reset();
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err?.message || 'Something went wrong. Please email me directly at hnarra@usc.edu.');
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      onSubmit={onSubmit}
      className="glass rounded-2xl p-6 sm:p-7 space-y-4"
      aria-label="Contact form"
    >
      <div className="text-[10px] font-mono uppercase tracking-widest text-violet-300">
        send_a_message()
      </div>
      <p className="text-sm text-white/65 leading-relaxed">
        Tell me a little about yourself — your name, affiliation, and what
        you'd like to chat about. I read everything that comes in.
      </p>

      {/* Formsubmit configuration knobs — these never appear in your inbox. */}
      <input type="hidden" name="_subject" value="New message from your portfolio" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          label="Name"
          name="name"
          type="text"
          required
          placeholder="Jane Doe"
          autoComplete="name"
        />
        <Field
          label="Affiliation"
          name="affiliation"
          type="text"
          required
          placeholder="PhD Student, MIT · Recruiter, NVIDIA"
          autoComplete="organization"
        />
      </div>
      <Field
        label="Email"
        name="email"
        type="email"
        required
        placeholder="you@university.edu"
        autoComplete="email"
      />
      <div>
        <label htmlFor="message" className="block text-[11px] font-mono uppercase tracking-widest text-white/55 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What would you like to discuss? Research collaboration, internship, paper feedback, or just to say hi…"
          className="w-full rounded-xl bg-white/[0.04] border border-white/10 focus:border-violet-400/60 focus:bg-white/[0.06] outline-none px-4 py-3 text-sm text-white placeholder-white/35 transition resize-y"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold shadow-lg shadow-violet-500/30 hover:shadow-violet-400/40 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          {status === 'sending' ? (
            <>
              <Loader2 size={15} className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send size={15} /> Send message
            </>
          )}
        </button>

        {status === 'sent' ? (
          <span className="inline-flex items-center gap-2 text-sm text-emerald-300">
            <Check size={15} /> Thanks — I'll get back to you soon.
          </span>
        ) : null}
        {status === 'error' ? (
          <span className="inline-flex items-center gap-2 text-sm text-rose-300">
            <AlertCircle size={15} /> {error}
          </span>
        ) : null}
      </div>

      <p className="text-[11px] text-white/40 leading-relaxed">
        Your message goes straight to {profile.email}. No tracking, no
        newsletter, no third-party sharing.
      </p>
    </motion.form>
  );
}

function Field({ label, name, type = 'text', required, placeholder, autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] font-mono uppercase tracking-widest text-white/55 mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl bg-white/[0.04] border border-white/10 focus:border-violet-400/60 focus:bg-white/[0.06] outline-none px-4 py-3 text-sm text-white placeholder-white/35 transition"
      />
    </div>
  );
}
