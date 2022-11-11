import { AiFillStar } from 'react-icons/ai';

export const getRandomStars = () => {
  let randomNumber = Math.floor(Math.random() * 6);
  const stars = [];
  while (randomNumber > 0) {
    stars.push(
      <AiFillStar
        size="22px"
        viewBox="200 0 650 900"
        className="fill-color-job-info"
      />
    );
    randomNumber -= 1;
  }

  return (
    <ul className="flex">
      {stars.map((star, i) => (
        <li key={i}>{star}</li>
      ))}
    </ul>
  );
};
