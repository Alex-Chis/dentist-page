import styles from "@/styles/NavbarOpen.module.css";
import PhoneSvg from "../../public/UpHeader/phone.svg";
import LocationSvg from "../../public/UpHeader/location.svg";
import CalendarSvg from "../../public/UpHeader/calendar.svg";
import Image from "next/image";

type Props = { left: string };
export default function NavbarOpen({ left }: Props) {
  return (
    <div className={styles.main} style={{ left }}>
      <div className={styles.navmenu}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
        <button className={styles.button}>Programare Online</button>
        <div className={styles.flexEven}>
          <Image src={PhoneSvg} alt="phone" />
          <p>+40 0741 234 567</p>
        </div>

        <div className={styles.flexEven}>
          <Image src={LocationSvg} alt="location" />
          <p>
            Sighetu Marmatiei,
            <br /> Maramures , Romania
          </p>
        </div>
        <div className={styles.flexEven}>
          <Image src={CalendarSvg} alt="calendar" />
          <p>Luni - Vineri: 9:00 - 18:00</p>
        </div>
      </div>
    </div>
  );
}
