// src/components/Sidebar.tsx
import { useLocation, Link } from "react-router-dom"
import type { ReactNode } from "react"
import { IconLogout } from "../ui/Icons"
import { signOut } from "../../services/auth.service"

interface SidebarItem {
  href: string
  icon: ReactNode
  text: string
}

interface SidebarProps {
  items: SidebarItem[]
  user: { name?: string | null; email?: string; image?: string | null }
}

const NavItem = ({ href, icon, text }: SidebarItem) => {
  const { pathname } = useLocation()
  const isActive = pathname === href

  return (
    <Link
      to={href}
      className={`w-full flex items-center gap-3 px-[18px] py-[13px] rounded-[15px] mb-1 text-sm font-normal transition-colors
        ${isActive ? "bg-white text-[#197996]" : "bg-transparent text-white hover:bg-white/10"}`}
    >
      {icon}
      {text}
    </Link>
  )
}

export const Sidebar = ({ items, user }: SidebarProps) => (
  <aside className="w-[255px] min-w-[255px] bg-[#197996] h-screen flex flex-col fixed left-0 top-0">
    {/* Logo */}
    <div className="px-[25px] pt-5 flex items-center gap-2.5">
      <div className="bg-white rounded-[10px] w-[41px] h-[41px] flex items-center justify-center shrink-0">
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
          <circle cx="13.5" cy="13.5" r="12" fill="#197996" stroke="white" strokeWidth="1.5" />
          <path d="M8 14l3.5 3.5L19 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="m-0 font-semibold text-xl text-white">Writer Portal</p>
        <p className="m-0 text-[11px] text-[#74bbcb]">TRiPPLeS</p>
      </div>
    </div>

    {/* Nav */}
    <nav className="px-[15px] pt-[30px] flex-1">
      {items.map((item, idx) => (
        <NavItem key={idx} {...item} />
      ))}
    </nav>

    {/* User + Logout */}
    <div>
      <div className="h-px bg-white/20 mb-4" />
      <div className="px-6 pb-3 flex items-center gap-2.5">
        <div className="w-[41px] h-[41px] rounded-full bg-[#74bbcb] flex items-center justify-center overflow-hidden shrink-0">
          {user.image
            ? <img src={user.image} alt="" className="w-full h-full object-cover" />
            : <span className="text-white font-semibold text-base">{user.name?.[0] ?? "W"}</span>
          }
        </div>
        <div className="overflow-hidden">
          <p className="m-0 text-sm text-white font-normal truncate">{user.name ?? "User"}</p>
          <p className="m-0 text-xs text-[#b3e0dc] truncate">{user.email ?? ""}</p>
        </div>
      </div>
      <div className="px-[15px] pb-5">
        <button
          onClick={() => signOut()}
          className="w-full flex items-center justify-center gap-2 py-[9px] rounded-[9px] border border-[#33afbd] bg-[#0099a9] text-white text-[13px] font-semibold cursor-pointer"
        >
          <IconLogout />
          Logout
        </button>
      </div>
    </div>
  </aside>
)