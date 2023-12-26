import * as React from "react";
import Header from "@/public/components/header";
import styles from "@/styles/Home.module.css";
import { Grid } from "@mui/material";
import Chip from '@mui/material/Chip';

export default function Skills() {
  return (
    <>
      <Header headerName={"Skills"}></Header>
    <div className={styles.content}>
     
      <div style={{fontWeight:'bold',fontSize:'18px'}}>{`Primary Skills`}</div>
      <Grid container spacing={2} padding={'10px'}>
        <Grid item ><Chip label='React'/> </Grid>
        <Grid item ><Chip label='Redux'/></Grid>
        <Grid item ><Chip label='NextJs'/> </Grid>
        <Grid item ><Chip label='HTML'/> </Grid>
        <Grid item ><Chip label='CSS'/> </Grid>
        <Grid item ><Chip label='Saga'/> </Grid>
        <Grid item ><Chip label='Thunk'/> </Grid>
      </Grid>
      <div style={{fontWeight:'bold',fontSize:'18px',paddingTop:'20px'}}>{`Secondary Skills`}</div>
      <Grid container spacing={2} padding={'20px'}>
        <Grid item ><Chip label='Java'/></Grid>
        <Grid item ><Chip label='Spring Boot'/></Grid>
         
      </Grid>
      <div style={{fontWeight:'bold',fontSize:'18px',paddingTop:'20px'}}>{`UI libreries`}</div>
      <Grid container spacing={2} padding={'20px'}>
        <Grid item ><Chip label='MUI'/></Grid>
        <Grid item ><Chip label='Boot Strap'/></Grid>
         
      </Grid>
      <div style={{fontWeight:'bold',fontSize:'18px',paddingTop:'20px'}}>{`Cloud Knowledge`}</div>
      <Grid container spacing={2} padding={'20px'}>
        <Grid item ><Chip label='AWS'/></Grid>
        <Grid item ><Chip label='GCP'/></Grid>
         
      </Grid>
      <div style={{fontWeight:'bold',fontSize:'18px',paddingTop:'20px'}}>{`Development Frameworks Used`}</div>
      <Grid container spacing={2} padding={'20px'}>
        <Grid item ><Chip label='Test Driven Development (TDD)'/></Grid>
         
         
      </Grid>
      
    </div>
    </>
  );
}
