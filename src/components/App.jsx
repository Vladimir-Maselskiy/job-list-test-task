import { useState } from 'react';
import { useEffect } from 'react';
import { getJobItems } from 'utils/getJobItems';
import { JobList } from './JobList/JobList';

export const App = () => {
  const [jobItems, setJobItems] = useState([]);

  useEffect(() => {
    getJobItems().then(data => {
      setJobItems(data);
    });
  }, []);

  return (
    <div className="border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
      <JobList jobItems={jobItems} />
    </div>
  );
};
