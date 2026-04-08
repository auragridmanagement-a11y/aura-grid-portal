import { supabase } from "../../../lib/supabase";

export default async function InvoicesPage() {
  const { data: invoices } = await supabase
    .from("invoices")
    .select("*")
    .order("id", { ascending: false });

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
        {invoices?.map((invoice) => {
          const paid = invoice.status === "Paid";

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
                        : "bg-amber-500/20 text-amber-300"
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
