export const getNormalViewSalary = salaryInSrting => {
  const [minSalaryInString, maxSalaryInString] = salaryInSrting.split('-');
  return `€  ${parseInt(minSalaryInString)} 000 - ${parseInt(
    maxSalaryInString
  )} 000`;
};
