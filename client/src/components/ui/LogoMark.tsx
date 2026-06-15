import Logo from '../../assets/TRipples-logo.png'

export const LogoMark = ({ size = 48 }: { size?: number }) => {
    return (
        <div
            className="bg-white rounded-[10px] flex items-center justify-center flex-shrink-0"
            style={{ width: size, height: size }}
        >
            <img src={Logo} alt="TRipplesPH icon" className="w-10 h-10 object-cover" />
        </div>
    )
}