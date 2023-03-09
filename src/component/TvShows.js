import React from "react";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router";
const TvShows = () => {

const navigate  = useNavigate()
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    navigate("/tv")
    setAnchorEl1(null);
  };

  return (
    <>
      <Button
        id="fade-button"
        color="inherit"
        aria-controls={open1 ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? "true" : undefined}
        onClick={handleClick1}
      >
        Tv Shows
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose1}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose1}>Popular </MenuItem>
      </Menu>
    </>
  );
};

export default TvShows;
