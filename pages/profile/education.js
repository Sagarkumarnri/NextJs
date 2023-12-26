import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import styles from "@/styles/Home.module.css";
import Header from "@/public/components/header";
import { TimelineOppositeContent } from "@mui/lab";
export default function Education() {
  const dotStyle={
    backgroundColor:'black',
  }
  return (
    <>
     <Header headerName={"Education"}></Header>
    <div className={styles.content}>
   

      <Timeline position="alternate" style={{paddingBottom:"40px" }}>
        <TimelineItem>
          <TimelineOppositeContent  >
            Graduation (2016-2020)
          </TimelineOppositeContent>
          <TimelineSeparator style={{paddingBottom:"20px" }}>
            <TimelineDot style={dotStyle}/>
            <TimelineConnector style={{ height: "160px" ,backgroundColor:'black'}} />
          </TimelineSeparator>
          <TimelineContent>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Nri Institute of Technology</span>
              <span>(Computer Science and Engineering)</span>
              <span>CGPA-7.79</span>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent  >
            +2 ( 2014-2016)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot style={dotStyle} />
            <TimelineConnector style={{ height: "120px",backgroundColor:'black' }} />
          </TimelineSeparator>
          <TimelineContent>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Narayana Junior College</span>
              <span>MPC</span>
              <span>96.1%</span>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent style={{ height: "70px" }}  >
            SSC (2014 passed out)
          </TimelineOppositeContent>
          <TimelineSeparator style={{ height: "70px",}}>
            <TimelineDot style={dotStyle}/>
            <TimelineConnector style={{ backgroundColor:'black' }} />
          </TimelineSeparator>
          <TimelineContent>
            {" "}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Sri Aurobindo High School</span>
              <span>Pulivendula</span>
              <span>CGPA-9.5</span>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
    </>
  );
}
