import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./TabBar.module.css";

const TabBar = () => {
  const router = useRouter();

  return (
    <>
      <nav className={styles.tab}>
        <div className={styles.tabs_container}>
          <Link href="/">
            <a
              className={`${styles.tab_link} ${
                router.pathname === "/" && styles.active
              }`}
            >
              Projects
            </a>
          </Link>

          <Link href="/about">
            <a
              className={`${styles.tab_link} ${
                router.pathname === "/about" && styles.active
              }`}
            >
              About
            </a>
          </Link>

          <Link href="article">
            <a
              className={`${styles.tab_link} ${
                router.pathname === "/article" && styles.active
              }`}
            >
              Articles
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default TabBar;
