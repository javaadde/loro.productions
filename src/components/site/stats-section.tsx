import { motion } from "framer-motion";

import { CountUp } from "@/components/site/count-up";

type Stat = {
  icon: string;
  target: number;
  suffix: string;
  label: string;
};

type StatsSectionProps = {
  stats: Stat[];
};

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <footer className="relative z-[1] grid w-full max-w-[920px] shrink-0 grid-cols-4 gap-[clamp(14px,2.4vw,28px)] max-[720px]:grid-cols-2 max-[720px]:gap-y-[clamp(18px,3vh,26px)]">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 22, scale: 0.98, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.85, delay: 0.5 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-[3px] text-center"
        >
          <div className="font-display text-[clamp(22px,3vw,33px)] leading-[1.15] text-primary">
            {stat.icon}
          </div>
          <CountUp
            target={stat.target}
            suffix={stat.suffix}
            className="text-[clamp(18px,2.2vw,26px)] font-semibold leading-[1.2] tracking-[-0.025em] text-[#17140f] tabular-nums"
          />
          <div className="text-[clamp(11px,1.2vw,12.5px)] font-medium text-muted-foreground">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </footer>
  );
}
