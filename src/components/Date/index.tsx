import React from 'react';
import { format, parseISO } from 'date-fns';
import { Text } from '@chakra-ui/react';

type DateProps = {
  date: string;
};

const Date: React.FC<DateProps> = ({ date }) => {
  return (
    <time dateTime={date}>
      <Text fontWeight="bold">{format(parseISO(date), 'MMMM d, yyyy')} </Text>
    </time>
  );
};

export default Date;
