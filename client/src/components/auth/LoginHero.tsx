import { FEATURES } from "../../constants/auth.constants"
import { IconLoginArrowBack } from "../ui/Icons"
import { LoginBrand } from "./LoginBrand"

export const LoginHero = () => {
  return (
    <div className="relative z-10 hidden lg:flex flex-col justify-between w-[52%] px-16 py-12">
        {/* Brand */}
        <LoginBrand/>

        {/* Feature cards */}
        <div className="flex flex-col gap-3 mb-8">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-4 bg-[#197896] border border-white/30 rounded-[14px] px-5 py-4"
            >
              <div className="bg-white/15 rounded-[8px] w-[44px] h-[44px] flex items-center justify-center flex-shrink-0">
                <Icon  />
              </div>
              <div>
                <p className="font-bold text-white text-[17px] leading-tight">{title}</p>
                <p className="text-[#b9f0f6] text-[13px] mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-white/70 text-sm hover:text-white transition-colors"
        >
          <IconLoginArrowBack />
          Back to Tripples Website
        </a>
      </div>
  )
}

