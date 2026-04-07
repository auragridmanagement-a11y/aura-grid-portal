"use client";

import { useEffect, useState } from "react";
import supabase from "@/lib/supabase";

type PackageItem = {
  id: number;
  package_name: string;
  reels_remaining: number;
  posts_remaining: number;
  shoots_remaining: number;
};

export default function PackagesPage() {
  const [items, setItems] = useState<PackageItem[]>([]);

  async function fetchPackages() {
    const { data } = await supabase
      .from("client_packages")
      .select("*");

    setItems(data || []);
  }

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-50 p-6">
      <h1 className="mb-8 text-3xl font-bold text-zinc-900">
        Package Usage
      </h1>

      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-3xl border bg-white p-6 shadow-sm"
        >
          <h2 className="text-xl font-semibold">{item.package_name}</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm text-zinc-500">Reels Remaining</p>
              <p className="text-3xl font-bold">{item.reels_remaining}</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Posts Remaining</p>
              <p className="text-3xl font-bold">{item.posts_remaining}</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Shoots Remaining</p>
              <p className="text-3xl font-bold">{item.shoots_remaining}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
