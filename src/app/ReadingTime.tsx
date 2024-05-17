'use client';

import React from 'react';
import { TimeIcon } from '@chakra-ui/icons';
import { Text, Flex } from '@chakra-ui/react';

type ReadingTimeProps = {
  time: string;
};

const ReadingTime = ({ time }: ReadingTimeProps): JSX.Element => (
  <Flex align="center" mb={4}>
    <TimeIcon mr={2} color="gray.600" />
    <Text color="gray.600" fontWeight="600">
      {time}
    </Text>
  </Flex>
);

export default ReadingTime;
