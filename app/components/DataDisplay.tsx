import { Database, Code2, Layers, Tag, ExternalLink } from "lucide-react";

type Props = {
  data: unknown;
};

const DataDisplay = ({ data }: Props) => {
  if (Array.isArray(data) && data?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
        <Database
          className="text-slate-300 dark:text-slate-700 mb-4"
          size={48}
        />
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          No data to display yet
        </p>
        <p className="text-sm text-slate-400">
          Enter a valid API URL above to start exploring
        </p>
      </div>
    );
  }

  // Determine if data is an array or a single object
  const isArray = Array.isArray(data);
  const dataItems = isArray ? data : [data];

  return (
    <div className="space-y-8">
      {/* Header Info */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <Layers className="text-blue-600" size={20} />
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Fetched Results{" "}
            {isArray && (
              <span className="text-sm font-normal text-slate-500">
                ({data.length} items)
              </span>
            )}
          </h2>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">
            <Code2 size={14} /> View JSON
          </button>
        </div>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataItems.map((item: unknown, index: number) => (
          <div
            key={index}
            className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600">
                <Tag size={18} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                ID: {item?.id || index}
              </span>
            </div>

            {/* Content Preview */}
            <div className="space-y-3">
              {Object.entries(item)
                .slice(0, 4)
                .map(([key, value]) => (
                  <div key={key} className="overflow-hidden">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-tight">
                      {key}
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">
                      {typeof value === "object" ? "{...}" : String(value)}
                    </p>
                  </div>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800 flex justify-end">
              <button className="text-xs font-bold text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Full Details <ExternalLink size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* JSON Raw View (Optional/Toggleable) */}
      <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0d1117]">
        <div className="bg-slate-800/50 px-4 py-2 border-b border-slate-700 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20" />
            <div className="w-3 h-3 rounded-full bg-amber-500/20" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2">
            raw_response.json
          </span>
        </div>
        <pre className="p-6 text-sm font-mono text-blue-300 overflow-auto max-h-[400px] custom-scrollbar">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};

export default DataDisplay;
