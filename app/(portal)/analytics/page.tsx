export default function AnalyticsPage() {
  const stats = [
    { title: "Total Reach", value: "128K" },
    { title: "Engagement", value: "8.4%" },
    { title: "Reels Posted", value: "24" },
    { title: "Followers Growth", value: "+1,240" },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-[#1F1F1F]">Analytics</h1>
      <p className="mt-2 text-[#667085]">
        Your monthly performance overview 📈
      </p>

      <div className="mt-8 grid grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-[#E7E2DA] bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-[#667085]">{item.title}</p>
            <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-[#E7E2DA] bg-white p-8 shadow-sm">
        <h3 className="text-xl font-semibold">Performance Trend</h3>
        <div className="mt-6 h-64 rounded-xl bg-gradient-to-r from-[#534AB7] to-[#7C72E8] opacity-90"></div>
      </div>
    </div>
  );
}
