"use client";

import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="h-16 border-b border-slate-200/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 text-slate-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight">FotoLinkedin AI</span>
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <a className="transition-colors hover:text-slate-900" href="#como-funciona">
            Como funciona
          </a>
          <a className="transition-colors hover:text-slate-900" href="#exemplos">
            Exemplos
          </a>
        </nav>
      </div>
    </header>
  );
}
