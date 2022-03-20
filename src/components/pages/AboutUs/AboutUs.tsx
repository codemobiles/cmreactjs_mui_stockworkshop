import { Paper } from "@mui/material";
import * as React from "react";
import Iframe from "react-iframe";

type AboutUsProps = {
  //
};

const AboutUs: React.FC<any> = () => {
  return (
    <Paper sx={{ height: "86vh" }}>
      <Iframe url="https://codemobiles.com" width="100%" height="100%" id="myId" display="inline" position="relative" />
    </Paper>
  );
};

export default AboutUs;
