import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Eye, MousePointer, Mail, TrendingUp } from "lucide-react";

const visitData = [
  { month: "Jan", visits: 45 },
  { month: "Feb", visits: 68 },
  { month: "Mar", visits: 92 },
  { month: "Apr", visits: 78 },
  { month: "May", visits: 115 },
  { month: "Jun", visits: 142 },
];

const projectViewData = [
  { project: "Agri-AI", views: 89 },
];

const stats = [
  { icon: Eye, label: "Total Visits", value: "540", change: "+32%", testId: "stat-visits" },
  { icon: MousePointer, label: "Project Views", value: "89", change: "+25%", testId: "stat-project-views" },
  { icon: Mail, label: "Messages", value: "12", change: "+8%", testId: "stat-messages" },
  { icon: TrendingUp, label: "Engagement", value: "78%", change: "+15%", testId: "stat-engagement" },
];

export function AnalyticsSection() {
  return (
    <section id="analytics" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Portfolio Analytics</h2>
          <p className="text-xl text-muted-foreground">
            Real-time performance metrics and insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-elevate" data-testid={stat.testId}>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                <CardDescription className="text-sm font-medium">
                  {stat.label}
                </CardDescription>
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold font-mono">{stat.value}</div>
                <p className="text-xs text-chart-2 flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3" />
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Visits</CardTitle>
              <CardDescription>Portfolio traffic over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={visitData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="visits"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Popularity</CardTitle>
              <CardDescription>Views per project this month</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={projectViewData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="project" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Bar dataKey="views" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
