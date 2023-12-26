import styles from "@/styles/Home.module.css";
import Header from "@/public/components/header";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useRouter } from "next/router";
export default function ImgMediaCard() {
  const router = useRouter();
   
  return (
    <>
    <Header headerName={"Projects"}></Header>
    <div className={styles.content}>

      <div style={{  padding: "5px" }}>
        <Card
          
          style={{ marginTop: "10px",backgroundColor:'#b0adadcf'}}
        >
          <CardActionArea
            onClick={() => router.push("/profile/projectDetails/3")}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                CIFAM
              </Typography>
               
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          
          style={{ marginTop: "20px", backgroundColor:'#b0adadcf'  }}
        >
          <CardActionArea
            onClick={() => router.push("/profile/projectDetails/2")}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                TENET
              </Typography>
              
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
         
          style={{ marginTop: "20px", backgroundColor:'#b0adadcf' }}
        >
          <CardActionArea
            onClick={() => router.push("/profile/projectDetails/4")}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MD360
              </Typography>
              
            </CardContent>
          </CardActionArea>
        </Card>
      
      
        <Card
           
          style={{ marginTop: "20px", backgroundColor:'#b0adadcf' }}
        >
          <CardActionArea
            onClick={() => router.push("/profile/projectDetails/0")}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                RFA
              </Typography>
              
            </CardContent>
          </CardActionArea>
        </Card>
        
      </div>
    </div>
    </>
  );
}
