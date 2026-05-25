"use client";

import { Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

type Props = {
  data: unknown;
  setData: React.Dispatch<React.SetStateAction<[]>>;
  isFetching: boolean;
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>;
};

const ApiInputSection = ({
  data,
  setData,
  isFetching,
  setIsFetching,
}: Props) => {
  const [err, setErr] = useState(false);
  const [api, setApi] = useState("");

  async function handleFetchSearch(): Promise<void> {
    if (api.length > 0) {
      setData([]);
      setIsFetching(true);
      const res = await fetch(api);
      if (!res.ok) {
        setIsFetching(false);
        return setErr(true);
      }
      const json = await res.json();
      setData(json);
      setIsFetching(false);
      setErr(false);
    } else {
      setData([]);
      setErr(true);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl shadow-blue-500/5 border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            onChange={(e) => setApi(e.target.value)}
            placeholder="https://api.example.com/data"
            className="flex-1 bg-slate-50 dark:bg-slate-900 border-none rounded-xl px-4 py-3 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
          <button
            onClick={handleFetchSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <span>Fetch Data</span>
            <Send size={18} />
          </button>
        </div>
      </div>
      {err ? (
        <div className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-xl text-red-600 dark:text-red-400">
          <AlertCircle size={20} />
          <p className="text-sm font-medium">
            Invalid API Endpoint. Please check your URL and try again.
          </p>
        </div>
      ) : (
        ""
      )}

      {/* Example Notification: Success State */}
      {data?.length ? (
        <div className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-4 rounded-xl text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 size={20} />
          <p className="text-sm font-medium">
            Data fetched successfully! Found {data?.length} items.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ApiInputSection;
