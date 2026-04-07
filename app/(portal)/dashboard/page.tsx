"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

type ClientUser = {
  email?: string;
};

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<ClientUser | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    let mounted = true;

    const loadDashboard = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (!mounted) return;

        if (error || !user) {
          router.push("/login");
          return;
        }

        setUser({
          email: user.email,
        });
      } catch (error) {
        console.error("Dashboard auth error:", error);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadDashboard();

    return () => {
      mounted = false;
    };
  }, [router, supabase]);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-32 animate-pulse rounded-2xl border border-white/10 bg-white/5"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">
        Welcome back{user?.email ? `, ${user.email}` : ""}
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
          <p className="text-sm text-white/60">Projects</p>
          <p className="mt-2 text-3xl font-bold text-white">12</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
          <p className="text-sm text-white/60">Active Clients</p>
          <p className="mt-2 text-3xl font-bold text-white">08</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
          <p className="text-sm text-white/60">Pending Tasks</p>
          <p className="mt-2 text-3xl font-bold text-white">21</p>
        </div>
      </div>
    </div>
  );
}
