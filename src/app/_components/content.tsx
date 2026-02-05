"use client";

import { Header } from "./header";
import { Hero } from "./hero";
import { UploadPhoto } from "./upload-photo";

export function HomeContent() {
  return (
    <>
      {/* HEADER */}
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-200px)] ">
          <div className="flex items-center justify-center">
            {/* HERO */}
            <Hero />
          </div>

          <div className="flex items-center justify-center">
            {/* UPLOAD-PHOTO */}
            <UploadPhoto />
          </div>
        </div>
      </main>
    </>
  );
}
