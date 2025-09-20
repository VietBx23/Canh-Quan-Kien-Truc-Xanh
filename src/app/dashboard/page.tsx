"use client";

import { Header } from "@/components/app/Header";
import { ContentEditor } from "@/components/app/ContentEditor";
import { ActivityLog } from "@/components/app/ActivityLog";
import { GoogleSitesConnection } from "@/components/app/GoogleSitesConnection";
import { useState } from "react";
import type { Activity } from "@/lib/types";
import type { LucideIcon } from "lucide-react";

export default function DashboardPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);

  const addActivity = (text: string, icon: LucideIcon) => {
    const newActivity: Activity = {
      id: Date.now(),
      icon,
      text,
      timestamp: new Date().toLocaleString('vi-VN'),
    };
    setActivities((prev) => [newActivity, ...prev].slice(0, 10)); // Keep last 10 activities
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContentEditor isConnected={isConnected} addActivity={addActivity} />
          </div>
          <div className="flex flex-col gap-8 lg:col-span-1">
            <GoogleSitesConnection
              isConnected={isConnected}
              setIsConnected={setIsConnected}
              addActivity={addActivity}
            />
            <ActivityLog activities={activities} />
          </div>
        </div>
      </main>
    </div>
  );
}
