

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { Avatar, Button, Grid } from "@mui/material";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState, useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import SideBar from "./SideBar";
import { Height } from "@mui/icons-material";
import { useRouter } from "next/router";
import styles from '@/styles/mainPage.module.scss'
import Link from "next/link";
export default function Home({ anchorElNav, setAnchorElNav }) {
  const router = useRouter()




  return (
    <>

      <div  >
        <Grid container className={styles.container_index} >
          <Grid item className={styles.item} >
            <Avatar
              alt="Remy Sharp"
              src="/bw.jpeg"
              className={styles.avatar_style}
            />
          </Grid>

          <Grid item className={styles.item}>
            <span style={{ color: "black", fontWeight: 'bold', fontSize: "24px" }}>Hello</span>
            <span style={{ color: "black", fontWeight: 'bold', fontSize: "24px" }}>A bit about my self</span>
            <div  >
              <span>
                <blockquote>
                  {
                    `I bring three years of experience in full-stack development, specializing in React, Redux, Next.js, and Spring Boot. Proficient in UI libraries like Bootstrap, Material UI, and automated testing with Cypress. Skilled in CICD tools (GIT, Jenkins), database platforms (PostgreSQL, Firebase), and software development practices.`}
                </blockquote>
              </span>
            </div>
            <div className={styles.round_button_container}>
              <Button className={styles.roundButton_resume} variant="contained" color="primary" onClick={() => router.push("/profile/workExpirience")}>Expirience</Button>
              <Button className={styles.roundButton_projects} variant="contained" color="primary" onClick={() => router.push("/profile/projectsList")}>Projects</Button>
              <Button className={styles.roundButton_contact} variant="contained" color="primary" onClick={() => router.push("/profile/skills")}>Skills</Button>

            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
