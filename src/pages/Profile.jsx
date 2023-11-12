import { useContext, useCallback, useState } from "react";
import ImageUploadSection from "../components/ImageUploadSection";
import { UserContext } from "../UserContext";
import { uploadImage } from "../api/apiService";
import DialogBox from "../components/DialogBox";
import CustomSnackbar from "../components/CustomSnackbar";

const Profile = () => {
  const { session, setSession } = useContext(UserContext); // Asegúrate de que UserContext provea setSession
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const handleImageSelected = useCallback((file) => {
    setSelectedImage(file);
    setUploadMessage("");
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async () => {
    if (!selectedImage) {
      setSnackbar({
        open: true,
        message: "Por favor, selecciona una imagen.",
        type: "error",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await uploadImage(selectedImage);
      setSession({ ...session, profileImgUrl: response.user.profileImgUrl });
      setSnackbar({
        open: true,
        message: "Imagen actualizada con éxito.",
        type: "success",
      });
    } catch (error) {
      console.error(error);
      setSnackbar({
        open: true,
        message: "Error al subir la imagen.",
        type: "error",
      });
    }
    setIsSubmitting(false);
    closeModal();
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <div>
      <section className="container mx-auto px-5">
        <h1 className="head_text text-left">
          <span className="green_gradient">Mi Perfil</span>
        </h1>
        <div className="lg:grid lg:grid-cols-12 lg:gap-5 mt-5">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12">
                <img
                  src={session.profileImgUrl}
                  alt="Profile"
                  className="rounded-full h-40 w-40 object-cover"
                />
              </div>
              <div className="col-span-12 text-right">
                <button onClick={openModal} className="black_btn w-40">
                  Editar
                </button>
              </div>
            </div>
            <DialogBox
              open={isModalOpen}
              onClose={closeModal}
              content={
                <ImageUploadSection
                  onImageSelected={handleImageSelected}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
              }
            />
            <CustomSnackbar
              open={snackbar.open}
              message={snackbar.message}
              type={snackbar.type}
              onClose={handleCloseSnackbar}
            />
          </div>
          <div className="mt-5 lg:mt-0 col-span-9">
            <form className="w-full max-w-2xl flex flex-col gap-7 glassmorphism">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <label
                    htmlFor="name"
                    className="font-inter text-sm text-gray-600"
                  >
                    Nombre:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value="Rodrigo"
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="name"
                    className="font-inter text-sm text-gray-600"
                  >
                    Apellido:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value="Juarez"
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="email"
                    className="font-inter text-sm text-gray-600"
                  >
                    Correo Electrónico:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="rodrigo@gmail.com"
                    className="border border-gray-300 rounded p-2 w-full"
                    disabled
                  />
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="email"
                    className="font-inter text-sm text-gray-600"
                  >
                    Título:
                  </label>
                  <input
                    type="text"
                    id="degree"
                    name="degree"
                    value="Lic. en Sistemas"
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="email"
                    className="font-inter text-sm text-gray-600"
                  >
                    Experiencia:
                  </label>
                  <textarea
                    className="border border-gray-300 rounded p-2 w-full"
                    id="experience"
                    name="experience"
                    rows="5"
                    value="Licenciado en Sistemas con experiencia en desarrollo y gestión de proyectos tecnológicos. Experto en implementar soluciones innovadoras y eficientes, con sólidos conocimientos en tecnologías actuales y emergentes. Comprometido con la mejora continua y la excelencia en el servicio."
                  />
                </div>
              </div>
              <div className="flex-end mx-3 mb-5 gap-4">
                <button
                  type="submit"
                  //   disabled={submitting}
                  className="px-5 py-1.5 text-sm bg-primary-orange rounded-md text-white uppercase"
                >
                  {/* {submitting ? `${type}ing...` : type} */}
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
