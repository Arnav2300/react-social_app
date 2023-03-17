import { Box, Image, Avatar, Text, Icon, Img } from "@chakra-ui/react";
import { SlOptionsVertical } from "react-icons/sl";
import React from "react";

export default function Post() {
  return (
    <Box
      w="100%"
      borderRadius="10px"
      shadow="dark-lg"
      mt="30px"
      mb="30px"
      bgColor="#000000"
      color="gray.500"
    >
      <Box p="10px">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Avatar
              size="sm"
              name="Kent Dodds"
              src="/assets/avatars/Png/Artboards_Diversity_Avatars_by_Netguru-34.png"
              cursor="pointer"
            />
            <Text fontSize="15px" fontWeight="500" ml="10px" mr="10px">
              Arnav Saraswat
            </Text>
            <Text fontSize="12px">5 mins ago</Text>
          </Box>
          <Box>
            <Icon as={SlOptionsVertical} />
          </Box>
        </Box>
        <Box mt="20px" mb="20px">
          <Text>First post!!</Text>
          <Image
            src="/assets/test_image.jpg"
            mt="20px"
            w="100%"
            maxHeight="500px"
            objectFit="contain"
          />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Img
              src="/assets/thumbs-up.png"
              w="24px"
              h="24px"
              mr="5px"
              cursor="pointer"
            />
            <Img
              src="/assets/favourite.png"
              w="24px"
              h="24px"
              mr="5px"
              cursor="pointer"
            />
            <Text fontSize="15px">liked by 32 people</Text>
          </Box>
          <Box>
            <Text
              cursor="pointer"
              borderBottom="1px"
              borderBottomColor=""
              borderBottomStyle="dashed"
              fontSize="15px"
            >
              9 comments
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
