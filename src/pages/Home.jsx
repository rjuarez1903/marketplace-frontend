import { NavLink } from "react-router-dom";
import Feature from "../components/Feature";
import TestimonialCard from "../components/TestimonialCard";
import BigFeature from "../components/BigFeature";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col px-5 container mx-auto">
        <h1 className="head_text text-center">
          Aprendé a programar
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
                EduHub es una plataforma que te permite encontrar profesores de
                programación. Podés encontrar clases de programación en vivo y
                en directo, explorar nuevas ideas, tendencias y prácticas de
                programación y aprender con los mejores profesores a un precio
                accesible.
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
            review="Buena plataforma, pero algunas clases son caras. Sería genial tener más opciones de precios bajos."
          />
          <TestimonialCard
            src="../public/assets/images/testimonial3.jpg"
            name="Yamil Ventura"
            review="Me encanta este marketplace educativo. Encontré clases de música asequibles y el profesor es genial. ¡Volveré por más!"
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
    </div>
  );
};
