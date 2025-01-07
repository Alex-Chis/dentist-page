import PhoneSvg from "../../public/UpHeader/phone.svg";
import PseudoSvg from "../../public/UpHeader/pseudo.svg";
import LocationSvg from "../../public/UpHeader/location.svg";
import CalendarSvg from "../../public/UpHeader/calendar.svg";
import styles from "@/styles/UpHeader.module.css";

import Image from "next/image";

export default function UpHeader() {
  return (
    <div className={styles.flexBetween}>
      <div className={styles.flexEven}>
        <Image src={PhoneSvg} alt="phone" />
        <p>+40 0741 234 567</p>

        <Image src={PseudoSvg} alt="pseudo" />

        <Image src={LocationSvg} alt="location" />
        <p>Sighetu Marmatiei, Maramures, Romania</p>
      </div>

      <div className={styles.flexEven}>
        <Image src={CalendarSvg} alt="calendar" />
        <p>Luni - Vineri: 9:00 - 18:00</p>
      </div>
    </div>
  );
}
