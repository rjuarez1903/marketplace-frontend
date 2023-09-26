import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ServiceContractDetail from "../components/ServiceContractDetail";
import { getServiceContracts } from "../api/apiService";
import Loader from "../components/Loader/Loader";

const ServiceContracts = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const data = await getServiceContracts(id);
        setContracts(data.contracts);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContracts();
  }, []);

  return (
    <div className="container mx-auto px-5">
      <h1 className="head_text text-left mb-5">
        <span className="blue_gradient">Contrataciones</span>
      </h1>
      <ul>
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : 
        contracts.length > 0 ? (
          contracts.map((contract) => (
            <li className="mb-5" key={contract._id}>
              <ServiceContractDetail contract={contract} />
            </li>
          ))
        ) : (
          <p>No hay contrataciones disponibles.</p>
        )}
      </ul>
    </div>
  );
};

export default ServiceContracts;
