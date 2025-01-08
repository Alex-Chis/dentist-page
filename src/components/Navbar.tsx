import styles from "@/styles/Navbar.module.css";
import MenuSvg from "../../public/UpHeader/menu.svg";
import CloseSvg from "../../public/UpHeader/close.svg";
import Image from "next/image";
import { useState } from "react";
import NavbarOpen from "./NavbarOpen";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logoHeader}>
          <h1 className={styles.textLogo}>Clinica</h1>
          <h1 className={styles.textLogo2}>Dentara</h1>
        </div>

        <div className={styles.navmenu}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Contact Us</a>
        </div>

        <button className={styles.button}>Programare Online</button>

        <Image
          className={styles.menu}
          onClick={() => setMenuOpen(!menuOpen)}
          src={menuOpen ? CloseSvg : MenuSvg}
          alt={menuOpen ? "close" : "menu"}
        ></Image>
      </div>
      {menuOpen && (
        <div className="overlay">
          <NavbarOpen left={menuOpen ? "0px" : "-100%"} />
        </div>
      )}
    </div>
  );
}
