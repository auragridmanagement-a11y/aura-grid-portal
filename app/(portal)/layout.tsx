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
    <div className="min-h-screen bg-[#F8F7F4] p-6">
      <div className="flex min-h-[90vh] rounded-3xl bg-white shadow-xl overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 border-r bg-[#FAFAF8] p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">Aura Grid</h1>
            <p className="text-gray-500">Client Portal</p>

            <nav className="mt-10 space-y-3">
              {menu.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${
                      active
                        ? "bg-[#F3F0FF] text-[#5B4DFF] font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="rounded-2xl border p-4">
            <p className="font-semibold">Chérie</p>
            <p className="text-gray-500 text-sm">Starter plan</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 relative z-0">{children}</main>
      </div>
    </div>
  );
}
