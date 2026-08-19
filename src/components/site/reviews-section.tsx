import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

type Review = {
  chip: string;
  delay?: number;
};

type ReviewsSectionProps = {
  reviews: Review[];
};

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section
      id="reviews"
      className="mx-auto w-full max-w-[1200px] px-[clamp(20px,6vw,80px)] py-[clamp(48px,9vh,96px)] max-[720px]:px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-[clamp(22px,4vh,36px)] text-[clamp(30px,4.5vw,48px)] font-semibold tracking-[-0.02em] text-[#17140f]"
      >
        Reviews
      </motion.h2>

      <div className="grid grid-cols-3 gap-[clamp(14px,2vw,24px)] max-[720px]:mx-auto max-[720px]:max-w-[420px] max-[720px]:grid-cols-1">
        {reviews.map((review, index) => (
          <motion.div
            key={review.chip}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.8,
              delay: review.delay ?? index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative grid aspect-[3/4] cursor-pointer place-items-center rounded-[clamp(14px,1.6vw,20px)] bg-[#28282a] bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1.6px)] bg-[length:14px_14px] shadow-[0_4px_14px_rgba(0,0,0,0.16)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.22)]"
          >
            <span className="grid h-[clamp(44px,5vw,56px)] w-[clamp(44px,5vw,56px)] place-items-center rounded-full bg-primary text-[clamp(14px,1.6vw,17px)] text-[#17140f] transition-transform duration-300 group-hover:scale-110">
              <i className="fa-solid fa-play" aria-hidden="true" />
            </span>
            <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-[9px] py-1 text-[10.5px] font-medium tracking-[0.01em] text-white">
              {review.chip}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-[clamp(30px,5.5vh,48px)] flex items-center justify-between gap-[clamp(20px,4vw,48px)] max-[720px]:flex-col max-[720px]:items-start"
      >
        <h3 className="max-w-[460px] text-[clamp(19px,2.5vw,27px)] font-semibold leading-[1.25] tracking-[-0.02em] text-[#17140f]">
          These all are the Honest Reviews From Our Real Clients
        </h3>
        <Button asChild className="px-[clamp(22px,3vw,28px)] py-[clamp(11px,1.6vh,13px)] text-[clamp(13.5px,1.5vw,14.5px)] tracking-[-0.01em]">
          <a href="#contact">Become Our Client</a>
        </Button>
      </motion.div>
    </section>
  );
}
