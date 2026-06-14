// src/layouts/AppLayout.tsx
import type { ReactNode } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { useAuth } from "../../hooks/useAuth"
import { IconMyArticles, IconOtherArticles, IconDashboard, IconUsers } from "../ui/Icons"



export const AppLayout = () => {
  const { user, isPending } = useAuth() // palitan ng actual auth hook mo

  if (isPending) return <div className="flex items-center justify-center h-screen">Loading...</div>
  if (!user) return <Navigate to="/" replace />

  // Role-based sidebar items
  const sidebarItemsByRole: Record<string, { href: string; icon: ReactNode; text: string }[]> = {
    writer: [
      { href: "/writer", icon: <IconMyArticles />, text: "My Articles" },
      { href: "/writer/create", icon: <IconOtherArticles />, text: "Create Article" },
    ],
    admin: [
      { href: "/admin", icon: <IconDashboard />, text: "Dashboard" },
      { href: "/admin/approvals", icon: <IconMyArticles />, text: "Approvals" },
      { href: "/admin/monitoring", icon: <IconUsers />, text: "Monitoring" },
      { href: "/admin/trash", icon: <IconOtherArticles />, text: "Trash Bin" },
    ],
    super_admin: [
      { href: "/admin", icon: <IconDashboard />, text: "Dashboard" },
      { href: "/admin/approvals", icon: <IconMyArticles />, text: "Approvals" },
      { href: "/admin/monitoring", icon: <IconUsers />, text: "Monitoring" },
      { href: "/admin/trash", icon: <IconOtherArticles />, text: "Trash Bin" },
    ],
    user: [
      { href: "/user", icon: <IconMyArticles />, text: "Browse Articles" },
    ],
  }

  const items = sidebarItemsByRole[user.role] ?? []

  return (
    <div className="flex min-h-screen">
      <Sidebar
        items={items}
        user={{ name: user.name, email: user.email, image: user.image }}
      />
      <main className="flex-1 ml-[255px] overflow-x-hidden">
        <Outlet/>
      </main>
    </div>
  )
}