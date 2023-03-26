import {
  Avatar,
  AvatarBadge,
  Box,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Users } from "../../dummmyData";
import Online from "../online/Online";
export const Rightbar = () => {
  return (
    <Box
      flex="3.5"
      bgColor="#121212"
      borderLeft="2px"
      borderLeftColor="gray.800"
      color="gray.500"
    >
      <Box p="20px 20px 0 10px">
        <Box display="flex" alignItems="center">
          <Image src="/assets/gift-box.png" ww="40px" h="40px" mr="10px" />
          <Text fontSize="15px" fontWeight="300">
            <b>Jane Doe</b> and <b>3 other friends</b> have a birthday today!
          </Text>
        </Box>
        <Image
          src="/assets/ad.webp"
          w="100%"
          borderRadius="10px"
          m="30px 0 30px 0"
          maxHeight="200px"
          objectFit="cover"
        />
        <Text fontSize="2xl" mb="10px" fontStyle="18px" fontWeight="500">
          Online
        </Text>
        <UnorderedList listStyleType="none" m="0" p="0">
          {Users.map((u)=>(
            <Online key={u.id} user={u} />
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};
