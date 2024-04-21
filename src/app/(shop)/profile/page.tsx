import { auth } from "@/auth.config";
import HeaderPage from "@/components/ui/HeaderPage";
import React from "react";

export default async function ProfilePage() {
  const session = await auth();

  return (
    <div className="h-screen">
      <HeaderPage title="Profile" />
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
