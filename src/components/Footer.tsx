import { LINKEDIN_URL, WHATSAPP_URL, EMAIL } from "../lib/constants";

export default function Footer() {
  return (
    <>
      <footer className="relative z-10 border-t border-gold/10 px-5 py-10 text-center sm:px-8">
        <p className="font-display text-lg text-gold">
          QueenEagle<span className="text-seagreen">AI</span>
        </p>
        <p className="mt-2 font-body text-xs text-cream/50 sm:text-sm">
          © 2026 QueenEagleAI · AI Automation Consultant and Engineer
        </p>
        <p className="mt-1 font-body text-xs text-cream/40 sm:text-sm">
          Designing the future of intelligent automation
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-6">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-cream/60 hover:text-gold"
          >
            LinkedIn
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-cream/60 hover:text-gold"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="font-body text-sm text-cream/60 hover:text-gold"
          >
            Email
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp chat bubble */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with my AI Agent on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-seagreen text-2xl shadow-lg transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
      >
        🤖
      </a>
    </>
  );
}
