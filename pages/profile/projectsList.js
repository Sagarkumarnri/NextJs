import styles from "@/styles/Home.module.css";
import Header from "@/public/components/header";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useRouter } from "next/router";
import { projects } from "@/public/Data/data";
export default function ImgMediaCard() {
  const router = useRouter();
  return (
    <>
      <Header headerName={"Projects"}></Header>
      <div className={styles.content}>

        <div style={{ padding: "5px" }}>
          {projects.map((element, index) => <Card key={element.id}

            style={{ marginTop: "10px", backgroundColor: '#b0adadcf' }}
          >
            <CardActionArea
              onClick={() => router.push(`/profile/projectDetails/${index}`)}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {element.projectName}
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>)}
        </div>
      </div>
    </>
  );
}
