export const filterHelper = (data, type, dataToFilter) => {
    console.log(data)
    const newData = [];
    if (dataToFilter.length === 0) {
        return data
    }
    for (let label of dataToFilter) {
        newData.push(...data.filter(item => item[type] === label))
    }
    // console.log(newData)
    return newData;
}
