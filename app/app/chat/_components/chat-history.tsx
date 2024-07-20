import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ChatHistory = () => {
  return (
    <div className="w-1/5 h-full px-4 py-2 flex flex-col rounded-md space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">Chat History</span>
        <Dialog>
          <DialogTrigger>
            <Button variant="outline" size="icon">
                <NotebookPen size={24} />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col space-y-2 mt-2 h-full overflow-y-auto">
        <div className="h-[3000px] flex items-center justify-center">
          <span className="text-muted">No chat history</span>
        </div>
      </div>
    </div>
  );
};

export default ChatHistory;
