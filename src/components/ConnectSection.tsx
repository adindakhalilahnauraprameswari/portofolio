import { useState, FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MessageSquare } from 'lucide-react';
import { CONTACT_FOLIOS } from '../data/portfolio';

interface ConnectSectionProps {
  composeOpen: boolean;
  onToggleCompose: () => void;
}

export function ConnectSection({ composeOpen, onToggleCompose }: ConnectSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [topic, setTopic] = useState('Content Collaboration');
  const [message, setMessage] = useState('');
  const [dispatchNotice, setDispatchNotice] = useState<string | null>(null);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleDispatchSubmit = (e: FormEvent, channel: 'email' | 'whatsapp') => {
    e.preventDefault();
    const cleanName = senderName.trim() || 'A Collaborator';
    const cleanBody =
      message.trim() || 'Halo Naura, saya tertarik untuk berdiskusi mengenai kolaborasi.';
    const composedText = `Halo Naura, saya ${cleanName} (${topic}).\n\n${cleanBody}`;

    if (channel === 'whatsapp') {
      const url = `https://wa.me/6282126203274?text=${encodeURIComponent(composedText)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      setDispatchNotice('WhatsApp dispatch prepared in a new tab.');
    } else {
      const subject = `[Portfolio Folio] ${topic} — ${cleanName}`;
      const mailto = `mailto:adindakhalilahnaura31@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(composedText)}`;
      window.location.href = mailto;
      setDispatchNotice('Email client opened with your composed note.');
    }
  };

  return (
    <>
      <section
        id="connect"
        className="relative w-full bg-[#181512] text-[#F7EFE6] pt-20 pb-20 overflow-hidden"
      >
        {/* Hand-drawn Dashed Divider Line */}
        <div className="max-w-[1180px] mx-auto px-5 md:px-14 mb-12">
          <svg
            className="w-full h-3 block"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1180 12"
            aria-hidden="true"
          >
            <line
              stroke="#B85A3A"
              strokeOpacity="0.45"
              strokeDasharray="8 8"
              strokeWidth="2"
              x1="0"
              x2="1180"
              y1="6"
              y2="6"
            />
          </svg>
        </div>

        <div className="max-w-[1180px] mx-auto px-5 md:px-14">
          {/* Epilogue Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[#D9724E] font-mono-stamp text-xs font-bold uppercase tracking-[0.2em] mb-2">
                <span aria-hidden="true">✦</span>
                <span>EPILOGUE · LET&apos;S COLLABORATE</span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-[3.5rem] leading-[1.1] text-[#F7EFE6] tracking-tight font-bold">
                Start a Conversation
              </h2>
              <p className="font-body text-lg text-[#ccc6be] mt-3 leading-relaxed">
                Terbuka untuk peluang kolaborasi konten, kepanitiaan organisasi, proyek eksplorasi teknologi, maupun diskusi seputar dunia informatika dan media kreatif.
              </p>
            </div>

            <button
              type="button"
              onClick={onToggleCompose}
              aria-expanded={composeOpen}
              className="self-start md:self-end bg-[#D9724E] text-[#181512] border-2 border-[#B85A3A] font-mono-stamp text-xs font-bold uppercase tracking-[0.15em] px-6 py-3.5 comic-shadow-sm hover:bg-[#ffb59c] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {composeOpen ? 'Hide Dispatch Note' : 'Compose Dispatch Note'}
            </button>
          </div>

          {/* Interactive Dispatch Form (DESIGN.md Form Input spec: 0px radius, 1.5px #B85A3A border, 3px #D9724E focus offset) */}
          {composeOpen && (
            <form
              onSubmit={(e) => handleDispatchSubmit(e, 'email')}
              className="mb-12 bg-[#221E1A] border-2 border-[#B85A3A] p-6 md:p-8 comic-shadow"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#B85A3A]/35">
                <div>
                  <span className="font-mono-stamp text-[11px] font-bold uppercase tracking-[0.2em] text-[#D9724E] block">
                    DIRECT DISPATCH DRAFT
                  </span>
                  <h3 className="font-editorial text-2xl font-semibold text-[#F7EFE6]">
                    Send a Collaboration Inquiry
                  </h3>
                </div>
                <span className="font-mono-stamp text-[11px] font-bold text-[#ccc6be] uppercase tracking-widest hidden sm:inline">
                  FOLIO DISPATCH
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <label className="flex flex-col gap-2">
                  <span className="font-mono-stamp text-[11px] font-bold uppercase tracking-widest text-[#ccc6be]">
                    Your Name
                  </span>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Nama / Organisasi"
                    className="bg-[#181512] text-[#F7EFE6] placeholder:text-[#a48b84] border-[1.5px] border-[#B85A3A] px-4 py-3 text-sm focus:outline-none focus:border-[#D9724E] focus:shadow-[3px_3px_0px_#D9724E] transition-shadow"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-mono-stamp text-[11px] font-bold uppercase tracking-widest text-[#ccc6be]">
                    Inquiry Topic
                  </span>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="bg-[#181512] text-[#F7EFE6] border-[1.5px] border-[#B85A3A] px-4 py-3 text-sm focus:outline-none focus:border-[#D9724E] focus:shadow-[3px_3px_0px_#D9724E] transition-shadow"
                  >
                    <option value="Content Collaboration">Content Collaboration</option>
                    <option value="Campus & Organization">Campus &amp; Organization</option>
                    <option value="Tech / Web Project">Tech / Web Project</option>
                    <option value="General Hello">General Hello</option>
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-2 mb-6">
                <span className="font-mono-stamp text-[11px] font-bold uppercase tracking-widest text-[#ccc6be]">
                  Message Note
                </span>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ceritakan singkat rencana kolaborasi atau diskusi Anda..."
                  className="bg-[#181512] text-[#F7EFE6] placeholder:text-[#a48b84] border-[1.5px] border-[#B85A3A] px-4 py-3 text-sm focus:outline-none focus:border-[#D9724E] focus:shadow-[3px_3px_0px_#D9724E] transition-shadow resize-y"
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#FAF3EB] text-[#1E1916] font-mono-stamp text-xs font-bold uppercase tracking-[0.15em] px-5 py-3 comic-shadow-sm hover:bg-[#ffb59c] transition-colors cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleDispatchSubmit(e, 'whatsapp')}
                    className="inline-flex items-center gap-2 bg-[#181512] text-[#F7EFE6] border border-[#B85A3A] font-mono-stamp text-xs font-bold uppercase tracking-[0.15em] px-5 py-3 hover:bg-[#D9724E] hover:text-[#181512] transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                {dispatchNotice && (
                  <span className="font-mono-stamp text-[11px] font-bold text-[#ffb59c]">
                    {dispatchNotice}
                  </span>
                )}
              </div>
            </form>
          )}

          {/* 4 Interactive Contact Ticket Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_FOLIOS.map((card) => (
              <div
                key={card.folio}
                className="group bg-[#FAF3EB] text-[#1E1916] p-6 comic-shadow comic-interactive flex flex-col justify-between min-h-[168px]"
              >
                <div>
                  <div className="flex items-center justify-between font-mono-stamp text-[11px] text-[#B85A3A] font-bold">
                    <span>{card.folio}</span>
                    <div className="flex items-center gap-2">
                      {card.copyable && (
                        <button
                          type="button"
                          onClick={() => handleCopyEmail(card.value)}
                          aria-label="Copy email address"
                          title="Copy email address"
                          className="p-1 text-[#4a4641] hover:text-[#B85A3A] transition-colors cursor-pointer"
                        >
                          {copiedEmail ? (
                            <Check className="w-3.5 h-3.5 text-[#B85A3A]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                      <a
                        href={card.href}
                        target={card.external ? '_blank' : undefined}
                        rel={card.external ? 'noopener noreferrer' : undefined}
                        aria-label={`Open ${card.title}`}
                        className="text-[#B85A3A] hover:text-[#1E1916]"
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                  <div className="font-mono-stamp text-[11px] font-bold text-[#4a4641] uppercase tracking-widest mt-2">
                    {card.kicker}
                  </div>
                  <h4 className="font-editorial text-2xl font-semibold text-[#1E1916] mt-1">
                    {card.title}
                  </h4>
                </div>

                <a
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className="font-body text-sm text-[#1E1916] font-medium break-all mt-4 hover:text-[#B85A3A] transition-colors"
                >
                  {copiedEmail && card.copyable ? 'Copied to clipboard!' : card.value}
                </a>
              </div>
            ))}
          </div>

          {/* Archival Colophon Strip */}
          <div className="mt-16 pt-8 border-t border-[#56423c]/30 flex flex-col md:flex-row items-center justify-between gap-4 font-mono-stamp text-[11px] font-bold text-[#ccc6be] uppercase tracking-[0.18em]">
            <div className="flex items-center gap-3">
              <span className="text-[#D9724E]" aria-hidden="true">
                ✦
              </span>
              <span>© 2026 A. K. NAURA PRAMESWARI</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              <span>JAKARTA BARAT</span>
              <span className="text-[#B85A3A]" aria-hidden="true">
                ·
              </span>
              <span>TERNATE</span>
              <span className="text-[#B85A3A]" aria-hidden="true">
                ·
              </span>
              <span>INFORMATICS ENGINEERING ITPLN</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#100e0b] py-10 border-t border-[#56423c]/20">
        <div className="max-w-[1180px] mx-auto px-5 md:px-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="font-editorial text-2xl font-semibold text-[#F7EFE6] tracking-tight">
              A. K. Naura Prameswari
            </span>
            <p className="font-body text-sm text-[#dcc1b8]">
              Editorial storytelling, narrative illustration, &amp; serialized ink archives.
            </p>
          </div>
          <div className="flex items-center gap-4 font-mono-stamp text-[11px] font-bold text-[#dcc1b8] uppercase tracking-[0.15em]">
            <span>© MMXXVI</span>
            <span className="text-[#B85A3A]" aria-hidden="true">
              ✦
            </span>
            <span>Vol. I — All Folios Preserved</span>
          </div>
        </div>
      </footer>
    </>
  );
}
