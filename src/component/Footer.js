import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ mt: 5, background: "#032541", color: "white" }}>
      <Container>
        <Grid container sx={{padding:8}}>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Typography>
              <img
                alt=""
                width="180"
                height="100"
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              />
            </Typography>
            <Button
              sx={{
                mt: 5,
                borderColor: "white",
                backgroundColor: "white",
                fontWeight: "bold",
              }}
              variant="outlined"
            >
              JOIN THE COMMUNITY
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={9}>
            <Grid container py={2}>
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Typography fontWeight="bold" variant="h6">
                  THE BASICS
                </Typography>
                <Typography variant="body1">About TMDB</Typography>
                <Typography variant="body1">Contact Us</Typography>
                <Typography variant="body1">Support Forums</Typography>
                <Typography variant="body1">API</Typography>
                <Typography variant="body1">System Status</Typography>
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                <Typography fontWeight="bold" variant="h6">
                  GET INVOLVED
                </Typography>
                <Typography variant="body1">Contribution Bible</Typography>
                <Typography variant="body1">Add New Movie</Typography>
                <Typography variant="body1">Add New TV Show</Typography>
                </Grid>
                <Grid item lg={3} md={6} sm={6} xs={12}>
              <Typography fontWeight="bold" variant="h6">
                COMMUNITY
              </Typography>
              <Typography variant="body1">Guidelines</Typography>
              <Typography variant="body1">Discussions</Typography>
              <Typography variant="body1">Leaderboard</Typography>
              <Typography variant="body1">Twitter</Typography>
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={12}>
            <Typography fontWeight="bold" variant="h6">
              LEGAL
            </Typography>
            <Typography variant="body1">Terms of Use</Typography>
            <Typography variant="body1">API Terms of Use</Typography>
            <Typography variant="body1">Privacy Policy</Typography>
          </Grid>
        </Grid>
        </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
