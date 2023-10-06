import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const SnackbarWrapper = styled.div`
  position: fixed;
  bottom: 5px; /* Updated from top to bottom */
  left: 5px; /* Updated from right to left */
  z-index: 50;
  animation: ${slideUp} 0.3s ease; /* Changed animation direction */
`;

const SnackbarContent = styled.div`
  display: flex;
  border: 1px solid lightgray; /* Adjusted border color to be more subtle */
  border-radius: 12px; /* Adjusted border radius */
  overflow: hidden;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1); /* Adjusted shadow */
`;

const SnackbarIcon = styled.div`
  width: 60px; /* Adjusted width */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.type === "success" ? "#28a745" : "#dc3545"}; /* Adjusted colors */
`;

const SnackbarMessage = styled.div`
  padding: 15px 25px; /* Adjusted padding */
  background-color: white;
  color: #333; /* Adjusted font color */
  font-size: 0.9rem; /* Adjusted font size */
`;

const CustomSnackbar = ({ message, type, open, onClose }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return open ? (
    <SnackbarWrapper>
      <SnackbarContent>
        <SnackbarIcon type={type}>
          {type === "success" ? (
            <CheckCircleIcon style={{ color: "white" }} />
          ) : (
            <ErrorIcon style={{ color: "white" }} />
          )}
        </SnackbarIcon>
        <SnackbarMessage>{message}</SnackbarMessage>
      </SnackbarContent>
    </SnackbarWrapper>
  ) : null;
};

export default CustomSnackbar;
