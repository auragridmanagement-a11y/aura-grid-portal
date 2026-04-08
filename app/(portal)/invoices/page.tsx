import { supabase } from "../../../lib/supabase";

export default async function InvoicesPage() {
  const { data } = await supabase
    .from("invoices")
    .select("*")
    .order("id", { ascending: false });

  const invoices =
    data && data.length > 0
      ? data
      : [
          {
            id: 1,
            title: "April 2026 Retainer",
            due_date: "May 1, 2026",
            amount: "14999",
            status: "Due",
          },
          {
            id: 2,
            title: "Drone Shoot Add-on",
            due_date: "One-time",
            amount: "4999",
            status: "Paid",
          },
          {
            id: 3,
            title: "UGC Creator Add-on",
            due_date: "Apr 20, 2026",
            amount: "2999",
            status: "Pending",
          },
        ];

  return (
    <main className="min-h-screen text-white">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            Invoices & Payments
          </h1>
          <p className="mt-2 text-zinc-400">
            Billing overview and payment history
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-3 text-sm text-zinc-300">
          FY 2026
        </div>
      </div>

      <div className="mt-10 space-y-5">
        {invoices.map((invoice) => {
          const paid = invoice.status === "Paid";
          const pending = invoice.status === "Pending";

          return (
            <div
              key={invoice.id}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">{invoice.title}</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Due: {invoice.due_date}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-4xl font-bold">₹{invoice.amount}</p>

                  <span
                    className={`mt-2 inline-block rounded-full px-4 py-2 text-sm ${
                      paid
                        ? "bg-emerald-500/20 text-emerald-300"
                        : pending
                        ? "bg-amber-500/20 text-amber-300"
                        : "bg-rose-500/20 text-rose-300"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black">
                  Download PDF
                </button>

                {!paid && (
                  <button className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm text-zinc-300">
                    Mark as Paid
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
