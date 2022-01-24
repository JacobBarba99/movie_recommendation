import Image from "next/image";
import Link from "next/link";
import tmdb from "../../../public/tmdb.svg";

import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.links}>
        <Link href="/">Home</Link>
        <Link href="/recommendation">Recommendation</Link>
        <h4>&copy; Movie Recommendation 2022</h4>
      </div>
      <a
        className={style.img}
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noreferrer"
      >
        <Image width={350} src={tmdb} alt="The Movie Database" />
      </a>
    </footer>
  );
};

export default Footer;
