export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1200px] px-[clamp(20px,6vw,80px)] pb-[clamp(20px,3vh,30px)] pt-[clamp(36px,7vh,64px)] max-[720px]:px-6">
      <div className="flex flex-wrap items-center justify-between gap-6 pb-[22px] max-[420px]:flex-col max-[420px]:items-start">
        <div>
          <svg
            className="h-[30px] w-auto fill-[#17140f]"
            viewBox="0 0 120 30"
            aria-hidden="true"
            focusable="false"
          >
            <rect x="0" width="3" height="30" />
            <rect x="5" width="1" height="30" />
            <rect x="8" width="2" height="30" />
            <rect x="12" width="1" height="30" />
            <rect x="15" width="1" height="30" />
            <rect x="18" width="3" height="30" />
            <rect x="23" width="2" height="30" />
            <rect x="27" width="2" height="30" />
            <rect x="31" width="1" height="30" />
            <rect x="34" width="3" height="30" />
            <rect x="39" width="1" height="30" />
            <rect x="42" width="2" height="30" />
            <rect x="46" width="3" height="30" />
            <rect x="51" width="1" height="30" />
            <rect x="54" width="1" height="30" />
            <rect x="57" width="2" height="30" />
            <rect x="61" width="3" height="30" />
            <rect x="66" width="1" height="30" />
            <rect x="69" width="2" height="30" />
            <rect x="73" width="2" height="30" />
            <rect x="77" width="1" height="30" />
            <rect x="80" width="3" height="30" />
            <rect x="85" width="2" height="30" />
            <rect x="89" width="1" height="30" />
            <rect x="92" width="1" height="30" />
            <rect x="95" width="3" height="30" />
            <rect x="100" width="2" height="30" />
            <rect x="104" width="1" height="30" />
            <rect x="107" width="2" height="30" />
            <rect x="111" width="3" height="30" />
            <rect x="116" width="1" height="30" />
          </svg>
          <div className="mt-2 text-[13px] font-semibold tracking-[-0.01em]">Loro Productions</div>
          <div className="mt-0.5 text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
            System Serial // SS-2026-LORO
          </div>
        </div>

        <div className="flex gap-2.5">
          {[
            ["Instagram", "fa-instagram"],
            ["X (Twitter)", "fa-x-twitter"],
            ["LinkedIn", "fa-linkedin-in"],
            ["YouTube", "fa-youtube"],
          ].map(([label, icon]) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full text-[15px] text-[#17140f] transition-[background,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#28282a] hover:text-white"
            >
              <i className={`fa-brands ${icon}`} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-[14px] border-t border-black/10 pt-[18px] text-[11.5px] text-muted-foreground max-[420px]:flex-col max-[420px]:items-start">
        <p>&copy; 2026 Loro Productions. All rights reserved.</p>
        <nav aria-label="Legal" className="flex gap-[22px]">
          <a href="#" className="transition-colors duration-200 hover:text-[#17140f]">
            Privacy Protocol
          </a>
          <a href="#" className="transition-colors duration-200 hover:text-[#17140f]">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
}
