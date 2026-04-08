"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  FileText,
  Package,
} from "lucide-react";

const menu = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Content calendar", href: "/calendar", icon: Calendar },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Invoices", href: "/invoices", icon: FileText },
  { label: "Packages", href: "/packages", icon: Package },
];

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#0D0D0D] p-3 md:p-4">
      <div className="flex min-h-[96vh] overflow-hidden rounded-[32px] border border-white/10 bg-[#171717] shadow-2xl backdrop-blur-xl">
        {/* Sidebar */}
        <aside className="w-72 border-r border-white/10 bg-[#111111] p-8 flex flex-col justify-between">
          <div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white">
                Aura Grid
              </h1>
              <p className="text-sm text-zinc-400">Client Portal</p>
            </div>

            <nav className="mt-10 space-y-3">
              {menu.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center gap-3 rounded-2xl px-4 py-4 transition-all duration-300 ${
                      active
                        ? "bg-white/5 text-[#6D5DF6] shadow-[inset_3px_0_0_0_#6D5DF6]"
                        : "text-zinc-300 hover:bg-white/[0.03] hover:text-white"
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
            <p className="font-semibold text-white">Chérie</p>
            <p className="text-sm text-zinc-400">Starter plan</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gradient-to-br from-transparent to-white/[0.01] p-8 md:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
