const MessageWithIcon = ({ icon, message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      {icon}
      <p className="mt-4 text-gray-600 text-center">{message}</p>
    </div>
  );
};

export default MessageWithIcon;
