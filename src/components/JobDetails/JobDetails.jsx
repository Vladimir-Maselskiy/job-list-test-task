import { GoogleMapComponent } from 'components/GoogleMap/GoogleMap';
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

  console.log(currentJob);

  return (
    <div className="flex w-[1920px] pl-[78px] pt-[65px] pb-[153px]">
      <div className="w-[852px]  ">
        <div className=" pr-[51px]">
          <div className="flex border-b-2  border-gray-300">
            <p className="font-bold text-[28px] text-color-job-title">
              Job Details
            </p>
            <div className="flex justify-between items-center ml-auto  text-color-job-title text-lg font-normal w-[257px]">
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
          <button className="py-[18px] px-[30px] bg-color-background-button text-[#FFFFFF] rounded-lg">
            Apply now
          </button>
          <div className="flex justify-between mt-[32px]">
            <p className="w-2/3 text-color-job-title text-lg font-bold text-2xl">
              {currentJob.title}
            </p>
            <div>
              <p className="w-[213px] text-color-job-title text-lg font-bold text-xl">
                {getNormalViewSalary(currentJob.salary)}
              </p>
              <p className="w-[213px] text-color-job-title text-lg font-normal ">
                Brutto, per year
              </p>
            </div>
          </div>
          <p className=" text-color-job-info text-lg font-normal  mt-[7px]">
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
          <div className="relative">
            <div className="w-[9px] h-[9px] bg-[#384564a1] absolute -left-4 top-2.5"></div>
            <p>Very competitive compensation package with bonuses</p>
          </div>
          <div className="relative">
            <div className="w-[9px] h-[9px] bg-[#384564a1] absolute -left-4 top-2.5"></div>
            <p>Medical, Dental, and Vision Insurance</p>
          </div>
          <div className="relative">
            <div className="w-[9px] h-[9px] bg-[#384564a1] absolute -left-4 top-2.5"></div>
            <p>Occurrence-based Malpractice Coverage</p>
          </div>
          <div className="relative">
            <div className="w-[9px] h-[9px] bg-[#384564a1] absolute -left-4 top-2.5"></div>
            <p>Short-term and Long-term Disability Insurance</p>
          </div>
          <div className="relative">
            <p>and life insurance</p>
          </div>
          <button className="py-[18px] px-[30px] bg-color-background-button text-[#FFFFFF] rounded-lg mt-[40px]">
            Apply now
          </button>
        </div>
        <div className="mt-[86px]">
          <p className="font-bold text-[28px] text-color-job-title">
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
                <li key={type}>
                  <button className="py-[17px] w-[222px] border border-[#55699e4c] bg-[#a1b1db50] text-[#55699E] rounded-lg">
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
                <li key={type}>
                  <button className="py-[17px] w-[222px] border border-[#FFCF00] bg-[#ffcf0026] text-[#988B49] rounded-lg">
                    {type}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-[86px]">
          <p className="font-bold text-[28px] text-color-job-title">
            Attached images
          </p>
          <div className="mt-[70px]">
            <div className="border-b  border-gray-300"></div>
          </div>
          <ul className="flex mt-[10px] gap-[8px]">
            {currentJob.pictures.map((imgRef, i) => {
              return (
                <li key={i} className="block w-[209px] h-[115px]">
                  <img src={imgRef} alt={imgRef} className="w-full h-full" />
                </li>
              );
            })}
          </ul>
        </div>
        <button
          className="relative py-[18px] pl-[52px] pr-[26px] ml-[239px] text-xs font-semibold bg-[#38456422] text-color-job-title rounded-lg mt-[74px]"
          onClick={onBackButtonClick}
        >
          RETURN TO JOB BOARD
          <IoIosArrowBack className="absolute left-6 top-5" />
        </button>
      </div>
      <div className="flex w-1/2 justify-center">
        <div className="relative w-[402px] h-[436px] rounded-lg overflow-hidden">
          <div className="relative w-[402px] h-1/2 bg-[#3A4562] pl-[62px] pr-[63px] pt-[31px]">
            <div className="absolute w-[280px] h-[280px] rounded-full bg-[#2A3047] -top-3 -left-20 pointer-events-none"></div>
            <div className="absolute text-[#E7EAF0] z-20 w-[277px] font-bold text-xl">
              <h4>Department name.</h4>
              <p>{currentJob.name}.</p>
              <div className="flex items-center justify-start font-normal text-lg">
                <FaMapMarkerAlt className="fill-[#aaaaaa]" />
                <p className="ml-[8px] mt-[8px]">{currentJob.address}</p>
              </div>
              <p className="mt-[8px] font-normal text-lg">{currentJob.phone}</p>
              <p className="font-normal text-lg">{currentJob.email}</p>
            </div>
            "
          </div>
          <GoogleMapComponent location={currentJob.location} />
          <div className="absolute w-full h-full bg-[#384564a1] top-0 left-0 pointer-events-none z-10"></div>
        </div>
      </div>
    </div>
  );
};
