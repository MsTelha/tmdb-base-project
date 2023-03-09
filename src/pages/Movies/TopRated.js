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
import { useSelector, useDispatch } from "react-redux";
import LoadMore from "../../component/LoadMore";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router";
const TopRated = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const topRated = useSelector((state) => state.movieSlice.topRated);

  function clickHandler() {
    navigate(`/movie/${this}`);
    // console.log(this);
  }
  let type = "showTopRated";
  React.useEffect(() => {
    dispatch({
      type: "showTopRated",
    });
  }, [dispatch]);
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Typography sx={{ mt: 4, fontWeight: "bold" }} variant="h5">
            Top Rated Movies
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
            {topRated[0] ? (
              topRated.map((rated, id) => {
                return (
                  <Grid key={id} item lg={2.2} sm={4} xs={12} md={3}>
                    <Card
                      sx={{ minWidth: 155, maxWidth: 230, maxHeight: 550, cursor: "pointer", }}
                      onClick={clickHandler.bind(rated.id)}
                      align="start"
                    >
                      <CardMedia
                        component="img"
                        image={`https://image.tmdb.org/t/p/w500/${rated.poster_path}`}
                      />
                      <CircularStatic
                        key={rated.id}
                        value={rated.vote_average}
                      />
                      <CardContent sx={{ height: 90 }}>
                        <Typography
                          gutterBottom
                          fontWeight="bold"
                          variant="h7"
                          component="div"
                        >
                          {rated.title}
                        </Typography>
                        <Typography variant="h7" color="text.secondary">
                          {rated.release_date}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })
            ) : (
              <Grid item>
                <CircularProgress size="100vh" />
              </Grid>
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

export default TopRated;
