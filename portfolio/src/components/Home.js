// Home.js
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function Home() {
  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid
        item
        xs={6}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px 20px", // Adjusted paddingTop and added marginBottom
          backgroundColor: "#f0f0f0", // Adjust the background color as needed
        }}
      >
        <Typography variant="h4">
          Hi, I'm <strong>Aidan O'Connor</strong>
        </Typography>
        <Typography variant="subtitle1" align="center">
          a computer science student at Cornell with experiences in Full Stack
          Development and Data Science
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://imageupload.io/ib/sQIaYOm4hXbkGk0_1698611780.jpg"
          style={{
            width: "400px",
            height: "600px",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Home;
