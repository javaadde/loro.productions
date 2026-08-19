import { Phone } from "lucide-react";

import logo from "../../../assets/logo.webp";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
  active?: boolean;
};

type SiteHeaderProps = {
  navItems: NavItem[];
  menuOpen: boolean;
  onMenuToggle: () => void;
};

export function SiteHeader({ navItems, menuOpen, onMenuToggle }: SiteHeaderProps) {
  return (
    <header className="relative z-[7] flex w-full max-w-[720px] shrink-0 items-center justify-center gap-[clamp(18px,2.8vw,28px)] motion-safe:animate-[slideDown_0.7s_cubic-bezier(0.22,1,0.36,1)_both] max-[720px]:max-w-none max-[720px]:justify-between">
      <a
        className="grid h-[clamp(40px,4.4vw,46px)] w-[clamp(40px,4.4vw,46px)] shrink-0 place-items-center rounded-full transition-transform duration-300 hover:scale-105 max-[720px]:h-12 max-[720px]:w-12"
        href="#"
        aria-label="Loro Productions - Home"
      >
        <img
          src={logo}
          alt=""
          width={52}
          height={52}
          className="h-[72%] w-[72%] object-contain"
        />
      </a>

      <nav
        aria-label="Primary"
        className="flex h-[clamp(44px,5.2vw,48px)] max-w-[430px] flex-1 items-center justify-evenly rounded-full border border-black/10 bg-[rgba(248,241,228,0.8)] px-2 py-1 shadow-[0_4px_14px_rgba(0,0,0,0.16)] backdrop-blur-[10px] max-[720px]:hidden"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={item.active ? "page" : undefined}
            className={cn(
              "relative flex h-full items-center px-1.5 text-[clamp(13px,1.4vw,15px)] font-medium tracking-[-0.01em] text-[#2e2e2e] transition-opacity duration-200 hover:opacity-75",
              item.active ? "nav-active-dots opacity-100" : "opacity-50",
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <Button
        asChild
        variant="secondary"
        className="h-[clamp(44px,5.2vw,48px)] px-[clamp(16px,2.4vw,24px)] text-[clamp(13px,1.4vw,15px)] font-medium tracking-[-0.01em] max-[720px]:hidden"
      >
        <a href="tel:+917602937442">
          <Phone className="h-3.5 w-3.5" />
          +91 7602937442
        </a>
      </Button>

      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobileMenu"
        onClick={onMenuToggle}
        className={cn(
          "relative hidden h-12 w-12 rounded-full bg-[#28282a] shadow-[0_4px_14px_rgba(0,0,0,0.16)] transition-colors duration-300 max-[720px]:block",
          menuOpen && "bg-white",
        )}
      >
        {[0, 1, 2].map((line) => (
          <span
            key={line}
            className={cn(
              "absolute left-1/2 top-1/2 h-[1.5px] w-[18px] -translate-x-1/2 rounded-[2px] bg-white transition-all duration-300",
              line === 1 && menuOpen && "opacity-0",
              menuOpen && "bg-black",
            )}
            style={{
              transform:
                line === 0
                  ? menuOpen
                    ? "translate(-50%, -50%) rotate(45deg)"
                    : "translate(-50%, -50%) translateY(-6.5px)"
                  : line === 1
                    ? "translate(-50%, -50%)"
                    : menuOpen
                      ? "translate(-50%, -50%) rotate(-45deg)"
                      : "translate(-50%, -50%) translateY(6.5px)",
            }}
          />
        ))}
      </button>
    </header>
  );
}
