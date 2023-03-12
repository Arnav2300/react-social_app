import {
  Box,
  ListItem,
  UnorderedList,
  Text,
  Icon,
  Divider,
  Button,
  Avatar,
  sx,
} from "@chakra-ui/react";
import {
  ImRss,
  ImBubble,
  ImFilm,
  ImUsers,
  ImBookmarks,
  ImQuestion,
  ImBook,
  ImBriefcase,
  ImTicket,
} from "react-icons/im";
import React from "react";

export const Sidebar = () => {
  return (
    <Box
      flex="3.5"
      h="calc(100vh - 50px)"
      bg="#121212"
      overflowY="scroll"
      sx={{
        '&::-webkit-scrollbar': {
          width: "4px",
        },
        '&::-webkit-scrollbar-track': {
          width: "6px",
        },
        '&::-webkit-scrollbar-thumb': {
          background:"rgb(134,243,99)",
          background: "linear-gradient(180deg, rgba(134,243,99,1) 0%, rgba(58,233,218,1) 100%)",
          borderRadius: "24px",
        },
      }}
    >
      <Box p="20px">
        <UnorderedList p="0" m="0" listStyleType={"none"} color="gray.500">
          <ListItem display="flex" alignItems="center" marginBottom="20px">
            <Icon as={ImRss} mr="15px" />
            <Text>Feed</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" marginBottom="20px">
            <Icon as={ImBubble} mr="15px" />
            <Text>Chats</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" marginBottom="20px">
            <Icon as={ImFilm} mr="15px" />
            <Text>Videos</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" marginBottom="20px">
            <Icon as={ImUsers} mr="15px" />
            <Text>Groups</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" marginBottom="20px">
            <Icon as={ImBookmarks} mr="15px" />
            <Text>Bookmarks</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" marginBottom="20px">
            <Icon as={ImQuestion} mr="15px" />
            <Text>Questions</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" marginBottom="20px">
            <Icon as={ImBriefcase} mr="15px" />
            <Text>Jobs</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" marginBottom="20px">
            <Icon as={ImTicket} mr="15px" />
            <Text>Events</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" marginBottom="20px">
            <Icon as={ImBook} mr="15px" />
            <Text>Courses</Text>
          </ListItem>
        </UnorderedList>
        <Button variant="outline" colorScheme="gray" w="150px" p="10px">
          Show More
        </Button>
        <Divider orientation="horizontal" mt="20px" mb="20px" />
        <UnorderedList listStyleType="none" p="0" m="0">
          <ListItem display="flex" alignItems="center" mb="15px">
            <Avatar
              size="sm"
              name="Kent Dodds"
              src="/assets/avatars/Png/Artboards_Diversity_Avatars_by_Netguru-33.png"
              cursor="pointer"
            />
            <Text color="gray.300">Jane Doe</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" mb="15px">
            <Avatar
              size="sm"
              name="Kent Dodds"
              src="/assets/avatars/Png/Artboards_Diversity_Avatars_by_Netguru-33.png"
              cursor="pointer"
            />
            <Text color="gray.300">Jane Doe</Text>
          </ListItem>
          <ListItem display="flex" alignItems="center" mb="15px">
            <Avatar
              size="sm"
              name="Kent Dodds"
              src="/assets/avatars/Png/Artboards_Diversity_Avatars_by_Netguru-33.png"
              cursor="pointer"
            />
            <Text color="gray.300">Jane Doe</Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};
