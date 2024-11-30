import React from "react";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

const RecentPosts = () => {
  const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
    "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=40",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
    "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    "https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
  ];

  const posts = [
    "Getting the most out of your vacation",
    "Choosing the perfect Safaris in Africa",
    "Hiking during the monsoon in Asia",
    "Must carry items while travelling to Thailand",
    "An extremely funny trip to the Swiss Alps",
  ];

  const authors = [
    "Aaron Patterson",
    "Sam Phipphen",
    "Tony Hawk",
    "Himali Turn",
    "Naomi Watts",
  ];

  return (
    <div className="recent">
      <Typography variant="h2" gutterBottom className="mb-4">
        Recent Posts
      </Typography>
      <List>
        {posts.map((post, index) => (
          <ListItem key={index} sx={{ alignItems: "flex-start", mt: 2 }}>
            <ListItemAvatar>
              <Avatar
                src={images[index]}
                alt={`Image for ${post}`}
                sx={{ width: 60, height: 60 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="body1">{post}</Typography>}
              secondary={
                <Typography variant="body2" color="text.secondary">
                  {authors[index]}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RecentPosts;
