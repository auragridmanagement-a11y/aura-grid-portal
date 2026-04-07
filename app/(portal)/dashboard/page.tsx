"use client";

import { useEffect, useState } from "react";
import supabase from "@/lib/supabase";

type DashboardStats = {
  pending: number;
  approved: number;
  revision: number;
  total: number;
};

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    pending: 0,
    approved: 0,
    revision: 0,
    total: 0,
  });

  async function fetchStats() {
    const { data } = await supabase
      .from("content_approvals")
      .select("status");

    const pending =
      data?.filter((item) => item.status === "Pending Approval").length || 0;

    const approved =
      data?.filter((item) => item.status === "Approved").length || 0;

    const revision =
      data?.filter((item) => item.status === "Needs Revision").length || 0;

    setStats({
      pending,
      approved,
      revision,
      total: data?.length || 0,
    });
  }

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-50 p-6">
      <h1 className="mb-8 text-3xl font-bold text-zinc-900">
        Aura Grid Client Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-3xl bg-white p-6 shadow-sm border">
          <p className="text-sm text-zinc-500">Pending Approvals</p>
          <h2 className="mt-2 text-4xl font-bold">{stats.pending}</h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border">
          <p className="text-sm text-zinc-500">Approved</p>
          <h2 className="mt-2 text-4xl font-bold">{stats.approved}</h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border">
          <p className="text-sm text-zinc-500">Needs Revision</p>
          <h2 className="mt-2 text-4xl font-bold">{stats.revision}</h2>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border">
          <p className="text-sm text-zinc-500">Total Content</p>
          <h2 className="mt-2 text-4xl font-bold">{stats.total}</h2>
        </div>
      </div>
    </main>
  );
}
