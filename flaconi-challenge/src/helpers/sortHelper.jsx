export const sortData = (value, data) => {
  switch (value) {
    case 'namea-z':
      return data.sort((a, b) => {
        if (a.brand < b.brand) {
          return -1;
        }
        if (a.brand > b.brand) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });

    case 'namez-a':
      return data.sort((a, b) => {
        if (a.brand > b.brand) {
          return -1;
        }
        if (a.brand < b.brand) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });

    case 'rating':
      return data.sort((a, b) => {
        if (a.rating > b.rating) {
          return -1;
        }
        if (a.rating < b.rating) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });

    default:
      return data;
  }
};
