
import Post from "./Post";
import PopularPosts from "./PopularPosts";
import RecentPosts from "./RecentPosts";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";

function BlogPage() {
  return (
    <>
      <Post />
      <Container className="container-fluid py-5">
        <Grid container spacing={3}>
          <Grid item size={{ xs: 12, md: 8 }}>
            <PopularPosts />
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <RecentPosts />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BlogPage;
