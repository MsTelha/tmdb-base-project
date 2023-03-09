import React from 'react'
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useNavigate } from 'react-router';
const People = () => {
   const navigate = useNavigate();
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open2 = Boolean(anchorEl2);

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
      };
      const handleClose2 = () => {
        navigate("/person")
        setAnchorEl2(null);
      };

  return (
    <>
         <Button
        id="fade-button"
        color="inherit"
        aria-controls={open2 ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? "true" : undefined}
        onClick={handleClick2}
      >
        People
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose2}>Popular People</MenuItem>
      </Menu>
    </>
  )
}

export default People 