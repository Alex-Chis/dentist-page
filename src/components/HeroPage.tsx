import SmileSvg from "../../public/Hero/smile.svg";
import Stars1 from "../../public/Hero/stars1.svg";
import Stars2 from "../../public/Hero/stars2.svg";
import HeroImg from "../../public/png/heroImg.png";
import BgImg from "../../public/Hero/bg.svg";
import Image from "next/image";
import styles from "@/styles/HeroPage.module.css";

export default function HeroPage() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.salut}>Salut! Suntem o clinica dentara</p>
        <Image className={styles.smile} src={SmileSvg} alt="smile" />
        <h1>
          Cu soluții personalizate <br /> și grijă pentru tine,
          <br /> îți redăm zâmbetul perfect.
        </h1>
        <p className={styles.description}>
          Echipa noastră de specialiști folosește tehnologie
          <br /> de ultimă generație și cele mai bune materiale,
          <br /> pentru a-ți oferi rezultate sigure și durabile.
        </p>
      </div>
      <div className={styles.container2}>
        <Image className={styles.bg} src={BgImg} alt="bg" fill={true} />
        <div className={styles.line}></div>
        <div className={styles.line2}></div>
        <Image
          className={styles.stars1}
          src={Stars1}
          alt="stars1"
          width={45}
          height={48}
        />
        <Image
          className={styles.stars2}
          src={Stars2}
          alt="stars2"
          width={20}
          height={25}
        />

        <Image
          className={styles.image}
          width={400}
          height={600}
          src={HeroImg}
          alt="hero"
        />
      </div>
    </div>
  );
}
