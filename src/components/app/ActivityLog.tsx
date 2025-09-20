import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Activity } from "@/lib/types";
import { List } from "lucide-react";

type ActivityLogProps = {
  activities: Activity[];
};

export function ActivityLog({ activities }: ActivityLogProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <List className="h-5 w-5" />
          Activity Log
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-72">
          {activities.length > 0 ? (
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 animate-in fade-in-0 slide-in-from-top-2 duration-500">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                    <activity.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{activity.text}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-72 items-center justify-center rounded-md border border-dashed">
              <p className="text-sm text-muted-foreground">No activities yet.</p>
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
