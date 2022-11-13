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
        className="flex px-4 py-6 rounded-lg mt-2 bg-[#ffffff] hover:cursor-pointer color-job-info max-md:bg-[#EFF0F5]"
      >
        <div className=" block shrink-0 w-75 h-75 relative rounded-full overflow-hidden max-md:w-[66px] max-md:h-[66px]">
          <img
            src={jobItem.pictures[0]}
            alt={jobItem.name}
            className="block w-full h-full"
          />
        </div>
        <div className="flex relative grow-[2] w-fit max-md:flex-col max-md:pl-[19px]">
          <div className="ml-6 max-w-lg shrink max-md:order-2 max-md:ml-0 max-md:mt-[17px]">
            <p className="font-bold text-xl text-color-job-title max-md:font-normal max-md:text-lg">
              {jobItem.title}
            </p>
            <p className="font-normal text-base text-color-job-info mt-2 max-md:text-base">
              Department name • {jobItem.name}
            </p>
            <div className="flex  mt-2 items-center max-md:text-base">
              <FaMapMarkerAlt size="18px" className="fill-color-job-info" />
              <p className="font-normal text-base text-color-job-info ml-2 max-md:text-base">
                {jobItem.address}
              </p>
            </div>
          </div>
          <div className="flex flex-none relative items-center justify-center w-36 min-h-full ml-auto max-md:order-1 max-md:block max-md:min-h-[24px] max-md:ml-0">
            {getRandomStars()}
          </div>
          <div className="flex flex-none relative items-end justify-end w-36 min-h-full ml-8 max-md:min-h-[24px] max-md:absolute max-md:top-o max-md:right-0">
            <BsBookmark
              size="32px"
              className="absolute top-0 right-0 fill-color-job-info max-md:hidden"
            />
            <p className="font-normal text-base text-color-job-info">
              Posted {getPostedDate()}
            </p>
          </div>
        </div>
      </NavLink>
    </li>
  );
};
