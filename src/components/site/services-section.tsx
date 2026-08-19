import { motion } from "framer-motion";

type Service = {
  number: string;
  title: string;
  copy: string;
  delay?: number;
};

type ServicesSectionProps = {
  services: Service[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section
      id="works"
      className="mx-auto w-full max-w-[1200px] px-[clamp(20px,6vw,80px)] py-[clamp(48px,9vh,96px)] max-[720px]:px-8"
    >
      <div className="grid grid-cols-3 gap-[clamp(28px,4vw,56px)] max-[720px]:grid-cols-1 max-[720px]:gap-[30px]">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.8,
              delay: service.delay ?? index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="font-display text-[clamp(34px,4.5vw,54px)] leading-none text-primary">
              {service.number}
            </div>
            <h3 className="mt-2.5 text-[15.5px] font-semibold tracking-[-0.01em] text-[#17140f]">
              {service.title}
            </h3>
            <p className="mt-2 max-w-[34ch] text-[13px] leading-[1.65] text-muted-foreground max-[720px]:max-w-[52ch]">
              {service.copy}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
