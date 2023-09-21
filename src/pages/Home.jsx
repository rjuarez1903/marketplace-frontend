import Feature from "../components/Feature";
import TestimonialCard from "../components/TestimonialCard";
import BigFeature from "../components/BigFeature";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const Home = () => {
  return (
    <div className="pb-16">
      <section className="w-full flex-center flex-col px-5 lg:px-0">
        <h1 className="head_text text-center">
          Aprendé a programar
          <br />
          <span className="orange_gradient text-center">
            con los mejores profesores
          </span>
        </h1>
        <p className="desc text-center">
          Marketplace es una plataforma que te permite encontrar profesores de
          programación
        </p>
        <button className="black_btn mt-3 uppercase font-bold">
          Ver clases
        </button>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap justify-center align-center bg-gradient">
          <div className="py-16 grid md:grid-cols-3 gap-5 container mx-auto">
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
        <div>
          <div className="mt-16 grid md:grid-cols-3 gap-5 px-5 lg:px-0 container mx-auto">
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
        </div>
        <div className="mt-16 px-5 lg:px-0">
          <div className="container mx-auto">
            <BigFeature />
          </div>
        </div>
      </section>
    </div>
  );
};
