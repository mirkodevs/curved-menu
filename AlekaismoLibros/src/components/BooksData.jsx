import dataBooks from "../data/books.json";

function dataArray(propString) {

  const propsArray = propString.split(".");
  const uniqueValues = [];



  dataBooks.forEach((book) => {

    let value = book;
    for (const prop of propsArray) {
      value = value[prop];
    }




    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
    }
  });
  console.log(propString, uniqueValues)
  return uniqueValues;
}

export default dataArray;
