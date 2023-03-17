import { Box } from "@chakra-ui/react";
import React from "react";
import Post from "../post/Post";
import { Share } from "../share/Share";

export const Feed = () => {
  return (
    <Box flex="5.5" bgColor="#121212">
      <Box p="20px">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
      </Box>
    </Box>
  );
};
