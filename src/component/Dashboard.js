import Box from "@mui/material/Box";
import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Home from "../assets/Home.jpg";
import InputAdornment from "@mui/material/InputAdornment";
import { Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Container } from "@mui/system";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Home})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
    minHeight: "400px",
  },
  inputField: {
    width: "90%",
    height: "30px",
    border: 0,
    outline: "none",
    borderRadius: "50px",
  },
  inputField: {
    width: "100%",
    "& .MuiInputBase-root": {
      borderRadius: "50px",
      paddingRight: "0px",
      height: "46px",
      backgroundColor: "white",
    },
  },
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [input, setInput] = React.useState("");
  const [submitClicked, setSubmitClicked] = React.useState(false);
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    setSubmitClicked(true);
    navigate(`/search`);
    dispatch({ type: "search", action: { query: input, page: 1 } });
  }
  React.useEffect(() => {
    if (input && !submitClicked) {
      var getData = setTimeout(() => {
        navigate(`/search`);
        dispatch({ type: "search", action: { query: input, page: 1 } });
      }, 2000);
    }
    return () => clearTimeout(getData);
  }, [input]);
  return (
    <Container>
      <Box
        sx={{
          ...styles.paperContainer,
          px: 4,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            color: "white",
          }}
        >
          Welcome.
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "white",
          }}
        >
          Millions of movies, TV shows and people to discover. Explore now.
        </Typography>
        <TextField
          placeholder="Search for a movie, tv show, person......"
          InputLabelProps={{ shrink: false }}
          id="input-with-icon-textfield"
          sx={styles.inputField}
          onChange={(e) => setInput(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment
                className="searchbtn"
                position="start"
                sx={{ height: "46px", marginRight: "0px" }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ height: "46px", borderRadius: "50px" }}
                  onClick={submitHandler}
                >
                  Search
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Container>
  );
};

export default Dashboard;
