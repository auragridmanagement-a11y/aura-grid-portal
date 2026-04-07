import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/calendar", label: "Calendar" },
  { href: "/analytics", label: "Analytics" },
  { href: "/invoices", label: "Invoices" },
  { href: "/packages", label: "Packages" },
];

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f5f4f0] p-8">
      <div className="flex min-h-[700px] overflow-hidden rounded-2xl border border-[#e8e6e0]">
        <aside className="w-60 border-r border-[#e8e6e0] bg-[#f9f8f5] p-6">
          <h1 className="text-sm font-semibold">Aura Grid</h1>
          <p className="text-xs text-[#7A8394]">Client Portal</p>

          <div className="mt-8 space-y-2 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-[#667085] hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </aside>

        <section className="flex-1 p-8">{children}</section>
      </div>
    </main>
  );
}
