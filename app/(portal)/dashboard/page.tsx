import { supabase } from "../../../lib/supabase";

export default async function DashboardPage() {
  const { data: invoices } = await supabase.from("invoices").select("*");
  const { data: approvals } = await supabase.from("approvals").select("*");

  const totalPlan = invoices?.[0]?.amount || 14999;
  const pendingCount =
    approvals?.filter((a) => a.status === "Pending").length || 0;

  return (
    <div>
      <h1 className="text-5xl font-bold mb-8">Good morning, Chérie</h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="rounded-3xl bg-black/20 p-6">
          <p className="text-5xl font-bold">8</p>
          <p>Reels this month</p>
        </div>

        <div className="rounded-3xl bg-black/20 p-6">
          <p className="text-5xl font-bold">{pendingCount}</p>
          <p>Pending approvals</p>
        </div>

        <div className="rounded-3xl bg-black/20 p-6">
          <p className="text-5xl font-bold">₹{totalPlan}</p>
          <p>Current plan</p>
        </div>

        <div className="rounded-3xl bg-black/20 p-6">
          <p className="text-5xl font-bold">May 1</p>
          <p>Next invoice</p>
        </div>
      </div>
    </div>
  );
}
