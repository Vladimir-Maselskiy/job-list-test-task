import { GoogleMapComponent } from 'components/GoogleMap/GoogleMap';
import { Pagination } from 'components/Pagination/Pagination';
import { BsBookmark, BsFillShareFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import { getNormalViewSalary } from 'utils/getNormalViewSalary';
import { getResponsopilities } from 'utils/getResponsopilities';

export const JobDetails = ({ jobItems }) => {
  const navigate = useNavigate();

  const { id } = useParams();
  const currentJob = jobItems.find(job => job.id === id);

  const onBackButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="w-[1920px] pl-[78px] pt-[65px] pb-[153px] max-[1650px]:w-full  max-xl:pr-[78px] max-md:px-[15px] max-md:pt-[24px]">
      <div className="flex  max-xl:flex-col ">
        <div className="w-[852px]  max-xl:w-auto">
          <div className=" pr-[51px]">
            <div className="flex border-b-2  border-gray-300 max-md:flex-col max-md:relative max-md:pb-[10px]">
              <p className="font-bold text-[28px] text-color-job-title">
                Job Details
              </p>
              <div className="flex justify-between items-center ml-auto  text-color-job-title text-lg font-normal w-[257px] max-md:ml-0 max-md:absolute max-md:-bottom-10">
                <BsBookmark
                  size={16}
                  className="fill-color-job-title hover:cursor-pointer"
                />
                <p className=" ">Save to my list</p>
                <BsFillShareFill
                  size={16}
                  className="fill-color-job-title hover:cursor-pointer"
                />
                <p className=" ">Share</p>
              </div>
            </div>
          </div>
          <div className=" mt-[39px]">
            <button className="py-[18px] px-[30px] bg-color-background-button text-[#FFFFFF] rounded-lg max-md:hidden">
              Apply now
            </button>
            <div className="flex justify-between mt-[32px] max-md:block max-md:mt-[62px]">
              <p className="w-2/3 text-color-job-title text-lg font-bold text-2xl max-md:w-full ">
                {currentJob.title}
              </p>
              <div className="max-md:flex max-md:justify-between max-md:items-center">
                <p className=" hidden text-color-job-info text-lg font-normal  mt-[7px] max-md:block">
                  Posted 2 days ago
                </p>
                <div className="max-md:flex max-md:flex-col">
                  <p className="w-[213px] text-color-job-title text-lg font-bold text-xl">
                    {getNormalViewSalary(currentJob.salary)}
                  </p>
                  <p className="w-[213px] text-color-job-title text-lg font-normal ">
                    Brutto, per year
                  </p>
                </div>
              </div>
            </div>
            <p className=" text-color-job-info text-lg font-normal  mt-[7px] max-md:hidden">
              Posted 2 days ago
            </p>
            <p className=" text-color-job-title text-lg font-normal  mt-[7px]">
              {currentJob.description}
            </p>
            <h3 className=" text-color-job-title text-xl font-bold  mt-[40px]">
              Responsopilities
            </h3>
            <p className=" text-color-job-title text-lg font-normal  mt-[7px]">
              {getResponsopilities()}
            </p>
            <h3 className=" text-color-job-title text-xl font-bold  mt-[40px]">
              Compensation & Benefits:{' '}
            </h3>
            <p className=" text-color-job-title text-lg font-normal  mt-[14px]">
              Our physicians enjoy a wide range of benefits, including:
            </p>
            <div className="relative max-md:flex max-md:items-center ">
              <div className="w-[9px] h-[9px] bg-[#384564a1] absolute -left-4 top-2.5 max-md:static "></div>
              <p className="max-md:ml-[15px]">
                Very competitive compensation package with bonuses
              </p>
            </div>
            <div className="relative max-md:flex max-md:items-center">
              <div className="w-[9px] h-[9px] bg-[#384564a1] absolute -left-4 top-2.5 max-md:static"></div>
              <p className="max-md:ml-[15px]">
                Medical, Dental, and Vision Insurance
              </p>
            </div>
            <div className="relative max-md:flex max-md:items-center">
              <div className="w-[9px] h-[9px] bg-[#384564a1] absolute -left-4 top-2.5 max-md:static"></div>
              <p className="max-md:ml-[15px]">
                Occurrence-based Malpractice Coverage
              </p>
            </div>
            <div className="relative max-md:flex max-md:items-center">
              <div className="w-[9px] h-[9px] bg-[#384564a1] absolute -left-4 top-2.5 max-md:static"></div>
              <p className="max-md:ml-[15px]">
                Short-term and Long-term Disability Insurance
              </p>
            </div>
            <div className="relative">
              <p>and life insurance</p>
            </div>
            <button className="py-[18px] px-[30px] bg-color-background-button text-[#FFFFFF] rounded-lg mt-[40px] max-md:block max-md:mx-auto">
              Apply now
            </button>
          </div>
          <div className="max-md:flex max-md:flex-col">
            <div className="mt-[86px] max-md:order-2">
              <p className="font-bold text-[28px] text-color-job-title max-md:border-b-2  max-md:border-gray-300  max-md:pb-[10px]">
                Additional info
              </p>
              <div className="pr-[70px]">
                <div className="border-b  border-gray-300"></div>
              </div>
              <p className="font-normal text-lg text-color-job-title mt-[15px]">
                Employment type
              </p>
              <ul className="flex mt-[10px] gap-[8px]">
                {currentJob.employment_type.map(type => {
                  return (
                    <li key={type} className="w-1/3">
                      <button className="py-[17px] w-[222px] border border-[#55699e4c] bg-[#a1b1db50] text-[#55699E] rounded-lg max-md:w-full">
                        {type}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <p className="font-normal text-lg text-color-job-title mt-[15px]">
                Benefits
              </p>
              <ul className="flex mt-[10px] gap-[8px]">
                {currentJob.benefits.map(type => {
                  return (
                    <li key={type} className="w-1/3">
                      <button className="py-[17px] w-[222px] border border-[#FFCF00] bg-[#ffcf0026] text-[#988B49] rounded-lg max-md:w-full">
                        {type}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mt-[86px] max-md:order-1">
              <p className="font-bold text-[28px] text-color-job-title max-md:border-b-2  max-md:border-gray-300  max-md:pb-[10px]">
                Attached images
              </p>
              <div className="mt-[70px]">
                <div className="border-b  border-gray-300"></div>
              </div>
              <ul className="flex mt-[10px] gap-[8px]">
                {currentJob.pictures.map((imgRef, i) => {
                  return (
                    <li key={i} className="block w-[209px] h-[115px]">
                      <img
                        src={imgRef}
                        alt={imgRef}
                        className="w-full h-full"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <button
            className="relative py-[18px] pl-[52px] pr-[26px] ml-[239px] text-xs font-semibold bg-[#38456422] text-color-job-title rounded-lg mt-[74px] max-xl:hidden"
            onClick={onBackButtonClick}
          >
            RETURN TO JOB BOARD
            <IoIosArrowBack className="absolute left-6 top-5" />
          </button>
        </div>
        <div className="flex w-1/2 justify-center max-xl:w-full max-xl:flex-col max-xl:items-center max-xl:mt-[63px]">
          <p className="font-bold text-[28px] text-color-job-title w-full max-xl:border-b-2  max-xl:border-gray-300  max-xl:pb-[10px] xl:hidden">
            Contacts
          </p>
          <div className="relative w-[402px] h-[436px] rounded-lg overflow-hidden max-xl:mt-[25px]">
            <div className="relative w-[402px] h-1/2 bg-[#3A4562] pl-[62px] pr-[63px] pt-[31px]">
              <div className="absolute w-[280px] h-[280px] rounded-full bg-[#2A3047] -top-3 -left-20 pointer-events-none"></div>
              <div className="absolute text-[#E7EAF0] z-20 w-[277px] font-bold text-xl">
                <h4>Department name.</h4>
                <p>{currentJob.name}.</p>
                <div className="flex items-center justify-start font-normal text-lg">
                  <FaMapMarkerAlt className="fill-[#aaaaaa]" />
                  <p className="ml-[8px] mt-[8px]">{currentJob.address}</p>
                </div>
                <p className="mt-[8px] font-normal text-lg">
                  {currentJob.phone}
                </p>
                <p className="font-normal text-lg">{currentJob.email}</p>
              </div>
            </div>
            <GoogleMapComponent location={currentJob.location} />
            <div className="absolute w-full h-full bg-[#384564a1] top-0 left-0 pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};
