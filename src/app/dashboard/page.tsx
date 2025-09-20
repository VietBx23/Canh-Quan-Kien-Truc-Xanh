"use client";

import { Header } from "@/components/app/Header";
import { PassportPhotoGenerator } from "@/components/app/PassportPhotoGenerator";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto grid max-w-2xl gap-6">
          <h1 className="text-3xl font-bold">Passport Photo Generator</h1>
          <PassportPhotoGenerator />
        </div>
      </main>
    </div>
  );
}
