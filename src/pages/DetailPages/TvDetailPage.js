import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import CircularStatic from "../../component/CircularStatic";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Box } from "@mui/system";

const TvDetailPage = () => {


  
  let params = useParams();
  // console.log(params);
  const tvdetail = useSelector((state) => state.detailsSlice.tvDetails);
  console.log(tvdetail);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({
      type: "showTvDetails",
      param: params.id,
    });
  }, [dispatch, params.id]);
  const backGround = {
    backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${tvdetail.backdrop_path}`})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#00000091",
    backgroundBlendMode: "soft-light",
    my: 5,
    align: "center",
  };

  let moonLanding = new Date(tvdetail.first_air_date);

  let year = moonLanding.getFullYear();

  return (
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
              image={`https://image.tmdb.org/t/p/w500/${tvdetail.poster_path}`}
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
                {tvdetail.original_name + " " + `(${year})`}
              </Typography>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography variant="h7" color="white">
                  {tvdetail.genres?.map((gen) => {
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
                      key={tvdetail.id}
                      value={tvdetail.vote_average}
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
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h7" color="white">
                  {tvdetail.tagline}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" fontWeight="bold" color="white">
                  Overview
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h7" color="white">
                  {tvdetail.overview?(tvdetail.overview):(
                    <Typography variant="h7" color="white">
                    We don't have an overview translated in English. Help us expand our database by adding one.
                </Typography>
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TvDetailPage;
