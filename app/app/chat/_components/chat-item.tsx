"use client";

import { EllipsisVertical, PenSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ChatItemProps {
  chat: any;
}

const ChatItem = ({ chat }: ChatItemProps) => {
  const pathname = usePathname();

  console.log(pathname);

  const isActive = pathname === `/app/chat/${chat.id}`;

  return (
    <Link href={`/app/chat/${chat.id}`} className="w-full">
      <div
        className={`flex items-center w-full cursor-pointer justify-between px-4 py-2 rounded-md ${
          isActive ? "bg-border " : ""
        }`}
      >
        <span>{chat.name}</span>
      </div>
    </Link>
  );
};

export default ChatItem;
