"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      Public route
      <Link href="/auth/login">
        <Button variant="outline">
          Login
        </Button>
      </Link>
    </main>
  );
}
