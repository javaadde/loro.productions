import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";

type HeroSectionProps = {
  onContactClick?: () => void;
};

const reveal = {
  initial: { opacity: 0, y: 22, scale: 0.98, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
};

const BADGE_TEXTS = [
  "We craft binge-worthy personal brands.",
  "We turn viewers into superfans.",
  "We edit short-form that converts.",
  "We build category kings.",
];

const BADGE_TEXTS_MOBILE = [
  "Binge-worthy personal brands",
  "Viewers into superfans",
  "Short-form that converts",
  "Build category kings",
];

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="relative z-[1] flex min-h-0 w-full flex-1 items-center justify-center">
      <div className="flex max-w-[900px] flex-col items-center text-center">
        <motion.div
          initial={shouldReduceMotion ? false : reveal.initial}
          animate={shouldReduceMotion ? undefined : reveal.animate}
          transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mb-[clamp(16px,2.5vh,26px)] inline-flex items-center"
        >
          <div className="relative z-[1] grid h-[clamp(36px,4.5vw,42px)] w-[clamp(36px,4.5vw,42px)] place-items-center rounded-full border border-black/15 bg-[#28282a] p-[5px] transition-transform duration-300 hover:-translate-y-0.5 max-[420px]:h-[34px] max-[420px]:w-[34px]">
            <span className="grid h-full w-full place-items-center rounded-full bg-white text-[calc(clamp(36px,4.5vw,42px)*0.38)] text-[#111]">
              <i className="fa-brands fa-youtube" aria-hidden="true" />
            </span>
          </div>
          <div className="relative z-[2] -ml-[calc(clamp(36px,4.5vw,42px)*0.42)] grid h-[clamp(36px,4.5vw,42px)] w-[clamp(36px,4.5vw,42px)] place-items-center rounded-full border border-black/15 bg-[#28282a] p-[5px] transition-transform duration-300 hover:-translate-y-0.5 max-[420px]:h-[34px] max-[420px]:w-[34px]">
            <span className="grid h-full w-full place-items-center rounded-full bg-white text-[calc(clamp(36px,4.5vw,42px)*0.38)] text-[#111]">
              <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
            </span>
          </div>
          <div className="relative z-[4] -ml-[calc(clamp(36px,4.5vw,42px)*0.42)] grid h-[clamp(36px,4.5vw,42px)] w-[clamp(36px,4.5vw,42px)] place-items-center rounded-full border border-black/15 bg-[#28282a] p-[5px] transition-transform duration-300 hover:-translate-y-1 max-[420px]:h-[34px] max-[420px]:w-[34px]">
            <span className="grid h-full w-full place-items-center rounded-full bg-white text-[calc(clamp(36px,4.5vw,42px)*0.38)] text-[#111]">
              <i className="fa-brands fa-instagram" aria-hidden="true" />
            </span>
          </div>
          <div className="-ml-[calc(clamp(36px,4.5vw,42px)*0.42)] inline-flex h-[clamp(36px,4.5vw,42px)] w-[440px] items-center overflow-hidden rounded-full border border-black/15 bg-[#28282a] pl-[calc(clamp(36px,4.5vw,42px)*0.58)] pr-[clamp(14px,2vw,20px)] font-medium tracking-[-0.01em] text-[#c4c2c3] max-[420px]:h-[34px] max-[420px]:w-[260px]">
            <motion.span
              initial={shouldReduceMotion ? false : { x: "-50%" }}
              animate={shouldReduceMotion ? undefined : { x: ["-50%", "0%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="inline-flex w-max shrink-0 items-center whitespace-nowrap text-[clamp(11px,1.3vw,13px)] max-[420px]:text-[11px]"
            >
              {[...BADGE_TEXTS, ...BADGE_TEXTS].map((text, i) => (
                <span key={i} className="inline-flex items-center">
                  <span className="max-[420px]:hidden">{text}</span>
                  <span className="hidden max-[420px]:inline">
                    {BADGE_TEXTS_MOBILE[i % BADGE_TEXTS.length]}
                  </span>
                  <span aria-hidden="true" className="mx-[1.1em] opacity-60">
                    •
                  </span>
                </span>
              ))}
            </motion.span>
          </div>
        </motion.div>

        <h1 className="max-w-full overflow-hidden whitespace-nowrap font-display text-[clamp(22px,4.8vw,56px)] font-normal leading-[1.12] tracking-[-0.04em] text-[#17140f] max-[720px]:leading-[1.05] max-[720px]:tracking-[-0.08em] max-[420px]:leading-[1.04] max-[420px]:tracking-[-0.09em]">
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            We Don&apos;t Just Edit Videos.
          </motion.span>
          <motion.span
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            We Build Category Kings.
          </motion.span>
        </h1>

        <motion.p
          id="about"
          initial={shouldReduceMotion ? false : reveal.initial}
          animate={shouldReduceMotion ? undefined : reveal.animate}
          transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-[clamp(14px,2.2vh,22px)] max-w-[min(500px,92%)] scroll-mt-6 text-[clamp(calc(13.5px+2pt),calc(1.55vw+2pt),calc(16.5px+2pt))] leading-[1.55] text-[#4a443b]/85 max-[700px]:mt-[clamp(10px,1.6vh,16px)]"
        >
          &ldquo;Your personal brand is what people say about you when you&apos;re not in the room. Great video makes sure they say the right things.&rdquo;
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : reveal.initial}
          animate={shouldReduceMotion ? undefined : reveal.animate}
          transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button asChild className="mt-[clamp(18px,3vh,30px)] px-[clamp(22px,3vw,28px)] py-[clamp(11px,1.6vh,13px)] text-[clamp(13.5px,1.5vw,14.5px)] tracking-[-0.01em] max-[700px]:mt-[clamp(14px,2.2vh,22px)]">
            <a href="#contact" onClick={onContactClick}>
              Become Our Client
            </a>
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
