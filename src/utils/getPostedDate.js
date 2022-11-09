export const getPostedDate = () => {
  const randomNumber = Math.floor(Math.random() * 7);
  if (randomNumber === 1) return `${randomNumber} day ago`;
  if (randomNumber > 0) return `${randomNumber} days ago`;
  return 'today';
};
