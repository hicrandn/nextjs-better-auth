"use client";
import React from "react";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <Button variant="outline" onClick={handleLogout}>
      Logout
      <LogOutIcon className="w-4 h-4" />
    </Button>
  );
}
