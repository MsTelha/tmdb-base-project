import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

let count = 1;

const LoadMore = (props) => {
  const [clicked, setClicked] = React.useState(false);
  const dispatch = useDispatch();
  const ref = React.useRef();
  const clickLoader = () => {
    setClicked(true);
  };

  function apiCall(entries) {
    const [entry] = entries;
    // console.log(clicked);
    if (entry.isIntersecting && clicked) {
      // console.log(count);
      count = count + 1;
      dispatch({
        type: props.type,
        count: count,
      });
    }
  }

  React.useEffect(() => {
    const Observer = new IntersectionObserver(apiCall, {
      root: null,
      threshold: 0,
    });
    if (ref.current) Observer.observe(ref.current);
    return () => {
      if (ref.current) Observer.unobserve(ref.current);
    };
  }, [clicked, apiCall]);

  return (
    <Button variant="contained" sx={{width:"100%"}} onClick={clickLoader} ref={ref}>
      Load More
    </Button>
  );
};

export default LoadMore;
