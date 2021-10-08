import React from 'react';

import { Box, Link as ChakraLink, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

type MetricCardProps = {
  header: string;
  link: string;
  metric: number;
};

const MetricCard: React.FC<MetricCardProps> = ({ header, link, metric }) => {
  return (
    <Box w={['sm', '17.5rem']} maxW="100%" borderWidth="1px" borderRadius="lg" p={4} mb={{ base: 4, md: 0}}>
      <ChakraLink aria-label={header} target="_blank" rel="noopener noreferrer" href={link}>
        {header}
        <ExternalLinkIcon mx="2px" />
      </ChakraLink>
      <Text mt={2} fontWeight="bold" fontSize="4xl">
        {metric > 0 ? metric.toLocaleString() : '-'}
      </Text>
    </Box>
  );
};

export default MetricCard;
