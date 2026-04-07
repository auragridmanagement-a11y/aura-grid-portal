import Link from "next/link";
import { headers } from "next/headers";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/calendar", label: "Content calendar" },
  { href: "/analytics", label: "Analytics" },
  { href: "/invoices", label: "Invoices" },
  { href: "/packages", label: "Packages" },
];

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname =
    (await headers()).get("x-invoke-path") || "/dashboard";

  return (
    <main className="min-h-screen bg-[#f5f4f0] p-8">
      <div className="flex min-h-[700px] overflow-hidden rounded-2xl border border-[#e8e6e0] bg-white shadow-sm">
        <aside className="flex w-60 flex-col border-r border-[#e8e6e0] bg-[#f9f8f5] p-6">
          <div>
            <h1 className="text-sm font-semibold">Aura Grid</h1>
            <p className="text-xs text-[#7A8394]">Client Portal</p>

            <nav className="mt-8 space-y-2 text-sm">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-3 py-3 transition-colors ${
                      active
                        ? "bg-white font-medium text-[#111827]"
                        : "text-[#667085] hover:bg-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mt-auto rounded-xl border border-[#e8e6e0] bg-white p-4">
            <p className="font-medium">Chérie</p>
            <p className="text-sm text-[#667085]">Starter plan</p>
          </div>
        </aside>

        <section className="flex-1 p-8">{children}</section>
      </div>
    </main>
  );
}
