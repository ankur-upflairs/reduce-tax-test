import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid2";

const PostCard = ({ image, title, description, author, role }) => {
  return (
    <Card elevation={3} sx={{ mb: 4 }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ maxWidth: "100%" }}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom color="#243E63" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Grid
          container
          alignItems="center"
          spacing={2}
          sx={{ mt: 3 }}
          wrap="nowrap"
        >
          <Grid item>
            <Avatar
              src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80${Math.floor(
                Math.random() * 70
              )}`}
              alt={author}
              sx={{ width: 40, height: 40 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="strong">
              {author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {role}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PostCard;
