import * as React from "react";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
const Search = () => {
  const search = useSelector((state) => state.searchSlice.search);
  console.log(search);
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 4,
            borderRadius: 2,
            width: 1200,
            height: 150,
          },
        }}
      >
        <Paper elevation={3} />
      </Box>
    </Container>
  );
};

export default Search;
