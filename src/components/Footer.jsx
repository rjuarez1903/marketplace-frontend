import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className=" bg-white">
      <div className="container mx-auto">
      <img
          src="/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="object-contain mx-5"
        />
      <div className="p-5 flex flex-col md:flex-row justify-between">
        <p className="text-sm">
          © 2023 EduHub. Todos los derechos reservados.
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
      </div>
    </footer>
  );
};

export default Footer;
