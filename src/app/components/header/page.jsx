/* eslint-disable @next/next/no-img-element */
import styles from "@/app/components/header/styles.module.scss"

export default function Header() {

  return (
    <>
      <div className="absolute top-0 w-full h-[100px] z-10">

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
      </div>
    </>
  )
}

