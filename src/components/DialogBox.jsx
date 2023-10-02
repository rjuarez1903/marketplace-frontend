import { useEffect, useRef } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const DialogBox = ({ title, content, onClose, open }) => {
  const modalRef = useRef(null);

  const closeDialog = () => {
    onClose && onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeDialog();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Al abrir el diálogo, deshabilita el desplazamiento en el cuerpo
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      // Cuando se cierra el diálogo, restaura el desplazamiento normal
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
  };

  return (
    <div>
      {open && (
        <>
          <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              ref={modalRef} // Referencia al div del modal
              className="bg-white rounded-lg p-6 shadow-md rounded-3xl border border-gray-300 relative"
            >
              <IconButton
                aria-label="Cerrar"
                onClick={closeDialog}
                style={closeButtonStyle}
              >
                <CloseIcon />
              </IconButton>
              {/* <h2 className="text-lg font-semibold mb-4">{title}</h2> */}
              <div className="mt-5">{content}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DialogBox;
