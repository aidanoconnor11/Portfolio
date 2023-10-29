// ProjectPage.js
import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function ProjectCard({ imageSrc, projectName, projectDescription }) {
  return (
    <Card style={{ width: 300, height: 400, margin: 16 }}>
      <CardMedia
        component="img"
        height="50%"
        image={imageSrc}
        alt={projectName}
      />
      <CardContent style={{ height: "50%" }}>
        <Typography variant="h6" gutterBottom align="center">
          {projectName}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {projectDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}

function ProjectPage() {
  const projects = [
    {
      id: 1,
      projectName: "RISK in OCaml",
      projectDescription: "Description for Project 1.",
      imageSrc:
        "https://cdn.akamai.steamstatic.com/steam/apps/1128810/capsule_616x353.jpg?t=1676590898",
    },
    {
      id: 2,
      projectName: "Project 2",
      projectDescription: "Description for Project 2.",
      imageSrc: "url_to_image_2",
    },
    {
      id: 2,
      projectName: "Project 2",
      projectDescription: "Description for Project 2.",
      imageSrc: "url_to_image_2",
    },
    {
      id: 2,
      projectName: "Project 2",
      projectDescription: "Description for Project 2.",
      imageSrc: "url_to_image_2",
    },
    {
      id: 2,
      projectName: "Project 2",
      projectDescription: "Description for Project 2.",
      imageSrc: "url_to_image_2",
    },
  ];

  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
          }
        `}
      </style>
      <Grid container spacing={2} style={{ padding: 20 }}>
        {projects.map((project) => (
          <Grid item key={project.id}>
            <ProjectCard
              imageSrc={project.imageSrc}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProjectPage;
