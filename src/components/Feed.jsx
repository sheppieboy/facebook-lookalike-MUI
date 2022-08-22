import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box
      sx={{
        flex: 4,
        p: 2,
      }}
    >
      <Post />
    </Box>
  );
};
export default Feed;