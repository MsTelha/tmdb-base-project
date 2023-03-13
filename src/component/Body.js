import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/system";
import { Grid } from "@mui/material";
import CircularStatic from "./CircularStatic";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Skeleton from "@mui/material/Skeleton";
const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const body = useSelector((state) => state.bodySlice.body);

  function clickHandler() {
    navigate(`/movie/${this}`);
    // console.log(this);
  }

  React.useEffect(() => {
    dispatch({
      type: "showBody",
    });
  }, [dispatch]);
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{
          pt: 4,
          fontWeight: 600,
        }}
      >
        Trending
      </Typography>
      <Grid
        container
        sx={{
          overflow: "auto",
        }}
      >
        <Stack direction="row" my={2} spacing={2} sx={{ cursor: "pointer" }}>
          {body[0] ? (
            body.map((body) => {
              return (
                <Card
                  key={body.id}
                  sx={{ minWidth: 150 }}
                  onClick={clickHandler.bind(body.id)}
                >
                  <CardMedia
                    sx={{ height: 200 }}
                    image={`https://image.tmdb.org/t/p/w500/${body.poster_path}`}
                  />
                  <CircularStatic key={body.id} value={body.vote_average} />
                  <CardContent>
                    <Typography
                      gutterBottom
                      fontWeight="bold"
                      variant="h7"
                      component="div"
                    >
                      {body.title}
                    </Typography>
                    <Typography variant="h7" color="text.secondary">
                      {body.release_date}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <Skeleton variant="rectangular" width={210} height={250} />
          )}
        </Stack>
      </Grid>
    </Container>
  );
};

export default Body;
