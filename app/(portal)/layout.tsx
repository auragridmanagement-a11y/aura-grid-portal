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
  { label: "Content calendar", href: "/content", icon: Calendar },
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
    <div className="min-h-screen bg-[#1f1f1f] text-white flex">
      <aside className="w-80 border-r border-white/10">
        <div className="p-10">
          <h1 className="text-4xl font-bold">Aura Grid</h1>
          <p className="text-white/60">Client Portal</p>
        </div>

        <nav className="space-y-2 px-4">
          {menu.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 rounded-xl px-5 py-4 transition-all ${
                  active
                    ? "bg-violet-500/10 text-violet-400 border-l-2 border-violet-500"
                    : "hover:bg-white/5 text-white/70"
                }`}
              >
                <Icon size={22} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
