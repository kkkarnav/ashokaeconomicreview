export const getYear = () => {
  return new Date().getFullYear();
};

export const getSemester = () => {
  return (
    (new Date().getMonth() >= 8 ? "Monsoon" : "Spring") +
    " " +
    String(new Date().getFullYear())
  );
};
