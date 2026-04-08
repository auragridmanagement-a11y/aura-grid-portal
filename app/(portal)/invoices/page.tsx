import { supabase } from "@/lib/supabase";

export default async function InvoicesPage() {
  const { data: invoices } = await supabase.from("invoices").select("*");

  return (
    <div>
      <h1 className="text-5xl font-bold mb-8">Invoices & Payments</h1>

      <div className="space-y-4">
        {invoices?.map((invoice) => (
          <div
            key={invoice.id}
            className="rounded-3xl border border-white/10 p-6 flex justify-between"
          >
            <div>
              <p className="text-2xl font-semibold">{invoice.title}</p>
              <p className="text-white/60">{invoice.due_date}</p>
            </div>

            <div className="text-right">
              <p className="text-3xl font-bold">₹{invoice.amount}</p>
              <p>{invoice.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
