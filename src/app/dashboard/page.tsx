"use client";

import { Header } from "@/components/app/Header";
import { Crawler } from "@/components/app/Crawler";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto max-w-7xl">
          <Crawler />
        </div>
      </main>
    </div>
  );
}
