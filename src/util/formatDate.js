// Added one in month, because January gives 0.
const formatDate = date => {
    const month = date.getMonth() + 1;
    return `${date.getFullYear()}-${month < 10 ? `0${month}` : month}-${date.getDate()}`;
};

export default formatDate;
