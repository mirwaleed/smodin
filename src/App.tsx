import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

import Card from "@mui/material/Card";
import { Button, CardContent, Divider, TextField } from "@mui/material";
import { Container } from "@mui/system";
import Header from "./components/Header";
import { getEssay } from "./mocks/essays";
import { RatingsProps } from "./interface";
import Ratings from "./components/Ratings";

interface Essay {
  id: number;
  text: string;
}

export default function App() {
  const [essay] = useState<Essay>(() => getEssay());
  const [comment, setComment] = useState<string>("");
  const [ratings, setRatings] = useState<RatingsProps>({
    essay: 0,
    site: 0,
    trustpilot: 0,
  });

  const updateRating = (type: string) => (_: any, value: number | null) => {
    setRatings((prev: RatingsProps) => ({ ...prev, [type]: value }));
  };

  const submitReview = async () => {
    console.log(ratings, comment);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...ratings, comment }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", options)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Box>
      <Header />
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Card variant="outlined">
          <CardContent>
            <Box component="main" sx={{ p: 3 }}>
              <Typography variant="h5">Essay</Typography>
              <Typography sx={{ pl: 3, pt: 4 }}>{essay.text}</Typography>

              <Divider sx={{ p: 1 }} />

              <Typography variant="h5" align="justify" sx={{ mt: 2 }}>
                Ratings
              </Typography>

              <Ratings ratings={ratings} updateRating={updateRating} />

              {ratings.essay === 5 && ratings.site === 5 && (
                <>
                  <Divider sx={{ p: 1 }} />
                  <Typography variant="h5" align="justify" sx={{ mt: 2 }}>
                    Leave us review Trustpilot
                  </Typography>
                  <Box
                    sx={{
                      pl: 3,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Rating
                      name="trust-pilot-rating"
                      value={ratings.trustpilot}
                      onChange={updateRating("trustpilot")}
                      sx={{ pb: 1, pt: 2 }}
                    />
                    <TextField
                      multiline
                      label="Comment"
                      inputProps={{ maxLength: 1200 }}
                      sx={{ mb: 3, mt: 2 }}
                      minRows={3}
                      onChange={({ target: { value } }) => setComment(value)}
                    />

                    <Button
                      variant="outlined"
                      size="small"
                      onClick={submitReview}
                    >
                      Leave us a review
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
