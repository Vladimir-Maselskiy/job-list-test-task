import { JobItem } from 'components/JobItem/JobItem';

export const JobList = ({ jobItems }) => {
  return (
    <ul className="">
      {jobItems.map(jobItem => {
        return <JobItem key={jobItem.id} jobItem={jobItem} />;
      })}
    </ul>
  );
};
