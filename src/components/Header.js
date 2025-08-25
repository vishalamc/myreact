import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen((p) => !p);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  // Close on Esc
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: "https://img.icons8.com/?size=100&id=FltuUxRGNDy9&format=png&color=000000",
    },
    {
      label: "Games",
      href: "/gamedashboard",
      icon: "https://img.icons8.com/?size=100&id=CwCwicwWMjyU&format=png&color=000000",
    },
    {
      label: "Courses",
      href: "/#learn-section",
      icon: "https://img.icons8.com/?size=100&id=6iYcq3SxsRPh&format=png&color=000000",
    },
    
  {
      label: "My Portfolio",
      href: "/myportfolio",
      icon: "https://img.icons8.com/?size=100&id=TSraKTEkWbDV&format=png&color=000000",
    },
  ];

  return (
    <>
      <style>{`
        .header {
          background-color: white;
          box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
          position: sticky;
          top: 0;
          width: 100%;
          z-index: 1000;
        }
        .navbar {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
        }
        .logo {
          height: 40px;
          cursor: pointer;
          user-select: none;
        }
        .menu-icon {
          display: none;
          cursor: pointer;
          border: none;
          background: transparent;
          padding: 6px;
          line-height: 0;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
          margin: 0;
          padding: 0;
        }
        .nav-links li a {
          color: #333;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .nav-links li a:hover {
          color: #0070f3;
        }
        .nav-icon-img {
          width: 24px;
          height: 24px;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .menu-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #333;
          }

          .nav-links {
            position: fixed;
            top: 60px;
            right: 0;
            height: calc(100% - 60px);
            width: 240px;
            background-color: #fff;
            flex-direction: column;
            padding-top: 20px;
            box-shadow: -2px 0 12px rgba(0,0,0,0.12);
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            z-index: 1001;
            overflow-y: auto;
          }
          .nav-links.open {
            transform: translateX(0);
          }
          .nav-links li {
            margin-bottom: 20px;
            padding-left: 20px;
          }

          /* Mobile menu image styling - fills width naturally */
          .nav-image {
            width: 100%;
            height: auto;
            display: block;
            object-fit: contain;
            border-radius: 0;
            background: #fff;
          }
        }

        /* Desktop: keep icons visible */
        @media (min-width: 769px) {
          .nav-icon {
            display: inline-block;
          }
        }
      `}</style>

      <header className="header">
        <nav className="navbar" ref={navRef}>
          <a href="https://gyanmanthangurukul.in/">
            <img
              src="/gyanmanthanlogo.svg"
              alt="Logo"
              className="logo"
              draggable="false"
            />
          </a>

          <button
            className="menu-icon"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            <img
              src={isOpen ? "/close.svg" : "/menu.svg"}
              alt="menu"
              width="28"
              height="28"
            />
          </button>

          {/* Backdrop (mobile only) */}
          <div
            className={`backdrop ${isOpen ? "show" : ""}`}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <ul
            id="primary-navigation"
            className={`nav-links ${isOpen ? "open" : ""}`}
          >
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={() => setIsOpen(false)}>
                  <span className="nav-icon">
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="nav-icon-img"
                      draggable="false"
                    />
                  </span>
                  {item.label}
                </a>
              </li>
            ))}

            {/* Full width image after nav links (mobile only) */}
            {isOpen && (
              <li>
                <img
                  src="/tt-login-testimonial-bg.png"
                  alt=""
                  className="nav-image"
                  draggable="false"
                />
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;