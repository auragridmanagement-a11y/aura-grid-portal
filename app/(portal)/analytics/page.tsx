export default function AnalyticsPage() {
  const stats = [
    { title: "Total Reach", value: "128K", growth: "+18%" },
    { title: "Engagement", value: "8.4%", growth: "+2.1%" },
    { title: "Reels Posted", value: "24", growth: "+6" },
    { title: "Followers Growth", value: "+1,240", growth: "+12%" },
  ];

  const topContent = [
    {
      title: "Airport proximity reel",
      views: "42K",
      engagement: "9.2%",
    },
    {
      title: "Luxury room carousel",
      views: "31K",
      engagement: "8.7%",
    },
    {
      title: "Jaipur stay static",
      views: "18K",
      engagement: "6.9%",
    },
  ];

  return (
    <main className="min-h-screen text-white">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">Analytics</h1>
          <p className="mt-2 text-zinc-400">
            Your monthly performance overview 📈
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-3 text-sm text-zinc-300">
          April 2026
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm"
          >
            <p className="text-sm text-zinc-400">{item.title}</p>
            <h2 className="mt-3 text-5xl font-bold">{item.value}</h2>
            <p className="mt-2 text-sm text-emerald-400">{item.growth}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">
          <h3 className="text-2xl font-semibold">Performance Trend</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Reach growth over the last 30 days
          </p>

          <div className="mt-8 flex h-64 items-end gap-4">
            {[40, 65, 55, 80, 70, 95, 88].map((height, i) => (
              <div key={i} className="flex-1">
                <div
                  className="w-full rounded-t-2xl bg-gradient-to-t from-zinc-700 to-white/80"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8">
          <h3 className="text-2xl font-semibold">Top Performing Content</h3>

          <div className="mt-6 space-y-5">
            {topContent.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5"
              >
                <h4 className="font-semibold">{item.title}</h4>
                <div className="mt-3 flex items-center justify-between text-sm text-zinc-400">
                  <span>{item.views} views</span>
                  <span>{item.engagement} engagement</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
