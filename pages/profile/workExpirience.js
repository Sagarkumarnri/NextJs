import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import Header from "@/public/components/header";
import styles from "@/styles/Home.module.css";

export default function WorkExpirience() {
  return (
    <div className={styles.content}>
      <Header headerName={"Work Expirience"}></Header>
      <Timeline position="alternate">
        <TimelineItem style={{ marginTop: "10px" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            April 2022-Presesnt
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              style={{
                width: "50px",

                backgroundColor: "white",
                objectFit: "cover",
              }}
            >
              <img src="/LTILOGO.svg" alt="Your SVG" />
            </TimelineDot>
            <TimelineConnector
              style={{
                height: "80px",
              }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Product Engineer
            </Typography>
            <Typography>REACT,JAVA,Full Stack Developer</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="white"
          >
            Nov 2020 -April 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector
              style={{
                height: "80px",
              }}
            />
            <TimelineDot
              style={{
                width: "50px",
                backgroundColor: "white",
                objectFit: "cover",
              }}
            >
              <img
                style={{
                  width: "50px",
                  backgroundColor: "white",
                  objectFit: "cover",
                }}
                src="/tata-consultancy-services-1.svg"
                alt="Your SVG"
              />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Assistant System Engineer
            </Typography>
            <Typography>Java Full Stack Developer</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem style={{ marginTop: "10px" }}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="white"
          >
            April 2019-June 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector
              style={{
                height: "80px",
              }}
            />
            <TimelineDot
              style={{
                width: "50px",
                backgroundColor: "green",
                objectFit: "cover",
              }}
            >
              <img
                style={{
                  backgroundColor: "white",
                }}
                src="/DRDO.svg"
                alt="Your SVG"
              />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "16px", px: 2, marginTop: "10px" }}>
            <Typography variant="h6" component="span">
              DRDO Intern
            </Typography>
            <Typography>Python Django,Java Script</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
