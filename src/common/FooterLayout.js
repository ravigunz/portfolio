import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Box } from "@mui/material";

export default function FooterLayout() {
  return (
    <Box
      sx={{ p: 2 }}
      style={{
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "space-between",
        width: '100%',
        position: 'fixed',
        bottom: '0'
      }}
    >
      <div>
        <small style={{ color: "white" }}>
          Copyright &copy; {new Date().getFullYear()}{" "}
        </small>
      </div>

      <div>
        <div style={{ color: "white" }}>Ravi Gunasena</div>
        <a href="https://www.linkedin.com/in/ravigunasena/" target="_blank">
          <LinkedInIcon
            sx={{ color: "#0A66C2", "&:hover": { fontSize: "72px" } }}
          />
        </a>
        <a href="https://www.facebook.com/ravigunz" target="_blank">
          <FacebookIcon
            sx={{ color: "#0A66C2", "&:hover": { fontSize: "72px" } }}
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCELrZ-FKYSYMjxNQkRMvrYA"
          target="_blank"
        >
          <YouTubeIcon
            sx={{ color: "#FF0000", "&:hover": { fontSize: "72px" } }}
          />
        </a>
        <a href="https://github.com/ravigunz" target="_blank">
          <GitHubIcon
            sx={{ color: "#000000", "&:hover": { fontSize: "72px" } }}
          />
        </a>
        <a href="tel:+94714401145" target="_blank">
          <WhatsAppIcon
            sx={{ color: "#25D366", "&:hover": { fontSize: "72px" } }}
          />
        </a>
      </div>

      <div>
        <a href="#">
          <ArrowCircleUpIcon
            sx={{
              color: "#002A9D",
              fontSize: "32px",
              "&:hover": { fontSize: "72px" },
            }}
          />
        </a>
      </div>
    </Box>
  );
}
