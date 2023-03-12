import React from "react";
import { Topbar } from "../../components/topbar/Topbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Feed } from "../../components/feed/Feed";
import { Rightbar } from "../../components/rightbar/Rightbar";
import { Flex } from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <Topbar />
      <Flex w="100%">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Flex>
    </>
  );
};
