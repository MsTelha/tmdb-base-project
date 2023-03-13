import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import TvShows from "./TvShows";
import People from "./People";
import { useNavigate } from "react-router-dom";
const movies = ["Popular", "Now Playing", "Upcoming", "Top Rated"];
const Movies = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    switch (e.target.innerText) {
      case "Popular":
        navigate("movie");
        break;
      case "Now Playing":
        // console.log(e.target.innerText);
        navigate("/movie/now-playing");
        break;
      case "Upcoming":
        navigate("/movie/upcoming");
        break;
      case "Top Rated":
        navigate("/movie/top-rated");
        break;
      default:
        break;
    }
    // console.log(e.target.innerText);
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      <Button
        id="fade-button"
        color="inherit"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Movies
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {movies.map((movie) => (
          <MenuItem key={movie} onClick={handleClose}>
            <Typography textAlign="center">{movie}</Typography>
          </MenuItem>
        ))}
      </Menu>
      <TvShows />
      <People />
    </Box>
  );
};

export default Movies;
