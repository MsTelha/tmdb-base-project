import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/system";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CircularStatic from "../../component/CircularStatic";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import LoadMore from "../../component/LoadMore";
import Skeleton from "@mui/material/Skeleton";
import Box from '@mui/material/Box';
const Popular = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieSlice.popular);
  function clickHandler() {
    navigate(`/movie/${this}`);
    console.log(this);
  };
  let type = "showMovies";
  React.useEffect(() => {
    dispatch({
      type: "showMovies",
      count: 1,
    });
  }, [dispatch]);
  return (
    <Container>
      <Grid container maxWidth="xl" spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Typography sx={{ mt: 4, fontWeight: "bold" }} variant="h5">
            Popular Movies
          </Typography>
          <Accordion sx={{ my: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Sort</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography variant="h7">Sort Results By</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Filters</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography>Show Me</Typography>
            </AccordionDetails>
            <Divider />
            <AccordionDetails>
              <Typography>Availabilities</Typography>
            </AccordionDetails>
            <Divider />
            <AccordionDetails>
              <Typography>Release Dates</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ my: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Where To Watch</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography variant="h7">My Services</Typography>
            </AccordionDetails>
            <Divider />
            <AccordionDetails>
              <Typography variant="h7">Country</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item marginTop={4} xs={12} sm={12} md={12} lg={9}>
          <Grid container align="center" spacing={2}>
            {movies[0] ? (
              movies.map((movie) => {
                return (
                  <Grid item key={movie.id} lg={2.2} sm={4} xs={12} md={3}>
                    <Card
                      sx={{
                        minWidth: 155,
                        maxWidth: 230,
                        maxHeight: 550,
                        cursor: "pointer",
                      }}
                      align="start"
                      onClick={clickHandler.bind(movie.id)}
                    >
                      <CardMedia
                        component="img"
                        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      />
                      <CircularStatic
                        key={movie.id}
                        value={movie.vote_average}
                      />
                      <CardContent sx={{ height: 90 }}>
                        <Typography
                          gutterBottom
                          fontWeight="bold"
                          variant="h7"
                          component="div"
                        >
                          {movie.title}
                        </Typography>
                        <Typography variant="h7" color="text.secondary">
                          {movie.release_date}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })
            ) : (
              <Box height="100vh">
                <Skeleton
                  variant="rectangular"
                  width={210}
                  height={250}
                />
              </Box>
            )}
          </Grid>
          <Grid item pt={2}>
            <LoadMore type={type} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Popular;
