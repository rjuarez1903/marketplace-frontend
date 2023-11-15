import { useContext, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploadSection from "../components/ImageUploadSection";
import { UserContext } from "../UserContext";
import { SnackbarContext } from "../SnackbarContext";
import { updateUser, uploadImage } from "../api/apiService";
import DialogBox from "../components/DialogBox";
import { ProfileForm } from "../components/ProfileForm";

const Profile = () => {
  const { session, setSession } = useContext(UserContext);
  const { openSnackbar, closeSnackbar } = useContext(SnackbarContext);
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
  // const [snackbar, setSnackbar] = useState({
  //   open: false,
  //   message: "",
  //   type: "success",
  // });
  const navigate = useNavigate();

  const handleImageSelected = useCallback((file) => {
    setSelectedImage(file);
    setUploadMessage("");
  }, []);

  const handleSubmit = async () => {
    if (!selectedImage) {
      openSnackbar("Por favor, seleccioná una imagen.", "error");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await uploadImage(selectedImage);
      setSession({ ...session, profileImgUrl: response.user.profileImgUrl });
      openSnackbar("Imagen actualizada con éxito.", "success");
    } catch (error) {
      console.error(error);
      openSnackbar("Error al subir la imagen.", "error");
    }
    setIsSubmitting(false);
    closeModal();
  };

  const handleProfileUpdate = async (values, actions) => {
    try {
      const response = await updateUser(values);
      console.log(response);
      openSnackbar("Perfil actualizado con éxito.", "success");
      setSession({ ...session, ...values });
      navigate("/mis-clases");
    } catch (error) {
      console.error(error);
      openSnackbar("Error al actualizar el perfil.", "error");
      throw error;
    } finally {
      actions.setSubmitting(false);
    }
  };

  // const handleCloseSnackbar = () => {
  //   setSnackbar({ ...snackbar, open: false });
  // };

  useEffect(() => {
    document.title = "EduHub | Mi perfil";
  }, []);

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
            {/* <CustomSnackbar
              open={snackbar.open}
              message={snackbar.message}
              type={snackbar.type}
              onClose={handleCloseSnackbar}
            /> */}
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
