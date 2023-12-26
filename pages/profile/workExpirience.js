import * as React from "react";
import Header from "@/public/components/header";
import styles from "@/styles/Home.module.css";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import { workExpirience } from "@/public/Data/data";

export default function WorkExpirience() {
  return (
    <>
    <Header headerName={"Work Expirience"}></Header>
    <div className={styles.content}>
     
      {workExpirience.map((item,index)=>(<div key={index} style={{paddingBottom:'20px'}}><Grid container spacing={2} flexDirection={'column'}  paddingBottom={'10px'}>
       <Grid item flexDirection={'column'} >
       <div style={{fontWeight:'bold',fontSize:'20px', paddingBottom:'10px'}}>{item.companyName}</div>
       <div style={{fontWeight:'bold',fontSize:'18px', paddingTop:'10px'}}>{item.role}</div>
       <div style={{paddingTop:'10px'}}>{item.timePeriod}</div>
       </Grid>
      <Grid item>
        <div>
       {item.summary}
        </div>
      </Grid>
      </Grid>
      {index!==2&&<Divider/>}</div>))}
    </div>
    </>
  );
}
