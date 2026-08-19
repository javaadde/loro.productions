import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import heroImage from "../../../assets/hero.png";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-[1200px] px-[clamp(20px,6vw,80px)] pb-[clamp(48px,9vh,96px)] pt-[clamp(24px,5vh,48px)] max-[720px]:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-[clamp(20px,4vw,56px)] overflow-hidden rounded-[clamp(20px,3vw,34px)] bg-primary pl-[clamp(12px,2.4vw,28px)] pr-[clamp(22px,4.5vw,60px)] py-[clamp(26px,5vh,56px)] max-[720px]:flex-col max-[720px]:px-8 max-[720px]:text-center"
      >
        <div className="-mb-[clamp(26px,5vh,56px)] shrink-0 self-end max-[720px]:mb-0 max-[720px]:w-full max-[720px]:self-center max-[720px]:border-b max-[720px]:border-[#17140f]/25 max-[720px]:pb-0 max-[720px]:shadow-[0_16px_22px_-16px_rgba(23,20,15,0.95)]">
          <img
            src={heroImage}
            alt="CRT-monitor headed figure presenting the Loro mark"
            loading="lazy"
            className="w-[clamp(280px,36vw,500px)] max-w-none mix-blend-multiply max-[720px]:mx-auto"
          />
        </div>
        <div className="max-[720px]:pb-3 max-[720px]:pt-1">
          <h2 className="font-display text-[clamp(28px,5vw,62px)] font-normal leading-[1.08] tracking-[-0.04em] text-[#17140f]">
            Become Our Client
          </h2>
          <p className="my-3 max-w-[46ch] text-[clamp(13.5px,1.5vw,15.5px)] leading-[1.55] text-[#17140f]/80 max-[720px]:mx-auto max-[720px]:mb-[22px]">
            We craft binge-worthy personal brands. One call is all it takes to start building yours.
          </p>
          <Button asChild variant="secondary" className="px-[clamp(22px,3vw,28px)] py-[clamp(11px,1.6vh,13px)] text-[clamp(13.5px,1.5vw,14.5px)] tracking-[-0.01em]">
            <a href="tel:+917602937442">
              <Phone className="h-3.5 w-3.5" />
              Call +91 7602937442
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
