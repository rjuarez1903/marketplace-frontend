import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteService, getServicesByUser } from "../api/apiService";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Loader from "../components/Loader/Loader";
import MessageWithIcon from "../components/MessageWithIcon";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ServiceItem from "../components/ServiceItem";
import DialogBox from "../components/DialogBox";
import ConfirmationDialog from "../components/ConfirmationDialog";
import { editService } from "../api/apiService";
import { SnackbarContext } from "../SnackbarContext";

const MyClasses = () => {
  const [myClasses, setMyClasses] = useState([]);
  const { openSnackbar, closeSnackbar } = useContext(SnackbarContext);
  const [loading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyClasses = async () => {
      try {
        const myClassesData = await getServicesByUser();
        setMyClasses(myClassesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching my classes:", error);
      }
    };
    fetchMyClasses();
  }, []);

  useEffect(() => {
    document.title = "EduHub | Mis clases";
  }, []);

  let content = null;

  const openConfirmationDialog = (serviceId) => {
    setSelectedServiceId(serviceId);
    setConfirmationOpen(true);
  };

  const closeConfirmationDialog = () => {
    setSelectedServiceId(null);
    setConfirmationOpen(false);
  };

  const handleDeleteConfirmed = async () => {
    if (selectedServiceId) {
      setIsDeleting(true);
      try {
        await handleDelete(selectedServiceId);
        closeConfirmationDialog();
      } catch (error) {
        console.error("Error al eliminar la clase", error);
        openSnackbar("Error al eliminar la clase.", "error");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleEdit = (myClass) => {
    navigate(`/editar-clase/${myClass._id}`, { state: { myClass } });
  };

  const handleDelete = async (classId) => {
    try {
      await deleteService(classId);
      const updatedClassesData = await getServicesByUser();
      setMyClasses(updatedClassesData);
      openSnackbar("Clase eliminada con éxito.", "success");
    } catch (error) {
      console.error("Error deleting service:", error);
      openSnackbar("Error al eliminar la clase.", "error");
    }
  };

  const handlePublish = async (classId) => {
    try {
      const classToPublish = myClasses.find((c) => c._id === classId);
      const { name, description, category, frequency, cost, type, duration } =
        classToPublish;
      console.log(classToPublish);
      if (classToPublish) {
        await editService(classId, {
          name,
          description,
          category,
          frequency,
          cost,
          type,
          duration,
          isPublished: true,
        });
        const updatedClassesData = await getServicesByUser();
        setMyClasses(updatedClassesData);
        openSnackbar("Clase publicada con éxito.", "success");
      }
    } catch (error) {
      console.error("Error al publicar la clase.", error);
      openSnackbar("Error al publicar la clase.", "error");
    }
  };

  const handleUnpublish = async (classId) => {
    try {
      const classToUnpublish = myClasses.find((c) => c._id === classId);
      const { name, description, category, frequency, cost, type, duration } =
        classToUnpublish;
      if (classToUnpublish) {
        await editService(classId, {
          name,
          description,
          category,
          frequency,
          cost,
          type,
          duration,
          isPublished: false,
        });
        const updatedClassesData = await getServicesByUser();
        setMyClasses(updatedClassesData);
        openSnackbar("Clase despublicada con éxito.", "success");
      }
    } catch (error) {
      console.error("Error al despublicar la clase.", error);
      openSnackbar("Error al despublicar la clase.", "error");
    }
  };

  if (loading) {
    content = <Loader />;
  } else if (myClasses.length > 0) {
    content = (
      <ul>
        {myClasses.map((myClass) => (
          <li key={myClass._id} className="mb-5">
            <ServiceItem
              myClass={myClass}
              onEdit={() => handleEdit(myClass)}
              onDelete={() => openConfirmationDialog(myClass._id)}
              onPublish={() => handlePublish(myClass._id)}
              onUnpublish={() => handleUnpublish(myClass._id)}
            />
          </li>
        ))}
      </ul>
    );
  } else {
    content = (
      <div className="flex flex-col items-center justify-center">
        <MessageWithIcon
          icon={
            <SentimentVeryDissatisfiedIcon
              sx={{ fontSize: "60px", color: "rgb(75, 85, 99)" }}
            />
          }
          message="Todavía no creaste ninguna clase"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5">
      <h1 className="head_text text-left mb-5">
        <span className="orange_gradient">Mis clases</span>
      </h1>
      <div className="flex justify-end mb-5">
        <NavLink to="/crear-clase" className="black_btn w-auto">
          <PostAddIcon className="mr-2" />
          Crear Clase
        </NavLink>
      </div>
      <div className="lg:col-span-9 mt-10 lg:mt-0">{content}</div>
      {isConfirmationOpen && (
        <DialogBox
          open={isConfirmationOpen}
          onClose={closeConfirmationDialog}
          content={
            <ConfirmationDialog
              message="¿Estás seguro de que quieres eliminar este servicio?"
              onConfirm={handleDeleteConfirmed}
              onClose={closeConfirmationDialog}
              isProcessing={isDeleting}
            />
          }
        />
      )}
    </div>
  );
};

export default MyClasses;
