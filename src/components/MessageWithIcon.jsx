const MessageWithIcon = ({ icon, message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-[400px] mx-auto">
      {icon}
      <p className="mt-4 text-gray-600 text-center text-xl">{message}</p>
    </div>
  );
};

export default MessageWithIcon;
