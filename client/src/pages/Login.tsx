import { signInWithGoogle } from "../services/auth.service"
import { useState } from 'react'

import { LoginForm } from "../components/auth/LoginForm"
import { LoginHero } from "../components/auth/LoginHero"
import { LogoMark } from "../components/ui/LogoMark"
import { GridBg } from "../components/backgrounds/GridBg"

const Login = () => {
    const [loading, setLoading] = useState(false)


    const handleSignIn = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => setLoading(false), 1500)
    }

    const handleGoogleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        signInWithGoogle()
    }

    return (
        <div className="min-h-screen bg-[#197996] flex items-stretch relative overflow-hidden">
            <GridBg />

            {/* ── Left panel ─────────────────────────────────────────────────── */}
            <LoginHero />

            {/* ── Right panel — form ──────────────────────────────────────────── */}
            <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-10 lg:py-0">
                {/* Mobile brand header */}
                <div className="lg:hidden absolute top-3 left-6 flex items-center gap-2">
                    <LogoMark size={52} />
                    <span className="font-['Poppins',sans-serif] font-bold text-[22px] text-white">Tripples</span>
                </div>

                {/* Form */}
                <LoginForm signIn={handleSignIn} googleSignIn={handleGoogleSignIn} loading={loading} />
            </div>
        </div>
    )
}

export default Login