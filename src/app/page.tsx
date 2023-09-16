"use client";
import { Modal } from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-100 p-4 text-slate-100 dark:bg-slate-900">
      <div className="mb-4 flex flex-col items-start justify-center space-y-2 md:w-96">
        <h1 className="flex-bold text-4xl text-primary md:text-6xl">
          olá Tailwind
        </h1>
        <h2 className="text-2xl text-slate-900 dark:text-slate-100 md:text-4xl">
          olá Tailwind
        </h2>
        <h3 className="text-2xl text-[#a4258f] dark:text-slate-100 md:text-4xl">
          olá Tailwind
        </h3>

        <button
          className="rounded-md bg-primary px-8 py-2 text-xl font-medium transition-all enabled:hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={() => setIsOpen(true)}
        >
          Abrir
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
