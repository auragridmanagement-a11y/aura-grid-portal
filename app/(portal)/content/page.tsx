"use client";

import { useEffect, useState } from "react";
import supabase from "@/lib/supabase";

type ContentItem = {
  id: number;
  title: string;
  caption: string;
  hashtags: string;
  status: string;
};

export default function ContentPage() {
  const [items, setItems] = useState<ContentItem[]>([]);

  async function fetchContent() {
    const { data, error } = await supabase
      .from("content_approvals")
      .select("*")
      .order("id", { ascending: false });

    if (!error) setItems(data || []);
  }

  async function updateStatus(id: number, status: string) {
    await supabase
      .from("content_approvals")
      .update({ status })
      .eq("id", id);

    fetchContent();
  }

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-50 p-6">
      <h1 className="mb-8 text-3xl font-bold">Content Approval Center</h1>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm">
                {item.status}
              </span>
            </div>

            <div className="mt-4 h-56 rounded-2xl bg-zinc-100 flex items-center justify-center">
              Reel Preview
            </div>

            <p className="mt-4">{item.caption}</p>
            <p className="mt-2 text-sm text-zinc-500">{item.hashtags}</p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => updateStatus(item.id, "Approved")}
                className="rounded-2xl bg-zinc-900 px-6 py-3 text-white"
              >
                Approve
              </button>

              <button
                onClick={() => updateStatus(item.id, "Needs Revision")}
                className="rounded-2xl border px-6 py-3"
              >
                Request Changes
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
