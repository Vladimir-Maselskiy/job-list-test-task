import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsBookmark } from 'react-icons/bs';
import { getPostedDate } from 'utils/getPostedDate';
import { getRandomStars } from 'utils/getRandomStars';
export const JobItem = ({ jobItem }) => {
  console.log(jobItem);
  return (
    <li className="flex border-orange-300 border-2 px-4 py-8">
      <div className="border-green-300 border-2 block w-75 h-75 rounded-full overflow-hidden">
        <img src={jobItem.pictures[0]} className="block w-full h-full" />
      </div>
      <div className="ml-6">
        <p className="font-bold text-xl text-color-job-title">
          {jobItem.title}
        </p>
        <p className="font-normal text-base text-color-job-info mt-2">
          Department name • {jobItem.name}
        </p>
        <div className="flex mt-2 items-center">
          <FaMapMarkerAlt size="18px" />
          <p className="font-normal text-base text-color-job-info ml-2">
            {jobItem.address}
          </p>
        </div>
      </div>
      <div className="flex relative items-center justify-center w-36 min-h-full ml-auto">
        {getRandomStars()}
      </div>
      <div className="flex relative items-end justify-end w-36 min-h-full ml-8">
        <BsBookmark size="32px" className="absolute top-0 right-0" />
        <p className="font-normal text-base text-color-job-info">
          Posted {getPostedDate()}
        </p>
      </div>
    </li>
  );
};
