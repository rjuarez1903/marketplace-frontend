import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto">
        <img
          src="/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="object-contain mb-5 mx-auto md:mx-5"
        />
        <div className="p-5 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-5 md:mb-0">
            <p className="text-sm">
              © 2023 EduHub. Todos los derechos reservados.
            </p>
            <p className="text-sm">
              Dirección: 1234 Calle Principal, Ciudad, País
            </p>
            <p className="text-sm">Teléfono: (123) 456-7890</p>
          </div>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-gray-700 transition duration-300"
              >
                <InstagramIcon fontSize="large" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-gray-700 transition duration-300"
              >
                <LinkedInIcon fontSize="large" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
