import * as React from "react";
import Header from "@/public/components/header";
import styles from "@/styles/Home.module.css";
import { Grid } from "@mui/material";
import Chip from '@mui/material/Chip';
import { skills } from "@/public/Data/data";

export default function Skills() {
  return (
    <>
      <Header headerName={"Skills"}></Header>
      <div className={styles.content}>

        {skills.map((item1, index) => <><div style={{ fontWeight: 'bold', fontSize: '18px', paddingBottom: '20px', paddingTop: '20px' }}>{item1.skillHeader}</div>
          <Grid container spacing={2} padding={'10px'}>
            {item1.sillList.map((skill, index) => <Grid item key={index}><Chip label={skill} /> </Grid>)}

          </Grid></>)}


      </div>
    </>
  );
}
