import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Feature from "../components/Feature";
import TestimonialCard from "../components/TestimonialCard";
import BigFeature from "../components/BigFeature";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccordionItem from "../components/AccordionItem";

export const Home = () => {
  useEffect(() => {
    document.title = "EduHub | Inicio";
  }, []);

  return (
    <div>
      <section className="w-full flex-center flex-col px-5 container mx-auto">
        <h1 className="head_text text-center">
          Aprendé
          <br />
          <span className="orange_gradient text-center">
            con los mejores profesores
          </span>
        </h1>
        <p className="desc text-center">
          EduHub te permite encontrar profesores de primera línea desde la
          comodidad de tu casa
        </p>
        {/* <NavLink className="black_btn mt-3" to="/clases">
          Ver Clases
        </NavLink> */}
      </section>
      <section className="mt-10">
        <div className=" bg-gray-100">
          <div className="py-16 grid md:grid-cols-2 gap-5 px-5 container mx-auto">
            <div>
              <h2 className="head_text blue_gradient text-left mb-5">
                <span className="gradient">¿Qué es EduHub?</span>
              </h2>
              <p className="desc text-left text-lg">
                EduHub es una plataforma integral que te permite encontrar
                profesores expertos en programación, idiomas, música y
                matemática. Podés acceder a clases,
                explorar nuevas ideas, tendencias y prácticas en cada área, y
                aprender con los mejores a un precio accesible. Descubrí una
                forma flexible y dinámica de adquirir nuevos conocimientos y
                habilidades en los campos que más te interesan.
              </p>
              <div className="flex gap-3 mt-3">
                <NavLink className="outline_btn " to="/clases/programacion">
                  Aprender
                </NavLink>
                <NavLink className="black_btn" to="/register">
                  Enseñar
                </NavLink>
              </div>
            </div>
            <div>
              <img
                src="../public/assets/images/learn_online.png"
                alt="learn online"
                width={500}
                height={500}
                className="object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-gradient">
          <div className="py-16 grid md:grid-cols-3 gap-5 px-5 container mx-auto">
            <Feature
              icon={
                <CalendarMonthIcon sx={{ fontSize: "80px", color: "#FFF" }} />
              }
              title="Clases programadas"
              text="Encontrá clases de programación en vivo y en directo"
            />
            <Feature
              icon={<LightbulbIcon sx={{ fontSize: "80px", color: "#FFF" }} />}
              title="Descubrí Nuevas Habilidades"
              text="Explorá nuevas ideas, tendencias y prácticas de programación"
            />
            <Feature
              icon={
                <AttachMoneyIcon sx={{ fontSize: "80px", color: "#FFF" }} />
              }
              title="Economizá"
              text="Aprendé a programar con los mejores profesores a un precio accesible"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="mt-16 grid md:grid-cols-3 gap-5 px-5 container mx-auto">
          <TestimonialCard
            src="../public/assets/images/testimonial1.jpg"
            name="Rodrigo Juarez"
            review="Excelentes profesores y variedad de cursos. Me ayudaron a mejorar mis habilidades de programación. ¡Recomendado!"
          />
          <TestimonialCard
            src="../public/assets/images/testimonial2.jpg"
            name="Marina Calandra"
            review="¡EduHub es insuperable! Ofrece clases de todo tipo y con docentes de primera. La calidad de enseñanza es de nivel premium. ¡Sumamente satisfecho con mi experiencia!"
          />
          <TestimonialCard
            src="../public/assets/images/testimonial3.jpg"
            name="Yamil Ventura"
            review="Me encanta este marketplace educativo. Encontré clases de matemática super accesibles y el profe es genial."
          />
        </div>
      </section>
      <section className="mt-16 px-5 container mx-auto">
        <BigFeature
          title="¿Sos Profesor?"
          subtitle="¡Ofrecé tus clases en EduHub!"
          text="En EduHub, valoramos tu pasión por la enseñanza. Queremos que compartas tus conocimientos con estudiantes de todo el país y más allá."
          button="Registrate Ahora"
          link="/register"
          imageSrc="../public/assets/images/student.png"
          imageAlt="student"
        />
      </section>
      <section className="mt-16 px-5 container mx-auto">
        <h2 className="head_text green_gradient text-left mb-5">
          <span className="gradient">Preguntas Frecuentes</span>
        </h2>
        <div>
          <AccordionItem
            question="¿Cómo me registro para ofrecer mis clases?"
            answer="Para registrarte, hacé click en el botón 'Registrarse' de la página principal. Completá el formulario con tus datos y ya vas a estar listo para comenzar."
          />
          <AccordionItem
            question="¿Cuánto cuesta acceder a las clases?"
            answer="Los precios de las clases varían según el profesor y el contenido. Vas a poder ver todas las opciones disponibles y elegir la que mejor se ajuste a tus necesidades y presupuesto."
          />
          <AccordionItem
            question="¿Necesito registrarme para consultar por clases?"
            answer="¡No hace falta que te registres para consultar! Simplemente completá el formulario de contacto y el profesor se va a poner en contacto con vos a la brevedad."
          />
          <AccordionItem
            question="¿Cómo selecciono una clase?"
            answer="Navegá por nuestra plataforma para explorar las distintas clases. Cuando encuentres la que te interesa, completá el formulario de consulta y el profesor se va a comunicar con vos."
          />
          <AccordionItem
            question="¿Puedo comunicarme directamente con los profesores?"
            answer="Después de completar el formulario de consulta, el profesor se va a poner en contacto con vos para coordinar detalles y responder todas tus preguntas."
          />
          <AccordionItem
            question="¿Qué pasa si necesito cancelar una clase?"
            answer="Si necesitás cancelar, comunicate con el profesor con antelación. Cada profesor tiene su propia política de cancelaciones y reembolsos, por lo que te sugerimos que lo consultes directamente con ellos."
          />
        </div>
      </section>
    </div>
  );
};
