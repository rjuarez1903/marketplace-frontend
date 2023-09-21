import { useEffect, useState } from "react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [session, setSession] = useState(null);

  return (
    <nav className="flex-between w-full mb-16 pt-3 container mx-auto">
      <a href="/" className="flex gap-2 flex-center">
        <img
          src="/assets/images/react.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Marketplace</p>
      </a>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <a href="/create-prompt" className="black_btn">
              Create Post
            </a>

            <button type="button" className="outline_btn">
              Sign Out
            </button>

            <a href="/profile">
              <img
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </a>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => console.log("clicked")}
              className="black_btn uppercase font-bold"
            >
              Registrarse
            </button>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <img
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <a
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </a>
                <a
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => console.log("clicked")}
              className="black_btn"
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
