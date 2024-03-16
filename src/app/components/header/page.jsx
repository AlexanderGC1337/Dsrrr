import styles from "@/app/components/header/styles.module.scss"

export default function Header() {
  return (
    <nav id={styles.navContainer}>
      <a href="/">
        <img id={styles.imgLogo} src="/assets/images/DSR-logo.gif" alt="" />
      </a>
      <ul id={styles.navListContainer}>
        <li>
          <a id={styles.navItem} href="/">Forside</a>
        </li>

        <li>
          <a id={styles.navItem} href="/nyheder">Nyheder</a>
        </li>

        <li>
          <a id={styles.navItem} href="/rallies">Rallies</a>
        </li>

        <li>
          <a id={styles.navItem} href="/resultat">Resultat</a>
        </li>

        <li>
          <a id={styles.navItem} href="/hvaderdsr">Hvad er DSR?</a>
        </li>
      </ul>
    </nav>
  )
}

