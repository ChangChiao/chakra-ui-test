import React from "react";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";
function Responsive() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box>
      <Box bg="green.200" w={{ base: "300px", md: "400px", lg: "500px" }}>
        This is a box
      </Box>
      <Text>
        {isMobile ? "This is a mobile device" : "This is a desktop device"}
      </Text>
    </Box>
  );
}

export default Responsive;
