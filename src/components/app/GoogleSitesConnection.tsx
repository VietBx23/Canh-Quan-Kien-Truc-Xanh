"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plug, PlugZap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type GoogleSitesConnectionProps = {
  isConnected: boolean;
  setIsConnected: (isConnected: boolean) => void;
  addActivity: (text: string, icon: LucideIcon) => void;
};

export function GoogleSitesConnection({
  isConnected,
  setIsConnected,
  addActivity,
}: GoogleSitesConnectionProps) {
  const { toast } = useToast();

  const handleConnect = () => {
    setIsConnected(true);
    addActivity("Connected to Google Sites account.", PlugZap);
    toast({
      title: "Success",
      description: "Successfully connected to Google Sites.",
    });
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    addActivity("Disconnected from Google Sites account.", Plug);
    toast({
      title: "Disconnected",
      description: "You have been disconnected from Google Sites.",
      variant: 'default',
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Google Sites Connection</CardTitle>
        <CardDescription>
          Connect your account to publish posts.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isConnected ? (
          <div className="flex items-center justify-between rounded-lg bg-green-50 dark:bg-green-950 p-4">
            <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
              <PlugZap className="h-5 w-5" />
              <p className="font-medium">Connected</p>
            </div>
            <Button variant="ghost" className="text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-800 dark:hover:text-green-200" size="sm" onClick={handleDisconnect}>
              Disconnect
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Plug className="h-5 w-5" />
              <p className="font-medium">Not Connected</p>
            </div>
            <Button onClick={handleConnect}>Connect</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
