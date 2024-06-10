"use client";

import { Navigation, navigation } from "@/data/navigation";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHamburger = () => {
    setIsOpen((prev) => !prev);
  };
  console.log(isOpen);

  useEffect(() => {
    // Function to check screen width and set isActive accordingly
    const checkScreenWidth = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };

    // Initial check on component mount
    checkScreenWidth();

    // Event listener for window resize
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []); // Empty

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className={styles.headerContainer}>
      <div id={styles.nav}>
        <a href="/">
          <p className={styles.logo}>ChefSelect</p>
        </a>

        <nav>
          <ul className={`${styles.navbar}  ${isOpen ? styles.isActive : ""}`}>
            {navigation.map((item: Navigation) => {
              return (
                <li key={item.id}>
                  <a className={styles.navLink} href={item.url}>
                    {item.name}
                  </a>
                </li>
              );
            })}
            {isOpen && (
              <>
                <span className={styles.divider}></span>
                <a className={`${styles.navLoginBtn}`} href="/login">
                  {" "}
                  Login{" "}
                </a>
              </>
            )}
          </ul>
        </nav>

        <a className={`${styles.loginBtn} primary-btn`} href="/login">
          {" "}
          Login{" "}
        </a>

        <div
          className={`${styles.hamburger} ${isOpen ? styles.isActive : ""}`}
          onClick={toggleHamburger}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
