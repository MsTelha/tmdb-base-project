import * as React from "react";
import {
  Typography,
  Grid,
  Paper,
  CardMedia,
  Card,
  Avatar
} from "@mui/material";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import CircularStatic from "../../component/CircularStatic";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Box } from "@mui/system";

const MovieDetailPage = () => {

  let params = useParams();

  const moviedetail = useSelector((state) => state.detailsSlice.movieDetails);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({
      type: "showMovieDetails",
      param: params.id,
    });
  }, [dispatch, params.id]);
  const backGround = {
    backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${moviedetail.backdrop_path}`})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#00000091",
    backgroundBlendMode: "soft-light",
    my: 5,
    align: "center",
  };

  let moonLanding = new Date(moviedetail.release_date);

  let year = moonLanding.getFullYear();

  return (
    <>
      <Box
        sx={{
          ...backGround,
        }}
      >
        <Grid container px={6} display="flex" alignItems="center">
          <Grid item lg={3} md={12} sm={12} xs={12}>
            <Card sx={{ m: 4, maxWidth: 300, maxHeight: 500, borderRadius: 2 }}>
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500/${moviedetail.poster_path}`}
              />
            </Card>
          </Grid>
          <Grid item lg={9} md={12} sm={12} xs={12}>
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  color="white"
                >
                  {moviedetail.original_title + " " + `(${year})`}
                </Typography>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Typography variant="h7" color="white">
                    {moviedetail.release_date}.{" "}
                    {moviedetail.genres?.map((gen) => {
                      return (
                        <Typography
                          key={gen.id}
                          variant="h7"
                          fontWeight="bold"
                          color="white"
                        >
                          {gen.name}{" "}
                        </Typography>
                      );
                    })}
                  </Typography>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Grid container my={4} spacing={1}>
                    <Grid item mt={3}>
                      <CircularStatic
                        sx={{ height: 200 }}
                        key={moviedetail.id}
                        value={moviedetail.vote_average}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="h7" fontWeight="bold" color="white">
                        User <br /> Score
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container>
                        <Avatar sx={{ backgroundColor: "#032541", mx: 1 }}>
                          <ListIcon />
                        </Avatar>
                        <Avatar sx={{ backgroundColor: "#032541", mx: 1 }}>
                          <FavoriteIcon />
                        </Avatar>
                        <Avatar sx={{ backgroundColor: "#032541", mx: 1 }}>
                          <BookmarkIcon />
                        </Avatar>
                        <Avatar sx={{ backgroundColor: "#032541", mx: 1 }}>
                          <StarIcon />
                        </Avatar>
                      </Grid>
                    </Grid>
                    <Grid item sx={{ display: "flex", alignItems: "center" }}>
                      <PlayArrowIcon sx={{ color: "white" }} fontSize="large" />
                      <Typography variant="h7" fontWeight="bold" color="white">
                        Play Trailer
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="h7" color="white">
                    {moviedetail.tagline}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6" fontWeight="bold" color="white">
                    Overview
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h7" color="white">
                    {moviedetail.overview}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Grid>
        <Grid container padding="35px">
          <Grid
            item
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 900,
                height: 250,
              },
            }}
            lg={9}
            md={8}
            sm={6}
            xs={6}
          >
          
            <Paper></Paper>
          </Grid>
          
          <Grid item lg={3}
            md={6}
            sm={6}
            xs={6}>

          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default MovieDetailPage;
