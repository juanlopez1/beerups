const getMinDate = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const dateDay = date.getDate();
    return `${date.getFullYear()}-${month < 10 ? `0${month}` : month}-${dateDay < 10 ? `0${dateDay}` : dateDay}`;
};

export default getMinDate;
