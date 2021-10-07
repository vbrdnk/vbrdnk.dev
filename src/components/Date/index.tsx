import React from 'react';
import { format, parseISO } from 'date-fns';

type DateProps = {
  date: string;
};

const Date: React.FC<DateProps> = ({ date }) => {
  return <time dateTime={date}>{format(parseISO(date), 'MMMM d, yyyy')}</time>;
};

export default Date;
