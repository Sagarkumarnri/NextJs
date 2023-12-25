import "@/styles/globals.css";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Avatar,Button,Grid } from "@mui/material";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState, useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import SideBar from "./SideBar";
import { Height } from "@mui/icons-material";
import'./mainPage.scss'
import Link from "next/link";
import Divider from '@mui/material/Divider'
 
import Footer from "./footer";
import './footer.scss'
const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  const [anchorElNav, setAnchorElNav] = useState(true);
   
  const navProps={
    anchorElNav:anchorElNav,
    setAnchorElNav:setAnchorElNav
  }
  
  return (
    <>
    <SideBar anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav}/>
    <div >
     
       
      <div className={styles.section2}>
        {anchorElNav?<Component {...pageProps}{...navProps} />:
        <div className="container-menu">
          <div className="item-menu"><Link onClick={()=>setAnchorElNav(true)}href="/" style={{ textDecoration: "none"}}>Resume</Link></div>
          <div className="item-menu"><Link onClick={()=>setAnchorElNav(true)} style={{ textDecoration: "none"}}
  href="/profile/projectsList">Projects</Link></div>
          <div className="item-menu"><Link onClick={()=>setAnchorElNav(true)} href="/profile/education" style={{ textDecoration: "none"}}>Skills</Link></div>
          <div className="item-menu"><Link onClick={()=>setAnchorElNav(true)} href="/" style={{ textDecoration: "none"}}>Contact</Link></div>
          </div>}
          <Divider style={{paddingTop:'40px'}}/>
         {anchorElNav&&<Footer/>}
      </div>
      
    </div>

    

    </>
  );
}
