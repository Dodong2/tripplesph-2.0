import { LogoMark } from '../ui/LogoMark'

export const LoginBrand = () => {
    return (
        <div>
            <div className="flex items-center gap-3 mb-10">
                <LogoMark size={52} />
                <div className="flex flex-col">
                    <span className="font-['Poppins',sans-serif] font-bold text-[28px] text-white leading-tight">
                        Tripples
                    </span>
                    <span className="text-white/70 text-sm">Blogs</span>
                </div>
            </div>

            {/* Hero copy */}
            <h1 className="font-['Poppins',sans-serif] font-bold text-[48px] xl:text-[56px] text-white leading-[1.1] mb-4">
                Command Your<br />Online Presence
            </h1>
            <p className="text-white text-lg leading-relaxed max-w-[440px] mb-4">
                Access powerful tools to manage content, analytics, users, and more.
            </p>
        </div>
    )
}

