import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { RatingsProps } from "../interface";

interface Props {
  ratings: RatingsProps;
  updateRating: Function;
}

const Ratings = (props: Props) => {
  return (
    <Box sx={{ "& > legend": { mt: 2 }, pl: 3 }}>
      <Typography component="legend">How do you rate our essay ?</Typography>
      <Rating
        name="essay-rating"
        value={props.ratings.essay}
        onChange={props.updateRating("essay")}
      />
      <Typography component="legend">How do you rate our site ?</Typography>
      <Rating
        name="site-rating"
        value={props.ratings.site}
        onChange={props.updateRating("site")}
      />
    </Box>
  );
};

export default Ratings;
