import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsBookmark } from 'react-icons/bs';
import { getPostedDate } from 'utils/getPostedDate';
import { getRandomStars } from 'utils/getRandomStars';
import { NavLink, useLocation } from 'react-router-dom';

export const JobItem = ({ jobItem }) => {
  const location = useLocation();
  return (
    <li>
      <NavLink
        to={`/${jobItem.id}`}
        state={{ from: location }}
        className="flex px-4 py-6 rounded-lg mt-2 bg-[#ffffff] hover:cursor-pointer color-job-info "
      >
        <div className=" block shrink-0 w-75 h-75 relative rounded-full overflow-hidden">
          <img
            src={jobItem.pictures[0]}
            alt={jobItem.name}
            className="block w-full h-full"
          />
        </div>
        <div className="ml-6 max-w-lg shrink">
          <p className="font-bold text-xl text-color-job-title">
            {jobItem.title}
          </p>
          <p className="font-normal text-base text-color-job-info mt-2">
            Department name • {jobItem.name}
          </p>
          <div className="flex  mt-2 items-center">
            <FaMapMarkerAlt size="18px" className="fill-color-job-info" />
            <p className="font-normal text-base text-color-job-info ml-2">
              {jobItem.address}
            </p>
          </div>
        </div>
        <div className="flex flex-none relative items-center justify-center w-36 min-h-full ml-auto">
          {getRandomStars()}
        </div>
        <div className="flex flex-none relative items-end justify-end w-36 min-h-full ml-8">
          <BsBookmark
            size="32px"
            className="absolute top-0 right-0 fill-color-job-info"
          />
          <p className="font-normal text-base text-color-job-info">
            Posted {getPostedDate()}
          </p>
        </div>
      </NavLink>
    </li>
  );
};
