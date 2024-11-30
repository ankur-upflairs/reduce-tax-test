import React from "react";
import Grid from "@mui/material/Grid2";
import PostCard from "./PostCard";
import Typography from "@mui/material/Typography";

const PopularPosts = () => {
  const posts = [
    {
      image: "https://i0.wp.com/blog.ted.com/wp-content/uploads/sites/2/2024/10/TN24_20241024_1GT8585-medium.jpg?resize=649%2C487&ssl=1",
      title: "Tips on how to travel safely in foreign countries",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Charlotte Delos",
      role: "Travel Advocate",
    },
    {
      image: "https://i0.wp.com/blog.ted.com/wp-content/uploads/sites/2/2024/10/TN24_20241024_1GT8585-medium.jpg?resize=649%2C487&ssl=1",
      title: "Enjoying the beach life while on a vacation countries",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Adam Cuppy",
      role: "Vlogger",
    },
  ];

  return (
    <div className="populor">
      <Typography variant="h2" className="mb-4">
        Popular Posts
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid item size={{ xs: 12, md: 6 }} key={index}>
            <PostCard {...post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PopularPosts;
