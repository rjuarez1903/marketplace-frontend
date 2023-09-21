import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="p-5 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <p className="text-sm">
          © 2023 Marketplace. Todos los derechos reservados.
        </p>
        <ul>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
