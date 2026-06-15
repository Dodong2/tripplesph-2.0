import { useState } from "react"
import { IconLoginEmail, IconLoginEyeInvisible, IconLoginGoogle, IconLoginLineEye, IconLoginLock } from "../ui/Icons"
import { OrDivider } from "../ui/OrDivider"

interface LoginFormProps {
    signIn: (e: React.SyntheticEvent) => void
    googleSignIn: (e: React.MouseEvent<HTMLButtonElement>) => void
    loading: boolean
}

export const LoginForm = ({ signIn, googleSignIn, loading }: LoginFormProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)


    return (
        <div className="bg-white rounded-[13px] w-full max-w-[512px] px-8 sm:px-10 py-10 shadow-2xl">
            {/* Heading */}
            <div className="text-center mb-6">
                <h2 className="font-['Poppins',sans-serif] font-bold text-[26px] text-black">
                    Welcome Back
                </h2>
                <p className="text-[#555] text-sm mt-1">Sign in to access your writer dashboard</p>
            </div>

            {/* Google button */}
            <button
                onClick={googleSignIn}
                className="w-full flex items-center justify-center gap-3 h-[47px] rounded-[5px] border-2 border-[#f3f3f5] bg-white hover:bg-[#fafafa] transition-colors text-black text-[16px] font-normal mb-4"
            >
                <IconLoginGoogle />
                Continue with Gmail
            </button>

            <OrDivider />

            <form onSubmit={signIn} className="flex flex-col gap-4 mt-4">
                {/* Email */}
                <div>
                    <label className="block text-[16px] text-black mb-1.5 font-normal">
                        Email Address
                    </label>
                    <div className="relative">
                        <IconLoginEmail />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full h-[47px] bg-[#f3f3f5] rounded-[5px] pl-9 pr-4 text-[14px] text-black placeholder:text-[#7c7c7c] outline-none focus:ring-2 focus:ring-[#197996]/40 transition"
                        />
                    </div>
                </div>

                {/* Password */}
                <div>
                    <label className="block text-[16px] text-black mb-1.5 font-normal">
                        Password
                    </label>
                    <div className="relative">
                        <IconLoginLock />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full h-[47px] bg-[#f3f3f5] rounded-[5px] pl-9 pr-10 text-[14px] text-black placeholder:text-[#7c7c7c] outline-none focus:ring-2 focus:ring-[#197996]/40 transition"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7c7c7c] hover:text-[#197996] transition-colors"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword
                                ? <IconLoginEyeInvisible />
                                : <IconLoginLineEye />}
                        </button>
                    </div>
                </div>

                {/* Remember me + Forgot password */}
                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                        <div className="relative">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-4 h-4 rounded-[4px] border border-[#7c7c7c] bg-[#f3f3f5] peer-checked:bg-[#197996] peer-checked:border-[#197996] flex items-center justify-center transition-colors">
                                {rememberMe && (
                                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                                        <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </div>
                        <span className="text-[14px] text-black">Remember me</span>
                    </label>
                    <a
                        href="/forgot-password"
                        className="text-[14px] text-[#0c97a8] hover:underline"
                    >
                        Forgot password?
                    </a>
                </div>

                {/* Sign in button */}
                <button
                    disabled={loading}
                    className="w-full h-[47px] rounded-[8px] bg-[#197896] hover:bg-[#156a82] active:bg-[#115a70] text-white font-semibold text-[18px] transition-colors disabled:opacity-60 flex items-center justify-center mt-1"
                >
                    {loading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                    ) : 'Sign In'}
                </button>
            </form>
            {/* Help link */}
            <p className="text-center text-[13px] text-[#555] mt-5">
                Need help? Contact{' '}
                <a href="mailto:support@advantage.com" className="text-[#0c97a8] hover:underline">
                    support@advantage.com
                </a>
            </p>
        </div>
    )
}
