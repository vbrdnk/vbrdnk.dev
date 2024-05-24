import { Text } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import React from 'react';

type DateProps = {
  date: string;
};

const Date = ({ date }: DateProps): JSX.Element => {
  return (
    <time dateTime={date}>
      <Text fontWeight='bold' data-testid='date'>
        {format(parseISO(date), 'MMMM d, yyyy')}{' '}
      </Text>
    </time>
  );
};

export default Date;
