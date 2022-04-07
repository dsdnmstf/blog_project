import React from "react";
import MenuAppbar from "../components/MenuAppbar";
import Box from "@mui/material/Box";
import Blogs from "../components/Blogs";
const Main = () => {
  return (
    <>
      <MenuAppbar />
      <h2>Dashboard</h2>
      <Box
        sx={{ display: "flex", gap:"2rem", justifyContent: "center", alignItems: "center" }}
      >
        <Blogs />
      </Box>
    </>
  );
};

export default Main;
