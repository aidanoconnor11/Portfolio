// Contacts.js
import React from "react";
import Typography from "@mui/material/Typography";

function Contact({ platformLogo, platformName, platformHandle, platformLink }) {
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
        <img
          src={platformLogo}
          alt={platformName}
          style={{ maxWidth: "15%" }}
        />
        <div style={{ marginLeft: "20px" }}>
          <Typography variant="h5">{platformName}</Typography>
          <Typography variant="body1">
            <a href={platformLink} target="_blank" rel="noopener noreferrer">
              {platformHandle}
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
}

function Contacts() {
  const contacts = [
    {
      id: 1,
      platformName: "LinkedIn",
      platformLogo:
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      platformHandle: "aidanoconnor1",
      platformLink: "https://www.linkedin.com/in/aidanoconnor1/",
    },
    {
      id: 2,
      platformName: "GitHub",
      platformLogo:
        "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png",
      platformHandle: "aidanoconnor11",
      platformLink: "https://github.com/aidanoconnor11",
    },
    {
      id: 3,
      platformName: "Email",
      platformLogo:
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
      platformHandle: "ao274@cornell.edu",
      platformLink: "mailto:your.email@example.com",
    },
    {
      id: 4,
      platformName: "Phone",
      platformLogo:
        "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png",
      platformHandle: "+1 (585) 310-8654",
      platformLink: "tel:+15853108654",
    },
    // Add more contacts as needed
  ];

  return (
    <div>
      <h2>Contact Information</h2>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          platformLogo={contact.platformLogo}
          platformName={contact.platformName}
          platformHandle={contact.platformHandle}
          platformLink={contact.platformLink}
        />
      ))}
    </div>
  );
}

export default Contacts;
