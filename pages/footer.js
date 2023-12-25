import { Grid } from "@mui/material"
 
import styles from "@/styles/component.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";
import { Height } from "@mui/icons-material";
const Footer=()=>{

    return(
        <Grid container spacing={4} flexDirection={'column'} className={styles.footer_container} >
             
         <Grid item >
        <div className={styles.footer_header} >Phone</div>
            <div>9705205604</div>
         </Grid>
         <Grid item >
            <div  className={styles.footer_header}>Email</div>
            <span>patrasagarkumar88@gmail.com</span>
         </Grid>
         <Grid item >
            <div className={styles.footer_header} >Follow Me</div>
            <div style={{hight:"80px"}}>
            <Link href="https://www.linkedin.com/in/sagar-patra-8973b4170/">
            <LinkedInIcon
              style={{
                paddingLeft: "20px",
                paddingTop: "10px",
                color: "black",
              }}
            ></LinkedInIcon>
          </Link>
          <Link href="https://github.com/Sagarkumarnri">
            <GitHubIcon
              style={{
                paddingLeft: "20px",
                paddingTop: "10px",
                color:"black"
              }}
            ></GitHubIcon>
          </Link>
          <Link href="mailto:patrasagarkumar88@gmail.com">
            <EmailIcon
              style={{
                paddingLeft: "20px",
                paddingTop: "10px",
                 color:"black"
              }}
            ></EmailIcon>
          </Link>

          <Link href="tell:+91 9705205604">
            <CallIcon
              style={{
                paddingLeft: "20px",
                paddingTop: "10px",
                color:"black"
              }}
            ></CallIcon>
          </Link>
            </div>
         </Grid>
        </Grid>
    )
}
export default Footer