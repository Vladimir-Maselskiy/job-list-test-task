import { JobItem } from 'components/JobItem/JobItem';
import { Pagination } from 'components/Pagination/Pagination';

export const JobList = ({ jobItems }) => {
  return (
    <div className="bg-color-background px-64 pt-7 pb-16 max-xl:px-16">
      <ul>
        {jobItems.map(jobItem => {
          return <JobItem key={jobItem.id} jobItem={jobItem} />;
        })}
      </ul>
      <Pagination />
    </div>
  );
};
