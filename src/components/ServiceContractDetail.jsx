import { useState } from "react";
import { updateServiceContract } from "../api/apiService";

const ServiceContractDetail = ({ contract }) => {
  const [selectedStatus, setSelectedStatus] = useState(contract.contractStatus);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false); // Variable de estado para controlar la actualización

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleUpdateStatus = () => {
    setIsUpdating(true);
    updateServiceContract(contract._id, { contractStatus: selectedStatus })
      .then((res) => {
        setSelectedStatus(res.contract.contractStatus);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error al actualizar el estado del contrato:", error);
      })
      .finally(() => {
        setIsUpdating(false);
      });
  };

  // Define colores para cada estado
  const statusColors = {
    requested: "text-blue-600 font-semibold",
    completed: "text-green-600 font-semibold",
    accepted: "text-yellow-600 font-semibold",
    cancelled: "text-red-600 font-semibold",
  };

  return (
    <div className="prompt_card">
      <h2 className="font-satoshi font-bold text-3xl text-blue-900 mb-3">
        {contract.serviceName}
      </h2>
      <p className="font-inter text-xl text-gray-600 ">
        Email: {contract.contactEmail}
      </p>
      <p className="font-inter text-lg text-gray-600 mb-3">
        Teléfono: {contract.phoneNumber}
      </p>
      <p className="font-satoshi text-base md:text-lg text-gray-700 mb-3">
        {contract.message}
      </p>
      <div className="mb-4">
        <p className="font-satoshi text-base md:text-lg text-gray-700">
          Horario de contacto preferido: {contract.preferredContactTime}
        </p>
        <p className="mt-5 font-inter text-right flex flex-col md:flex-row justify-between items-start md:items-center">
          <span className="font-semibold">Estado del contrato:</span>{" "}
          {isEditing ? (
            <select
              className="border border-gray-400 rounded-lg px-3 py-2"
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              <option value="requested">Solicitado</option>
              <option value="completed">Completado</option>
              <option value="accepted">Aceptado</option>
              <option value="cancelled">Cancelado</option>
            </select>
          ) : (
            <span
              className={`text-lg uppercase ${statusColors[selectedStatus]}`}
            >
              {selectedStatus}
            </span>
          )}
        </p>
        <div className="flex justify-end mt-3">
          {isEditing ? (
            <button
              className="black_btn"
              onClick={handleUpdateStatus}
              disabled={isUpdating}
            >
              {isUpdating ? "Actualizando..." : "Confirmar"}
            </button>
          ) : (
            <button className="outline_btn" onClick={() => setIsEditing(true)}>
              Editar Estado
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceContractDetail;
