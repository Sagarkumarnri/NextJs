import "@/styles/globals.css";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { useState, useEffect } from "react";

import SideBar from "./SideBar";
import mainPageStyles from '@/styles/mainPage.module.scss'
import Link from "next/link";
import Divider from '@mui/material/Divider'
import { Suspense } from "react";
import Footer from "./footer";
import '../styles/globals.css';
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  const [anchorElNav, setAnchorElNav] = useState(true);

  const navProps = {
    anchorElNav: anchorElNav,
    setAnchorElNav: setAnchorElNav
  }
  const linkStyle = {
    textDecoration: "none",
    color: 'black',
  }

  return (
    <>

      <SideBar anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav} />
      <div >


        <div className={styles.section2}>
          {anchorElNav ? <Suspense fallback={<Loading />}><Component {...pageProps}{...navProps} /> </Suspense> :
            <div className={mainPageStyles.container_menu}>
              <div className={mainPageStyles.item_menu}><Link onClick={() => setAnchorElNav(true)} href="/profile/skills" style={linkStyle}>Skills</Link></div>
              <div className={mainPageStyles.item_menu}><Link onClick={() => setAnchorElNav(true)} style={linkStyle}
                href="/profile/projectsList">Projects</Link></div>
              <div className={mainPageStyles.item_menu}><Link onClick={() => setAnchorElNav(true)} href="/profile/education" style={linkStyle}>Education</Link></div>
              <div className={mainPageStyles.item_menu}><Link onClick={() => setAnchorElNav(true)} href="/profile/workExpirience" style={linkStyle}>Experience</Link></div>
            </div>}
          <Divider style={{ paddingTop: '40px', }} />
          {anchorElNav && <Footer />}
        </div>

      </div>



    </>
  );
}
