import { Metadata } from "next";

import Dashboard from "@/components/dashboard";

export const metadata: Metadata = {
  title: "FGiant Comm Web | Dashboard",
  description:
    "Welcome to the admin dashboard for FGiant Comm. Here you can manage all calls and users' location that have been received by the server.",
};

function DashboardPage() {
  return <Dashboard />;
}

export default DashboardPage;
