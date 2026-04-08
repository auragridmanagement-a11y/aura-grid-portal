"use client";

const days = [
  "", "1", "2", "3", "4", "5", "6",
  "7", "8", "9", "10", "11", "12", "13",
  "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27",
  "28", "29", "30"
];

const scheduled = ["1", "3", "7", "11", "15", "18", "23", "27"];
const approved = ["5", "9", "13", "17", "21", "26", "29"];
const today = "2";

export default function CalendarPage() {
  return (
    <div className="space-y-8 text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-semibold tracking-tight">
          Content calendar — April
        </h1>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-200">
          8 reels · 3 carousels · 3 static
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <div className="grid grid-cols-7 gap-4 text-center text-lg">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="pb-2 text-zinc-400">
              {day}
            </div>
          ))}

          {days.map((day, index) => {
            const isScheduled = scheduled.includes(day);
            const isApproved = approved.includes(day);
            const isToday = today === day;

            return (
              <div
                key={index}
                className={`flex h-16 items-center justify-center rounded-2xl border text-lg font-medium transition-all
                  ${day === "" ? "border-transparent" : "border-white/5"}
                  ${
                    isScheduled
                      ? "bg-indigo-100 text-indigo-900"
                      : isApproved
                      ? "bg-emerald-100 text-emerald-900"
                      : "bg-transparent text-zinc-300"
                  }
                  ${isToday ? "ring-2 ring-indigo-500" : ""}
                `}
              >
                {day}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex gap-6 border-t border-white/10 pt-6 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded bg-indigo-100"></span>
            Scheduled
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded bg-emerald-100"></span>
            Approved
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded border border-indigo-500"></span>
            Today
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <h2 className="text-2xl font-semibold">This week’s content</h2>

        <div className="mt-6 space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="font-medium">Reel — airport proximity hook</p>
              <p className="text-sm text-zinc-400">Apr 3 · Instagram Reel</p>
            </div>
            <span className="rounded-full bg-amber-100 px-4 py-1 text-sm text-amber-800">
              Awaiting approval
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="font-medium">Carousel — 5 reasons to stay</p>
              <p className="text-sm text-zinc-400">Apr 5 · Carousel post</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-4 py-1 text-sm text-emerald-800">
              Approved
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Reel — cozy morning room tour</p>
              <p className="text-sm text-zinc-400">Apr 7 · Instagram Reel</p>
            </div>
            <span className="rounded-full bg-indigo-100 px-4 py-1 text-sm text-indigo-800">
              In production
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
