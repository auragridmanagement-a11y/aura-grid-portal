"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

type CalendarItem = {
  id: number;
  content_title: string;
  scheduled_date: string;
  content_type: string;
  platform: string;
  status: string;
};

export default function CalendarPage() {
  const [items, setItems] = useState<CalendarItem[]>([]);

  async function fetchCalendar() {
    const { data } = await supabase
      .from("content_calendar")
      .select("*")
      .order("id", { ascending: false });

    setItems(data || []);
  }

  async function updateStatus(id: number, status: string) {
    await supabase
      .from("content_calendar")
      .update({ status })
      .eq("id", id);

    fetchCalendar();
  }

  useEffect(() => {
    fetchCalendar();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-50 p-6">
      <h1 className="mb-8 text-3xl font-bold text-zinc-900">
        Content Calendar
      </h1>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-zinc-900">
                {item.content_title}
              </h2>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-800">
                {item.status}
              </span>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm text-zinc-500">Date</p>
                <p className="font-medium">{item.scheduled_date}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Type</p>
                <p className="font-medium">{item.content_type}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Platform</p>
                <p className="font-medium">{item.platform}</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => updateStatus(item.id, "Approved")}
                className="rounded-2xl bg-zinc-900 px-6 py-3 text-white"
              >
                Approve Schedule
              </button>

              <button
                onClick={() => updateStatus(item.id, "Needs Changes")}
                className="rounded-2xl border px-6 py-3"
              >
                Request Date Change
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
