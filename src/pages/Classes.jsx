import { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import ServiceCard from "../components/ServiceCard";
import Loader from "../components/Loader/Loader";
import { getServices } from "../api/apiService";
import SearchIcon from "@mui/icons-material/Search";
import MessageWithIcon from "../components/MessageWithIcon";

const Classes = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    category: "Todos",
    classType: "Todos",
    frequency: "Todos",
  });
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesData = await getServices();
        setServices(servicesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      const {
        category: filterCategory,
        classType: filterClassType,
        frequency: filterFrequency,
      } = filter;

      const filtered = services.filter((service) => {
        const { category, type: classType, frequency } = service;
        return (
          (filterCategory === "Todos" || category === filterCategory) &&
          (filterClassType === "Todos" || classType === filterClassType) &&
          (filterFrequency === "Todos" || frequency === filterFrequency)
        );
      });

      setFilteredServices(filtered);
    };

    applyFilters();
  }, [filter, services]);

  useEffect(() => {
    const filteredBySearchAndCategory = services.filter((service) => {
      const { category, type: classType, frequency, name } = service;
      const categoryMatch =
        filter.category === "Todos" || category === filter.category;
      const classTypeMatch =
        filter.classType === "Todos" || classType === filter.classType;
      const frequencyMatch =
        filter.frequency === "Todos" || frequency === filter.frequency;
      const searchTextMatch = name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return (
        categoryMatch && classTypeMatch && frequencyMatch && searchTextMatch
      );
    });
    setFilteredServices(filteredBySearchAndCategory);
  }, [searchText, filter, services]);

  let content = null;

  if (loading) {
    content = <Loader />;
  } else if (filteredServices.length === 0) {
    content = (
      <MessageWithIcon
        icon={<SearchIcon sx={{ fontSize: '60px', color: 'rgb(75, 85, 99)' }} />}
        message="¡Oops! Parece que no encontramos resultados para los filtros seleccionados. ¿Querés probar con otros?"
      />
    );
  } else {
    content = (
      <ul className="prompt_layout">
        {filteredServices.map((service) => (
          <li key={service._id}>
            <ServiceCard
              id={service._id}
              userId={service.userId}
              name={service.name}
              cost={service.cost}
              frequency={service.frequency}
              description={service.description}
              category={service.category}
            />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="container mx-auto px-5">
      <form className="relative w-full mx-auto max-w-3xl mb-10">
        <input
          type="text"
          placeholder="Buscá las clases que necesitás"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <div className="lg:grid lg:grid-cols-12 lg:gap-4">
        <div className="lg:col-span-3">
          <FilterBar onFilterChange={handleFilterChange} />
        </div>
        <div className="lg:col-span-9 mt-10 lg:mt-0">{content}</div>
      </div>
    </div>
  );
};

export default Classes;
