export const getDate = function () {
  return new Date();
};

export const addCopyRightYear = function () {
  const year = getDate().getFullYear();
  const insertTarget = document.getElementById('current-year');
  insertTarget.innerHTML = year;
};
