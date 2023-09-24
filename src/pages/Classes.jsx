import { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import ServiceCard from "../components/ServiceCard";
import Loader from "../components/Loader/Loader";
import { getServices } from "../api/apiService";

export const Classes = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    category: "Todos",
    classType: "Todos",
    frequency: "Todos",
  });
  const [filteredServices, setFilteredServices] = useState([]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesData = await getServices();
        setServices(servicesData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = services.filter((service) => {
        return (
          (filter.category === "Todos" ||
            service.category === filter.category) &&
          (filter.classType === "Todos" || service.type === filter.classType) &&
          (filter.frequency === "Todos" ||
            service.frequency === filter.frequency)
        );
      });
      setFilteredServices(filtered);
    };

    applyFilters();
  }, [filter, services]);

  return (
    <div className="container mx-auto px-5">
      <form className="relative w-full mx-auto max-w-3xl mb-10">
        <input
          type="text"
          placeholder="Buscá las clases que necesitás"
          // value={searchText}
          // onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <div className="lg:grid lg:grid-cols-12 lg:gap-4">
        <div className="lg:col-span-3">
          <FilterBar onFilterChange={handleFilterChange} />
        </div>
        <div className="lg:col-span-9 prompt_layout mt-10 lg:mt-0">
          {loading ? (
            <Loader />
          ) : filteredServices.length === 0 ? ( // Verificar si no hay resultados
            <div className="flex items-center justify-center h-full w-full">
              <p className="text-lg text-center font-bold">
                No se encontraron resultados para los filtros seleccionados.
              </p>
            </div>
          ) : (
            filteredServices.map((service) => (
              <ServiceCard
                key={service._id}
                id={service._id}
                userId={service.userId}
                name={service.name}
                cost={service.cost}
                frequency={service.frequency}
                description={service.description}
                category={service.category}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Classes;
