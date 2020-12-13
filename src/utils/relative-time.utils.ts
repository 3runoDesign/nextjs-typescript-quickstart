import formatDistance from 'date-fns/formatDistance';

export const relativeTime = (date: Date): string => {
  return `${formatDistance(Date.now(), date)} ago`;
};
