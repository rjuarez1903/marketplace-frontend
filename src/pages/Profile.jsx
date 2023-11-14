import { useContext, useCallback, useState } from "react";
import ImageUploadSection from "../components/ImageUploadSection";
import { UserContext } from "../UserContext";
import { updateUser, uploadImage } from "../api/apiService";
import DialogBox from "../components/DialogBox";
import CustomSnackbar from "../components/CustomSnackbar";
import { ProfileForm } from "../components/ProfileForm";

const Profile = () => {
  const { session, setSession } = useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: session.firstName || "",
    lastName: session.lastName || "",
    email: session.email || "",
    degree: session.degree || "",
    experience: session.experience || "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const handleImageSelected = useCallback((file) => {
    setSelectedImage(file);
    setUploadMessage("");
  }, []);

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

  const handleProfileUpdate = async (values, actions) => {
    try {
      const response = await updateUser(values);
      console.log(response);
      setSession({ ...session, ...values });
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      actions.setSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
                  src={
                    session.profileImgUrl === ""
                      ? "../public/assets/images/dummyAvatar.jpeg"
                      : session.profileImgUrl
                  }
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
            <ProfileForm
              initialFormData={formData}
              handleSubmit={(values, actions) => {
                handleProfileUpdate(values, actions);
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
