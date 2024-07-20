"use client";

interface MessageViewProps {
  message: any;
}

const MessageView = ({ message }: MessageViewProps) => {

    return (
    <div
      className={`flex flex-col w-full items-${
        message.isBot ? "start" : "end"
      } mb-4`}
    >
      <div
        className={`${
          message.isBot ? "flex-row-reverse" : "flex-row"
        } flex items-center`}
      >
        <span>{message.content}</span>
      </div>
    </div>
  );
};

export default MessageView;
