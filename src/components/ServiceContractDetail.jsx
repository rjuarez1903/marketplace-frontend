import { useState } from "react";
import { updateServiceContract } from "../api/apiService";
import { translateOption } from "../utils/translateOption";
import { FaCoffee, FaSun, FaMoon } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";

const ServiceContractDetail = ({ contract }) => {
  const [selectedStatus, setSelectedStatus] = useState(contract.contractStatus);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [displayedStatus, setDisplayedStatus] = useState(
    contract.contractStatus
  );

  const statusColors = {
    requested: "bg-blue-600",
    completed: "bg-green-600",
    accepted: "bg-yellow-600",
    cancelled: "bg-red-600",
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleUpdateStatus = () => {
    setIsUpdating(true);
    updateServiceContract(contract._id, { contractStatus: selectedStatus })
      .then((res) => {
        setDisplayedStatus(res.contract.contractStatus);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error al actualizar el estado del contrato:", error);
      })
      .finally(() => {
        setIsUpdating(false);
      });
  };

  const renderPreferredContactTimeIcon = (preferredContactTime) => {
    switch (preferredContactTime) {
      case "morning":
        return (
          <div className="flex gap-2 items-center">
            <FaCoffee className="text-brown-500 text-3xl" />
            <p className="font-satoshi text-base md:text-lg text-gray-700 ">
              Mañana
            </p>
          </div>
        );
      case "afternoon":
        return (
          <div className="flex gap-2 items-center">
            <FaSun className="text-yellow-500 text-3xl" />
            <p className="font-satoshi text-base md:text-lg text-gray-700 ">
              Tarde
            </p>
          </div>
        );
      case "evening":
        return (
          <div className="flex gap-2 items-center">
            <FaMoon className="text-blue-500 text-3xl" />
            <p className="font-satoshi text-base md:text-lg text-gray-700 ">
              Noche
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative prompt_card rounded-lg">
      <h2 className="font-satoshi font-bold text-3xl text-blue-900 mb-3">
        {contract.serviceName}
      </h2>
      <p className="font-inter text-xl text-gray-600 ">
        Email: {contract.contactEmail}
      </p>
      <p className="font-inter text-lg text-gray-600 mb-3">
        Teléfono: {formatPhoneNumber(contract.phoneNumber)}
      </p>
      <p className="font-satoshi text-base md:text-lg text-gray-700 mb-3">
        {contract.message}
      </p>
      <p className="font-satoshi text-base md:text-lg text-gray-700 mb-0">
        Horario de contacto
      </p>
      {renderPreferredContactTimeIcon(contract.preferredContactTime)}

      {isEditing ? (
        <div className="flex flex-col md:flex-row gap-3 justify-end items-end md:items-center mt-3 mb-8">
          <select
            className="border border-gray-400 rounded-lg px-3 py-2 w-auto"
            value={selectedStatus}
            onChange={handleStatusChange}
          >
            <option value="requested">Solicitada</option>
            <option value="completed">Completada</option>
            <option value="accepted">Aceptada</option>
            <option value="cancelled">Cancelada</option>
          </select>
          <button
            className="black_btn w-auto"
            onClick={handleUpdateStatus}
            disabled={isUpdating}
          >
            {isUpdating ? "Actualizando..." : "Confirmar"}
          </button>
        </div>
      ) : (
        <div className="flex justify-end mt-3 mb-10">
          <button className="outline_btn" onClick={() => setIsEditing(true)}>
            Editar Estado
          </button>
        </div>
      )}
      <div
        className={`absolute bottom-0 left-0 h-10 w-full text-center py-2 ${statusColors[displayedStatus]} rounded-b-3xl`}
      >
        <span className="text-white font-semibold">
          {isUpdating ? (
            <ClipLoader size={15} color="#ffffff" />
          ) : (
            translateOption(displayedStatus)
          )}
        </span>
      </div>
    </div>
  );
};

export default ServiceContractDetail;
