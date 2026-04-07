export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f4f0] p-8">
      <div className="flex min-h-[700px] overflow-hidden rounded-2xl border border-[#dddbd4] bg-white shadow-xl">
        <aside className="w-60 border-r border-[#e8e6e0] bg-[#f9f8f5] flex flex-col">
          <div className="border-b border-[#e8e6e0] p-6">
            <h1 className="text-sm font-semibold">Aura Grid</h1>
            <p className="text-xs text-[#7A8394]">Client Portal</p>
          </div>

          <nav className="space-y-2 p-4 text-sm">
            <div className="rounded-lg bg-white px-4 py-3 font-medium text-[#534AB7]">
              Dashboard
            </div>
            <div className="px-4 py-3 text-[#667085]">Content calendar</div>
            <div className="px-4 py-3 text-[#667085]">Analytics</div>
            <div className="px-4 py-3 text-[#667085]">Invoices</div>
            <div className="px-4 py-3 text-[#667085]">Packages</div>
          </nav>

          <div className="mt-auto m-4 rounded-xl border border-[#e8e6e0] bg-white p-4">
            <p className="text-sm font-medium">Chérie</p>
            <p className="text-xs text-[#7A8394]">Starter plan</p>
          </div>
        </aside>

        <section className="flex-1 p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Good morning, Chérie</h2>
            <span className="rounded-full bg-[#EEEDFE] px-4 py-1 text-sm text-[#3C3489]">
              April 2026
            </span>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <MetricCard value="8" label="Reels this month" />
            <MetricCard value="3" label="Pending approvals" />
            <MetricCard value="₹14,999" label="Current plan" />
            <MetricCard value="Due May 1" label="Next invoice" />
          </div>
        </section>
      </div>
    </main>
  );
}

function MetricCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-[#f9f8f5] p-5">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-sm text-[#7A8394]">{label}</p>
    </div>
  );
}
