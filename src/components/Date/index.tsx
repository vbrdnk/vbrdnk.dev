import React from 'react';
import dayjs from 'dayjs';

interface DateProps {
  date: string;
}

const Date: React.FC<DateProps> = ({ date }) => {
  return <time dateTime={date}>{dayjs(date).format('MMMM D, YYYY')}</time>;
};

export default Date;
