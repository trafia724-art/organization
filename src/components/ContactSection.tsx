import { FormEvent, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';

interface FormFeedback {
  type: 'error' | 'success';
  message: string;
}

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState<FormFeedback | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setFeedback({
        type: 'error',
        message: 'Please fill in your name, email, subject, and message before submitting.',
      });
      return;
    }

    if (!emailValid) {
      setFeedback({
        type: 'error',
        message: 'Please enter a valid email address so we can reply to you.',
      });
      return;
    }

    setFeedback({
      type: 'success',
      message:
        'Form validated! No backend email service is connected yet—please connect Formspree/EmailJS or reach out directly via the email address listed beside this form.',
    });
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id="contact" className="bg-light-surface py-gutter-xl md:py-section">
      <div className="max-w-6xl mx-auto px-gutter-lg md:px-gutter-xl flex flex-col gap-gutter-xl">
        <div className="flex flex-col gap-gutter-xs max-w-2xl">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-light-on-surface">
            Get In Touch
          </h2>
          <p className="font-body text-body-lg text-light-on-surface-variant">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-gutter-md">
            <div className="bg-light-surface-container-lowest rounded-xl p-gutter-lg border border-light-outline-variant/60 shadow-sm flex items-start gap-gutter-md">
              <div className="w-11 h-11 rounded-full bg-light-surface-container text-light-primary flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-gutter-xs">
                <span className="font-label text-label-md text-light-primary">Location</span>
                <p className="font-title text-title-md text-light-on-surface">
                  {PORTFOLIO_PROFILE.location}
                </p>
              </div>
            </div>

            <div className="bg-light-surface-container-lowest rounded-xl p-gutter-lg border border-light-outline-variant/60 shadow-sm flex items-start gap-gutter-md">
              <div className="w-11 h-11 rounded-full bg-light-surface-container text-light-primary flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-gutter-xs">
                <span className="font-label text-label-md text-light-primary">
                  Email (Editable Placeholder)
                </span>
                <a
                  href={`mailto:${PORTFOLIO_PROFILE.email}`}
                  className="font-title text-title-md text-light-on-surface hover:text-light-primary transition-colors duration-state-change break-all"
                >
                  {PORTFOLIO_PROFILE.email}
                </a>
              </div>
            </div>

            <div className="bg-light-surface-container-lowest rounded-xl p-gutter-lg border border-light-outline-variant/60 shadow-sm flex items-start gap-gutter-md">
              <div className="w-11 h-11 rounded-full bg-light-surface-container text-light-primary flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-gutter-xs">
                <span className="font-label text-label-md text-light-primary">
                  Phone (Editable Placeholder)
                </span>
                <p className="font-title text-title-md text-light-on-surface tabular-nums">
                  {PORTFOLIO_PROFILE.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-light-surface-container-lowest rounded-2xl p-gutter-lg md:p-gutter-xl border border-light-outline-variant/60 shadow-sm">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-gutter-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md">
                <label className="flex flex-col gap-gutter-xs">
                  <span className="font-label text-label-lg text-light-on-surface">
                    Your Name
                  </span>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-light-outline-variant bg-light-surface px-4 py-3 font-body text-body-md text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 focus:outline-none transition-colors duration-state-change"
                  />
                </label>

                <label className="flex flex-col gap-gutter-xs">
                  <span className="font-label text-label-lg text-light-on-surface">
                    Your Email
                  </span>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-light-outline-variant bg-light-surface px-4 py-3 font-body text-body-md text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 focus:outline-none transition-colors duration-state-change"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-gutter-xs">
                <span className="font-label text-label-lg text-light-on-surface">Subject</span>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project inquiry or collaboration"
                  className="w-full rounded-lg border border-light-outline-variant bg-light-surface px-4 py-3 font-body text-body-md text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 focus:outline-none transition-colors duration-state-change"
                />
              </label>

              <label className="flex flex-col gap-gutter-xs">
                <span className="font-label text-label-lg text-light-on-surface">Message</span>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me a little about your project or question..."
                  className="w-full rounded-lg border border-light-outline-variant bg-light-surface px-4 py-3 font-body text-body-md text-light-on-surface placeholder:text-light-outline focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 focus:outline-none transition-colors duration-state-change"
                />
              </label>

              {/* Validation & Honest Status Banner */}
              {feedback && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-lg p-gutter-md font-body text-body-md ${
                    feedback.type === 'error'
                      ? 'bg-light-error-container text-light-on-error-container'
                      : 'bg-light-surface-container text-light-on-surface'
                  }`}
                >
                  {feedback.message}
                </div>
              )}

              <div className="pt-gutter-xs">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-gutter-sm px-7 py-3.5 rounded-full bg-light-primary text-light-on-primary shadow-sm hover:bg-light-primary-container hover:-translate-y-0.5 transition-transform duration-state-change ease-state-change focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-primary focus-visible:ring-offset-2 whitespace-nowrap shrink-0"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span className="font-label text-label-lg">Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
