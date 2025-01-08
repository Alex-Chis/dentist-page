import stats1 from "../../public/Hero/stats1.svg";
import stats2 from "../../public/Hero/stats2.svg";
import stats3 from "../../public/Hero/stats3.svg";
import stats4 from "../../public/Hero/stats4.svg";
import Image from "next/image";
import styles from "@/styles/Stats.module.css";
export default function Stats() {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.stats}>
        <Image src={stats1} alt="stats1" />
        <div className="statsText">
          <div>
            <p>12000</p>
            <p className="plus">+</p>
          </div>
          <p>Pacienti multumiti</p>
        </div>
      </div>
      <div className={styles.stats}>
        <Image src={stats2} alt="stats1" />
        <div className="statsText">
          <div>
            <p>12000</p>
            <p className="plus">+</p>
          </div>
          <p>Pacienti multumiti</p>
        </div>
      </div>
      <div className={styles.stats}>
        <Image src={stats3} alt="stats1" />
        <div className="statsText">
          <div>
            <p>12000</p>
            <p className="plus">+</p>
          </div>
          <p>Pacienti multumiti</p>
        </div>
      </div>
      <div className={styles.stats}>
        <Image src={stats4} alt="stats1" />
        <div className="statsText">
          <div>
            <p>12000</p>
            <p className="plus">+</p>
          </div>
          <p>Pacienti multumiti</p>
        </div>
      </div>
    </div>
  );
}
