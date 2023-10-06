const ConfirmationDialog = ({ onConfirm, message, onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-gray-700 text-lg mb-4">{message}</p>
      <div className="flex">
        <button
          onClick={onConfirm}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Confirmar
        </button>
        <button
          onClick={onClose}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
