import React from 'react';
import { TimeIcon } from '@chakra-ui/icons';
import { Text, Flex } from '@chakra-ui/react';

type ReadingTimeProps = {
  time: string;
};

const ReadingTime: React.FC<ReadingTimeProps> = ({ time }) => (
  <Flex align="center" mb={4}>
    <TimeIcon mr={2} color="gray.500" />
    <Text as="i" color="gray.500">
      <strong>{time}</strong>
    </Text>
  </Flex>
);

export default ReadingTime;
