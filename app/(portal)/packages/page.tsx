"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

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
    const { data } = await supabase.from("client_packages").select("*");

    const fallback = [
      {
        id: 1,
        package_name: "Starter Growth Plan",
        reels_remaining: 4,
        posts_remaining: 8,
        shoots_remaining: 1,
      },
    ];

    setItems(data && data.length > 0 ? data : fallback);
  }

  useEffect(() => {
    fetchPackages();
  }, []);

  const addOns = [
    { name: "Drone Shoot", price: "₹4,999" },
    { name: "UGC Creator Reel", price: "₹2,999" },
    { name: "Extra Carousel Pack", price: "₹1,999" },
  ];

  return (
    <main className="min-h-screen text-white">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">Packages</h1>
          <p className="mt-2 text-zinc-400">
            Current usage, remaining deliverables & upgrades
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-3 text-sm text-zinc-300">
          Active Plan
        </div>
      </div>

      <div className="mt-10 space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8"
          >
            <h2 className="text-2xl font-semibold">{item.package_name}</h2>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
                <p className="text-sm text-zinc-400">Reels Remaining</p>
                <h3 className="mt-3 text-5xl font-bold">
                  {item.reels_remaining}
                </h3>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
                <p className="text-sm text-zinc-400">Posts Remaining</p>
                <h3 className="mt-3 text-5xl font-bold">
                  {item.posts_remaining}
                </h3>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
                <p className="text-sm text-zinc-400">Shoots Remaining</p>
                <h3 className="mt-3 text-5xl font-bold">
                  {item.shoots_remaining}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">
        <h2 className="text-2xl font-semibold">Recommended Add-ons</h2>

        <div className="mt-6 space-y-4">
          {addOns.map((addon) => (
            <div
              key={addon.name}
              className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5"
            >
              <div>
                <h3 className="font-semibold">{addon.name}</h3>
                <p className="text-sm text-zinc-400">One-time premium add-on</p>
              </div>

              <button className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black">
                {addon.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
