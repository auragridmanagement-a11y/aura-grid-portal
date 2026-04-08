import { supabase } from "../../../lib/supabase";

export default async function DashboardPage() {
  const { data: invoices } = await supabase.from("invoices").select("*");
  const { data: approvals } = await supabase.from("approvals").select("*");

  const totalPlan = invoices?.[0]?.amount || 14999;
  const pendingCount =
    approvals?.filter((a) => a.status === "Pending").length || 3;

  return (
    <div className="space-y-8 text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-semibold tracking-tight">
          Good morning, Chérie
        </h1>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-200">
          April 2026
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-md">
          <p className="text-5xl font-bold">8</p>
          <p className="mt-2 text-zinc-400">Reels this month</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-md">
          <p className="text-5xl font-bold">{pendingCount}</p>
          <p className="mt-2 text-zinc-400">Pending approvals</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-md">
          <p className="text-5xl font-bold">₹{totalPlan}</p>
          <p className="mt-2 text-zinc-400">Current plan</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-md">
          <p className="text-5xl font-bold">May 1</p>
          <p className="mt-2 text-zinc-400">Next invoice</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-2xl font-semibold">Pending approvals</h2>
          <div className="mt-6 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-medium">Reel — airport proximity hook</p>
                <p className="text-sm text-zinc-400">
                  Submitted Apr 1 · Due Apr 4
                </p>
              </div>
              <span className="rounded-full bg-amber-100 px-4 py-1 text-sm text-amber-800">
                Pending
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-medium">Carousel — room corners</p>
                <p className="text-sm text-zinc-400">
                  Submitted Apr 2 · Due Apr 5
                </p>
              </div>
              <span className="rounded-full bg-amber-100 px-4 py-1 text-sm text-amber-800">
                Pending
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Static — Jaipur stay offer</p>
                <p className="text-sm text-zinc-400">
                  Submitted Apr 3 · Due Apr 6
                </p>
              </div>
              <span className="rounded-full bg-emerald-100 px-4 py-1 text-sm text-emerald-800">
                Approved
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-2xl font-semibold">Invoice summary</h2>
          <div className="mt-6 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-medium">March 2026</p>
                <p className="text-sm text-zinc-400">Starter pack</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-4 py-1 text-sm text-emerald-800">
                Paid
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-medium">April 2026</p>
                <p className="text-sm text-zinc-400">Starter pack</p>
              </div>
              <span className="rounded-full bg-amber-100 px-4 py-1 text-sm text-amber-800">
                Due May 1
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Drone shoot add-on</p>
                <p className="text-sm text-zinc-400">One-time</p>
              </div>
              <span className="rounded-full bg-red-100 px-4 py-1 text-sm text-red-700">
                Unpaid
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
