"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold leading-tight max-w-xl text-slate-900 sm:text-5xl lg:text-6xl">
          Fotos profissionais
          para o <span className="text-sky-500">LinkedIn</span>
        </h1>
        <p className="max-w-xl text-base text-slate-600 sm:text-lg">
          Transforme qualquer foto sua em um retrato profissional de alta qualidade usando
          inteligencia artificial. Perfeito para seu perfil do LinkedIn.
        </p>
        <div>
          <a
            className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            href="#exemplos"
          >
            Ver exemplos
          </a>
        </div>
      </div>

      <div className="flex  justify-center lg:justify-start items-center gap-4">
        <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-gray-200 -rotate-2">
          <Image
            src="/foto1.jpg"
            alt="Exemplo de foto profissional 1"
            width={112}
            height={112}
            className="h-full w-full object-cover"
            sizes="(min-width: 640px) 112px, 96px"
          />
        </div>
        <div className="relative w-35 h-46 rounded-2xl overflow-hidden bg-gray-200">
          <Image
            src="/foto2.jpg"
            alt="Exemplo de foto profissional 2"
            width={112}
            height={112}
            className="h-full w-full object-cover"
            sizes="(min-width: 640px) 112px, 96px"
          />
        </div>
        <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-gray-200 rotate-1">
          <Image
            src="/foto3.jpg"
            alt="Exemplo de foto profissional 3"
            width={112}
            height={112}
            className="h-full w-full object-cover"
            sizes="(min-width: 640px) 112px, 96px"
          />
        </div>
      </div>
    </section>
  );
}
