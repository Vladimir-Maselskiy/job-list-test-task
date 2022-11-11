import { Suspense, useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
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
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<JobList jobItems={jobItems} />} />
        <Route path="/movies" element={null} />
      </Routes>
    </Suspense>
  );
};
