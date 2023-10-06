const ConfirmationDialog = ({ onConfirm, message, onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-gray-700 text-lg mb-4">{message}</p>
      <div className="flex">
        <button
          onClick={onConfirm}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-700"
        >
          Confirmar
        </button>
        <button
          onClick={onClose}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200 active:bg-gray-600"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
