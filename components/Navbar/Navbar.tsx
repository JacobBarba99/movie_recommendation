import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../public/Logo.png";
import styles from "./styles.module.scss";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <span>
            Movie <strong>R</strong>ecommendation
          </span>
          <Image
            src={Logo}
            width={0}
            height={0}
            alt="Logo Movie Recommendation"
          />
        </a>
      </Link>
      <input type="checkbox" id="nav-toggle" className={styles.nav_toggle} />
      <label htmlFor="nav-toggle">
        <span></span>
      </label>
      <form
        className={styles.search}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={search}
          type="search"
          onChange={handleChange}
          placeholder="Buscar pelicula"
          required
        />
        <span className="fa fa-search" onClick={() => {}}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </form>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/recommendation">
              <a>Recomendaciones</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
