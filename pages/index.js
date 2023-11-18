import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Avatar } from "@mui/material";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState, useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [active, setActive] = useState({
    summary: true,
    workExpirience: false,
    education: false,
    projects: false,
  });
  // Empty dependency array means this effect runs once on mount

  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.section21}>
          <div className={styles.profilePhoto}>
            <Avatar
              alt="Remy Sharp"
              src="/photo_resume.jpeg"
              sx={{ width: 200, height: 200 }}
              className={styles.avatar}
            />
          </div>

          <div className={styles.details}>
            <span style={{ color: "#4f93f5" }}>Hello</span>
            <span> I'm Sagar Patra</span>
            <span style={{ paddingTop: "4%", fontSize: "16px" }}>
              {" "}
              A Full Stack Developer
            </span>
          </div>
        </div>
        <div className={styles.section12}>
          <div className={styles.left}>
            <span
              style={{
                color: "#94727b",
                padding: "5px",
                fontSize: "18px",
                fontStyle: "italic",
              }}
            >
              <blockquote>
                {
                  "	I bring three years of experience in full-stack development, specializing in React, Redux, Next.js, and Spring Boot. Proficient in UI libraries like Bootstrap, Material UI, and automated testing with Cypress. Skilled in CICD tools (GIT, Jenkins), database platforms (PostgreSQL, Firebase), and software development practices. Experienced in JavaScript, TypeScript, and React Testing Library. Knowledgeable in Spring Cloud and Microservices."
                }
              </blockquote>
            </span>
          </div>
          <div className={styles.right}>
            <span
              style={{ color: "#8f5058", fontSize: "20px", fontWeight: "bold" }}
            >
              Technical Skills
            </span>
            <div>
              <span style={{ color: "#f6f8fb", fontSize: "18px" }}>
                Primary
              </span>
            </div>
            <ul style={{ color: "#f6f8fb" }}>
              <li>React</li>
              <li>Redux</li>
              <li>Next</li>
              <li>Java Script</li>
              <li>TypeScript</li>
            </ul>
            <div>
              <span style={{ color: "#f6f8fb", fontSize: "18px" }}>
                Secondary
              </span>
            </div>
            <ul style={{ color: "#f6f8fb" }}>
              <li>Java</li>
              <li>Spring Boot</li>
            </ul>
            <div>
              <span style={{ color: "#f6f8fb", fontSize: "18px" }}>
                UI Libreries
              </span>
            </div>
            <ul style={{ color: "#f6f8fb" }}>
              <li>Material UI</li>
              <li>Bootstrap</li>
            </ul>
            <div>
              <span style={{ color: "#f6f8fb", fontSize: "18px" }}>
                Cloud Knowledge
              </span>
            </div>
            <ul style={{ color: "#f6f8fb" }}>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.section2}>sj</div>
      <div className={styles.sidebar}>
        <div
          style={{
            paddingTop: "5px",
            height: "70%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link
            href="#"
            passHref
            style={{ textDecoration: "none", marginTop: "20px" }}
            onClick={() =>
              setActive({
                ...active,
                summary: true,
                projects: false,
                education: false,
                workExpirience: false,
              })
            }
          >
            <span
              class={active?.summary ? styles.navSpanActive : styles.navSpan}
            >
              Summary
            </span>
          </Link>
          <Link
            href="#"
            style={{
              textDecoration: "none",
              marginTop: "20px",
            }}
            onClick={() =>
              setActive({
                ...active,
                summary: false,
                projects: false,
                education: false,
                workExpirience: true,
              })
            }
          >
            <span
              class={
                active?.workExpirience ? styles.navSpanActive : styles.navSpan
              }
            >
              Work Expirience
            </span>
          </Link>
          <Link
            href="#"
            style={{ textDecoration: "none", marginTop: "20px" }}
            onClick={() =>
              setActive({
                ...active,
                summary: false,
                projects: false,
                education: true,
                workExpirience: false,
              })
            }
          >
            <span
              class={active?.education ? styles.navSpanActive : styles.navSpan}
            >
              Education
            </span>
          </Link>
          <Link
            href="#"
            style={{ textDecoration: "none", marginTop: "20px" }}
            onClick={() =>
              setActive({
                ...active,
                summary: false,
                projects: true,
                education: false,
                workExpirience: false,
              })
            }
          >
            <span
              class={active?.projects ? styles.navSpanActive : styles.navSpan}
            >
              Projects
            </span>
          </Link>
        </div>
        <div style={{ paddingTop: "10px", height: "30%" }}>
          <Link href="https://www.linkedin.com/in/sagar-patra-8973b4170/">
            <LinkedInIcon
              style={{
                paddingLeft: "10px",
                paddingTop: "10px",
                color: "white",
              }}
            ></LinkedInIcon>
          </Link>
          <Link href="https://github.com/Sagarkumarnri">
            <GitHubIcon
              style={{
                paddingLeft: "10px",
                paddingTop: "10px",
                color: "white",
              }}
            ></GitHubIcon>
          </Link>
          <Link href="mailto:patrasagarkumar88@gmail.com">
            <EmailIcon
              style={{
                paddingLeft: "10px",
                paddingTop: "10px",
                color: "white",
              }}
            ></EmailIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}
