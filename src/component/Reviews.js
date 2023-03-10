import { Typography, Paper } from "@mui/material";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from '@mui/icons-material/Instagram';
const Reviews = (props) => {
  const dispatch = useDispatch();
  const movieReviews = useSelector((state) => state.reviewsSlice.reviews);
  // const movieReviews = 0
  React.useEffect(() => {
    dispatch({
      type: "showReviews",
      param: props.id,
    });
  }, [dispatch, props.id]);

  return (
    <Grid>
      <Grid container padding={8} spacing={3}>
        <Grid item mx={1} lg={12} 
          md={12}
          sm={12}
          xs={12}>
          <Typography variant="h5" fontWeight="bold">
            Reviews {movieReviews.length ? movieReviews.length : 0}
          </Typography>
       
      </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 1200,
              maxHeight: 950,
            },
          }}
          lg={9}
          md={10}
          sm={12}
          xs={12}
        >
          {movieReviews[0] ? (
            movieReviews.map((review) => {
              var options = { year: "numeric", month: "long", day: "numeric" };
              let date = new Date(review.updated_at).toLocaleDateString(
                "en-US",
                options
              );
              let text = review.content;
              let string = text.substring(0, 500);

              return (
                <Paper key={review.id}>
                  <Grid container padding={3}>
                    <Grid item lg={1} md={2} sm={3} xs={4}>
                      <Avatar
                        src={review.author_details.avatar_path}
                        sx={{ width: 56, height: 56 }}
                      />
                    </Grid>
                    <Grid item lg={11} md={10} sm={9} xs={8}>
                      <Grid container direction="row" spacing={2}>
                        <Grid item>
                          <Typography
                            gutterBottom
                            variant="h6"
                            fontWeight="bold"
                          >
                            A review by {review.author}
                          </Typography>
                          <Typography gutterBottom variant="h7">
                            Written by {review.author_details.username} on{" "}
                            {date}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography gutterBottom variant="h7">
                            {string}.....
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              );
            })
          ) : (
            <Paper
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 900,
                  height: 100,
                },
              }}
            >
              <Grid container padding={3}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 900,
                      height: 100,
                    },
                  }}
                  lg={9}
                  md={8}
                  sm={6}
                  xs={6}
                >
                  <Typography gutterBottom variant="h6">
                    We don't have any reviews for {props.name}. Would you like
                    to write one?
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          )}
        </Grid>
        <Grid item lg={3}
                  md={2}
                  sm={12}
                  xs={12}>
        <Grid container>
          <FacebookRoundedIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
        </Grid>
      </Grid>
      </Grid>
      </Grid>
  );
};

export default Reviews;
