import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold text-[#1F2937]">
          Good morning, {user.email?.split("@")[0] || "Client"}
        </h1>

        <div className="rounded-full bg-[#EEF2FF] px-4 py-2 text-sm font-medium text-[#6366F1]">
          April 2026
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-3xl font-semibold text-[#111827]">8</p>
          <p className="text-sm text-[#6B7280]">Reels this month</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-3xl font-semibold text-[#111827]">3</p>
          <p className="text-sm text-[#6B7280]">Pending approvals</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-3xl font-semibold text-[#111827]">₹14,999</p>
          <p className="text-sm text-[#6B7280]">Current plan</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-3xl font-semibold text-[#111827]">Due May 1</p>
          <p className="text-sm text-[#6B7280]">Next invoice</p>
        </div>
      </div>
    </div>
  );
}
