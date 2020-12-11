import { Box, Flex } from "@chakra-ui/react";
import { Pie, Bar } from "../components";

export const ChartsGroup = ({ label }: { label: string }) => {
  return (
    <Flex>
      <Box h="90vh" w="100%">
        <h2>{label} allocations</h2>
        <Pie />
      </Box>
      <Box h="90vh" w="100%">
        <h2>{label} profitability</h2>
        <Bar />
      </Box>
    </Flex>
  );
};
