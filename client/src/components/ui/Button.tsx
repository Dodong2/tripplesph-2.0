import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "teal" | "ghost" | "danger" | "outline";
type ButtonSize    = "sm" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  loadingText?: string;
  children: ReactNode;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  teal:    "bg-[#197996] text-white border-none hover:bg-[#155f75] active:opacity-80",
  ghost:   "bg-transparent text-[#197996] border border-[#197996] hover:bg-[#197996]/10 active:opacity-80",
  danger:  "bg-transparent text-red-500 border border-red-400 hover:bg-red-50 active:opacity-80",
  outline: "bg-white text-[#111] border border-[#d0d0d0] hover:bg-gray-50 active:opacity-80",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "h-[30px] px-3 text-xs rounded-[8px]",
  md: "h-[36px] px-4 text-sm rounded-[10px]",
};

export function Button({
  variant = "teal",
  size = "md",
  loading = false,
  loadingText,
  disabled,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-1.5
        font-medium whitespace-nowrap
        transition-colors duration-150 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${VARIANT_STYLES[variant]}
        ${SIZE_STYLES[size]}
        ${className}
      `}
      {...rest}
    >
      {loading && (
        <span className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin flex-shrink-0" />
      )}
      {loading && loadingText ? loadingText : children}
    </button>
  );
}