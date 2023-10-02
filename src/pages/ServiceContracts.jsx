import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ServiceContractDetail from "../components/ServiceContractDetail";
import Loader from "../components/Loader/Loader";
import { getServiceContractsByUser } from "../api/apiService";

const ServiceContracts = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const data = await getServiceContractsByUser();
        setContracts(data.contracts);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContracts();
  }, []);

  let content = null;

  if (loading) {
    content = <Loader />;
  } else if (contracts.length > 0) {
    content = (
      <ul className="prompt_layout">
        {contracts.map((contract) => (
          <li className="mb-5" key={contract._id}>
            <ServiceContractDetail contract={contract} />
          </li>
        ))}
      </ul>
    );
  } else {
    content = <p>No hay contrataciones disponibles.</p>;
  }

  return (
    <div className="container mx-auto px-5">
      <h1 className="head_text text-left mb-5">
        <span className="blue_gradient">Contrataciones</span>
      </h1>
      <div className="lg:col-span-9 mt-10 lg:mt-0">{content}</div>
    </div>
  );
};

export default ServiceContracts;
