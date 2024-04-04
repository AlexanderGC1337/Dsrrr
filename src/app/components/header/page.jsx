/* eslint-disable @next/next/no-img-element */
import styles from "@/app/components/header/styles.module.scss"
import Link from "next/link"

export default function Header() {

  return (
    <>
      <div className="navbar bg-white sticky top-0 uppercase z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow bg-white rounded-box w-52">
              <li><a href="/nyheder">Nyheder</a></li>
              <li><a href="/rallies">Rallies</a></li>
              <li><a href="/resultat">Resultat</a></li>
              <li><a href="/omos">Om os</a></li>
            </ul>
          </div>
          <Link href={"/"} className="">
            <img src="/assets/images/Logo.jpg" alt="Logo" className="h-28" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-semibold">
            <li><a href="/nyheder">Nyheder</a></li>
            <li><a href="/rallies">Rallies</a></li>
            <li><a href="/resultat">Resultat</a></li>
            <li><a href="/omos">Om os</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

