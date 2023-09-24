const Profile = () => {
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
                  src="/assets/images/profile.jpg"
                  alt="Profile"
                  className="rounded-full h-40 w-40 object-cover"
                />
              </div>
              <div className="col-span-12 text-right">
                <button className="black_btn w-40">Editar</button>
              </div>
            </div>
          </div>
          <div className="mt-5 lg:mt-0 col-span-9">
            <form className="w-full max-w-2xl flex flex-col gap-7 glassmorphism">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <label
                    htmlFor="name"
                    className="font-inter text-sm text-gray-600"
                  >
                    Nombre:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value="Rodrigo"
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="name"
                    className="font-inter text-sm text-gray-600"
                  >
                    Apellido:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value="Juarez"
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="email"
                    className="font-inter text-sm text-gray-600"
                  >
                    Correo Electrónico:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="rodrigo@gmail.com"
                    className="border border-gray-300 rounded p-2 w-full"
                    disabled
                  />
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="email"
                    className="font-inter text-sm text-gray-600"
                  >
                    Título:
                  </label>
                  <input
                    type="text"
                    id="degree"
                    name="degree"
                    value="Lic. en Sistemas"
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="email"
                    className="font-inter text-sm text-gray-600"
                  >
                    Experiencia:
                  </label>
                  <textarea
                    className="border border-gray-300 rounded p-2 w-full"
                    id="experience"
                    name="experience"
                    rows="5"
                    value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum."
                  />
                </div>
              </div>
              <div className="flex-end mx-3 mb-5 gap-4">
                <button
                  type="submit"
                  //   disabled={submitting}
                  className="px-5 py-1.5 text-sm bg-primary-orange rounded-md text-white uppercase"
                >
                  {/* {submitting ? `${type}ing...` : type} */}
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
