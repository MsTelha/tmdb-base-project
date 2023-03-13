import * as React from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import Box from '@mui/material/Box';
const PopularPeople = () => {
  const dispatch = useDispatch();
  const persons = useSelector(
    (state) => state.popularPeopleSlice.popularPeople
  );
  // console.log(persons);
  React.useEffect(() => {
    dispatch({
      type: "showPopularPeople",
    });
  }, [dispatch]);
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography sx={{ my: 2, fontWeight: "bold" }} variant="h5">
            Popular People
          </Typography>
          <Grid container align="center" spacing={10} px="auto">
            {persons ? (
              persons.map((person) => {
                return (
                  <Grid key={person.id} item lg={2.4} sm={6} xs={12} md={3}>
                    <Card sx={{ minWidth: 235, borderRadius: 0 }} align="start">
                      <CardMedia
                        sx={{ height: 230 }}
                        component="img"
                        image={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                      />

                      <CardContent sx={{ height: 30 }}>
                        <Typography
                          gutterBottom
                          fontWeight="bold"
                          variant="h7"
                          component="div"
                        >
                          {person.name}
                        </Typography>
                        <Typography variant="h7" color="text.secondary">
                          {person.known_for_department}
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default PopularPeople;
