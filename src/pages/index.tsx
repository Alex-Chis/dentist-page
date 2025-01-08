import UpHeader from "@/components/UpHeader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroPage";
import Stats from "@/components/Stats";
import style from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={style.main}>
            
      <UpHeader />
      <Navbar />
      <Hero />
      <Stats />
      
      </div>
  );
}
