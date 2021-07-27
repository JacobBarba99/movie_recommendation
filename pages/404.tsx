import Link from "next/link";
import styles from "../styles/404.module.scss";

const Error404 = () => {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <h4>Pagina no encontrada</h4>
      <p>
        Lo siento, la pagina que estas buscando no existe. Si piensas que algo
        esta roto, reporta el problema{" "}
      </p>
      <div className={styles.btns}>
        <Link href="/">
          <a>Ir a Home</a>
        </Link>
        <a href="mailto:contacto@jesuslares.com?subject=Problemas sobre la pagina Movie Recommendation">
          Reportar problema{" "}
        </a>
      </div>
    </div>
  );
};

export default Error404;
