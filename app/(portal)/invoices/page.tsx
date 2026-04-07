"use client";

import { useEffect, useState } from "react";
import supabase from "@/lib/supabase";

type Invoice = {
  id: number;
  invoice_title: string;
  amount: string;
  due_date: string;
  status: string;
};

export default function InvoicesPage() {
  const [items, setItems] = useState<Invoice[]>([]);

  async function fetchInvoices() {
    const { data } = await supabase
      .from("client_invoices")
      .select("*")
      .order("id", { ascending: false });

    setItems(data || []);
  }

  useEffect(() => {
    fetchInvoices();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-50 p-6">
      <h1 className="mb-8 text-3xl font-bold text-zinc-900">Invoices</h1>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                {item.invoice_title}
              </h2>
              <span className="rounded-full bg-red-100 px-4 py-2 text-sm text-red-700">
                {item.status}
              </span>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-zinc-500">Amount</p>
                <p className="text-lg font-semibold">{item.amount}</p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Due Date</p>
                <p className="text-lg font-semibold">{item.due_date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
