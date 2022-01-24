import { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../../public/Logo.png";

import style from "./Navbar.module.scss";
import Image from "next/image";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("Searching...");
  };
  useEffect(() => {
    window.addEventListener("click", (e: MouseEvent) => {
      if (document.getElementById("toggle-navbar")) {
        if (!document.getElementById("nav")?.contains(e.target as Node)) {
          if (
            !document.getElementById("toggle")?.contains(e.target as Node) &&
            !document
              .getElementById("toggle-navbar")
              ?.contains(e.target as Node)
          ) {
            setCheck(false);
          }
        }
      }
    });
    return window.removeEventListener("click", () => {});
  }, []);

  return (
    <header className={style.header}>
      <Link href="/">
        <a className={style.logo}>
          <h1>
            Movie <strong>R</strong>ecommendation
          </h1>
          <Image
            src={Logo}
            alt="Movie Recommendation"
            height={40}
            width={80}
            quality={50}
          />
        </a>
      </Link>
      <input
        className={style.nav_toggle}
        onChange={() => setCheck((e) => !e)}
        checked={check}
        type="checkbox"
        id="toggle-navbar"
      />
      <label
        htmlFor="toggle-navbar"
        id="toggle"
        className={style.nav_toggle_label}
      >
        <span />
      </label>
      <form className={style.search_box} onSubmit={handleSubmit}>
        <input
          value={search}
          type="search"
          onChange={handleChange}
          placeholder="Search movie"
          required
        />
        <span>
          <FontAwesomeIcon icon={faSearch} size="sm" />
        </span>
      </form>
      <nav className={style.nav} id="nav">
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
