// Experiences.js
import React from "react";
import Typography from "@mui/material/Typography";

function Experience({
  companyLogo,
  companyName,
  position,
  duration,
  location,
  description,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <Typography variant="h5">{companyName}</Typography>
          <Typography variant="subtitle1">{position}</Typography>
          <Typography variant="body1">{duration}</Typography>
          <Typography variant="body1">{location}</Typography>
        </div>
        <img src={companyLogo} alt={companyName} style={{ maxWidth: "25%" }} />
      </div>
      <Typography variant="body1" style={{ marginTop: "20px" }}>
        {description}
      </Typography>
    </div>
  );
}

function Experiences() {
  const experiences = [
    {
      id: 1,
      companyName: "J.P. Morgan",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/J_P_Morgan_Logo_2008_1.svg/2560px-J_P_Morgan_Logo_2008_1.svg.png",
      position: "Software Engineer Intern",
      duration: "June 2023 - August 2023",
      location: "New York City, New York",
      description: "Description for J.P. Morgan internship...",
    },
    {
      id: 2,
      companyName: "XYZ Inc.",
      companyLogo: "url_to_logo_2",
      position: "Data Scientist",
      duration: "Mar 2018 - Nov 2019",
      location: "City, Country",
      description: "Description for XYZ Inc. role...",
    },
    {
      id: 1,
      companyName: "Cornell Concrete Canoe",
      companyLogo:
        "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/300388178_497759532352609_5387367084630465547_n.png?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0v4T5OSFdlMAX-Vmo1q&_nc_ht=scontent-lga3-1.xx&oh=00_AfAcWfY3uHJanQ6jbb0zOgIlsQGpXeuNFyBbI6pTUGghgQ&oe=65445635",
      position: "Team Lead",
      duration: "April 2022 - April 2023",
      location: "Ithaca, New York",
      description: "Description for Concrete Canoe",
    },
    {
      id: 2,
      companyName: "XYZ Inc.",
      companyLogo: "url_to_logo_2",
      position: "Data Scientist",
      duration: "Mar 2018 - Nov 2019",
      location: "City, Country",
      description: "Description for XYZ Inc. role...",
    },
    {
      id: 2,
      companyName: "XYZ Inc.",
      companyLogo: "url_to_logo_2",
      position: "Data Scientist",
      duration: "Mar 2018 - Nov 2019",
      location: "City, Country",
      description: "Description for XYZ Inc. role...",
    },
    // Add more experiences as needed
  ];

  return (
    <div>
      <h2>Experiences</h2>
      {experiences.map((experience) => (
        <Experience
          key={experience.id}
          companyLogo={experience.companyLogo}
          companyName={experience.companyName}
          position={experience.position}
          duration={experience.duration}
          location={experience.location}
          description={experience.description}
        />
      ))}
    </div>
  );
}

export default Experiences;
