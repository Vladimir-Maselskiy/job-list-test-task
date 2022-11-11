import { JobItem } from 'components/JobItem/JobItem';

export const JobList = ({ jobItems }) => {
  return (
    <ul className="bg-color-background px-64 pt-7 pb-16">
      {jobItems.map(jobItem => {
        return <JobItem key={jobItem.id} jobItem={jobItem} />;
      })}
    </ul>
  );
};
