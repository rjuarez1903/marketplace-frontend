import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageUploadSection = ({ onImageSelected, onSubmit, isSubmitting  }) => {
  const [previewSrc, setPreviewSrc] = useState(null); // Estado para la URL de previsualización

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      onImageSelected(file);

      // Generar la URL de previsualización
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
      };
      reader.readAsDataURL(file);
    },
    [onImageSelected]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
  });

  return (
    <div className="px-8 py-4">
      <div
        {...getRootProps()}
        className="cursor-pointer border-2 border-dashed border-gray-300 rounded-md p-4 text-center"
      >
        <input {...getInputProps()} />
        <p className="text-gray-700 py-10">
          Arrastra y soltá la imagen, o hacé click para seleccionar una
        </p>
      </div>
      {previewSrc && (
        <div className="mt-4 flex justify-center">
          <img src={previewSrc} alt="Preview" className="max-w-xs" />
        </div>
      )}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => onSubmit()}
          className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Cargando..." : "Subir Imagen"}
        </button>
      </div>
    </div>
  );
};

export default ImageUploadSection;
