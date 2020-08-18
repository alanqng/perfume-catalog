export const filterHelper = (data, activeFilters) => {
  let newData = [];
  if (activeFilters.length === 0) {
    return data;
  }
  const brands = activeFilters.filter(filter => filter.type === 'brand');
  const types = activeFilters.filter(filter => filter.type === 'type');

  newData = data.filter(item => {
    for (let filter of brands) {
      if (item[filter.type] === filter.name) {
        return true;
      }
    }
    return false;
  });

  if (types.length > 0) {
    newData = (brands.length > 0 ? newData : data).filter(item => {
      for (let filter of types) {
        if (item[filter.type] === filter.name) {
          return true;
        }
      }
      return false;
    });
  }
  return newData;
};
