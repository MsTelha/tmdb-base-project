import * as React from "react";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
const Search = () => {
  const search = useSelector((state) => state.searchSlice.search);

  return (
    <Container>
      <Grid container spacing={2} padding={4}>
        {search[0] ? (
          search.map((data, id) => {
            return (
              <Grid item key={id} lg={12} md={12} sm={12} xs={12}>
                <Paper elevation={3}>
                  <Card sx={{ display: "flex", height: 170 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                      alt="Live from space album cover"
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          {data.original_title}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          {data.release_date}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          {data.overview}
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Paper>
              </Grid>
            );
          })
        ) : (
          <Box height="100vh">
            <Typography variant="h3" fontWeight="bold">
              No Record Found
            </Typography>
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default Search;
