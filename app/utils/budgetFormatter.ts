export const budgetFormatter = (budget: number) => {
  const formatedNumber = budget
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return formatedNumber;
};
