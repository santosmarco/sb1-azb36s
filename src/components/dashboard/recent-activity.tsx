import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activity = [
  {
    name: "John Doe",
    email: "john@example.com",
    timestamp: "2 hours ago",
    action: "Created a new project",
    avatar: "JD",
  },
  {
    name: "Sarah Smith",
    email: "sarah@example.com",
    timestamp: "4 hours ago",
    action: "Updated profile settings",
    avatar: "SS",
  },
  {
    name: "Michael Brown",
    email: "michael@example.com",
    timestamp: "6 hours ago",
    action: "Completed task",
    avatar: "MB",
  },
  {
    name: "Emily Wilson",
    email: "emily@example.com",
    timestamp: "8 hours ago",
    action: "Added new team member",
    avatar: "EW",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activity.map((item, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage alt={item.name} />
            <AvatarFallback>{item.avatar}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.action}</p>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">
            {item.timestamp}
          </div>
        </div>
      ))}
    </div>
  )
}