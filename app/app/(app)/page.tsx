"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import Link from "next/link";
import Schedule from "./_components/schedule";

const MainPage = () => {

  const user = useCurrentUser();
  const fullName = user?.name || "User";

  //   currentTime (morning, evening, night) and greeting
  let currentTime = new Date().getHours();
  let greeting;

  if (currentTime >= 0 && currentTime < 12) {
    greeting = "Good Morning";
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div className="flex flex-col w-full h-full px-2 py-2">
      <div className="w-full rounded-2xl bg-muted border-border border-[1px] h-40">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex flex-col items-start justify-center h-full">
            <h1 className="text-3xl font-bold">
              {greeting}, {fullName}!
            </h1>
            <p className="text-lg">How are you feeling today?</p>
          </div>
          <div className="flex flex-col items-end justify-center h-full">
            <h1 className="text-2xl font-bold">
              Chat with TheraBot! It&apos;s always here to help you.
            </h1>
            <Link href="/app/chat">
                <Button className="rounded-full" variant="default">
                    Start
                </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full mt-4 space-x-2">
        <div className="flex flex-col w-full h-full px-2 py-2 rounded-2xl bg-muted border-border border-[1px]">
            <h1>
              <span className="text-2xl font-bold">Your</span> Progress
            </h1>
          </div>
        <Schedule />
      </div>
    </div>
  );
};

export default MainPage;
