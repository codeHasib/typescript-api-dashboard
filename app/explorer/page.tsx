"use client";

import { Copy, Check, Globe, Zap, ExternalLink } from "lucide-react";
import { useState } from "react";

const ExplorerPage = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const apiList = [
    {
      name: "Users",
      url: "https://jsonplaceholder.typicode.com/users",
      category: "JSONPlaceholder",
    },
    {
      name: "Posts",
      url: "https://jsonplaceholder.typicode.com/posts",
      category: "JSONPlaceholder",
    },
    {
      name: "Comments",
      url: "https://jsonplaceholder.typicode.com/comments",
      category: "JSONPlaceholder",
    },
    {
      name: "Products (FakeStore)",
      url: "https://fakestoreapi.com/products",
      category: "E-Commerce",
    },
    {
      name: "Products (DummyJSON)",
      url: "https://dummyjson.com/products",
      category: "E-Commerce",
    },
    {
      name: "Posts (DummyJSON)",
      url: "https://dummyjson.com/posts",
      category: "Social",
    },
    {
      name: "Random Users",
      url: "https://randomuser.me/api/?results=10",
      category: "Users",
    },
    {
      name: "Countries",
      url: "https://restcountries.com/v3.1/all",
      category: "Data",
    },
    {
      name: "Dog Image",
      url: "https://dog.ceo/api/breeds/image/random",
      category: "Animals",
    },
    {
      name: "Cat Images",
      url: "https://api.thecatapi.com/v1/images/search",
      category: "Animals",
    },
    {
      name: "Chuck Norris Joke",
      url: "https://api.chucknorris.io/jokes/random",
      category: "Fun",
    },
    {
      name: "Random Joke",
      url: "https://official-joke-api.appspot.com/random_joke",
      category: "Fun",
    },
    {
      name: "Crypto Price (Bitcoin)",
      url: "https://api.coindesk.com/v1/bpi/currentprice.json",
      category: "Finance",
    },
    { name: "Quotes", url: "https://api.quotable.io/random", category: "Text" },
    {
      name: "SpaceX Launches",
      url: "https://api.spacexdata.com/v4/launches",
      category: "Space",
    },
  ];

  const handleCopy = (url: string, index: number) => {
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
          <Zap className="text-blue-600 fill-blue-600" size={28} />
          API Explorer
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
          A curated collection of public APIs for testing and development. Click
          to copy an endpoint and paste it into your dashboard.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {apiList.map((item, ind) => (
          <div
            key={ind}
            className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
          >
            {/* Category Badge */}
            <div className="mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                {item.category}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-blue-600 transition-colors">
              {item.name}
            </h3>

            <div className="flex items-center gap-2 mt-4 bg-slate-50 dark:bg-slate-950 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
              <code className="text-xs text-slate-500 dark:text-slate-400 truncate flex-1 font-mono">
                {item.url}
              </code>

              <button
                onClick={() => handleCopy(item.url, ind)}
                className={`p-2 rounded-lg transition-all ${
                  copiedIndex === ind
                    ? "bg-emerald-500 text-white"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-sm hover:scale-105 active:scale-95"
                }`}
              >
                {copiedIndex === ind ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>

            {/* Subtle external link icon */}
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="absolute top-5 right-5 text-slate-300 hover:text-blue-500 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorerPage;
