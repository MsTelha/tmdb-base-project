import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        mt: -3,
        ml: 1,
        position: "relative",
        display: "inline-flex",
        bgcolor: "#081C22",
        borderRadius: "100%",
      }}
    >
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="white">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic(props) {
  let progress = props.value * 10;
  let circleColor;
  if (progress > 70) {
    circleColor = "success";
  } else if (progress > 50) {
    circleColor = "warning";
  } else if (progress > 30) {
    circleColor = "primary";
  } else {
    circleColor = "primary";
  }
  return <CircularProgressWithLabel color={circleColor} value={progress} />;
}
