const model = require("../model/schema");

const homePage = async (req, res) => {
  const data = await model.find(req.query);
  res.json({ data });
};

const aboutPage = async (req, res) => {
  //declare variables
  const { name, address, rollno, classyear, sort, select } = req.query;
  const nameObject = {};

  //for naming purposes only case-insensitive
  if (name) {
    //use regex for case sensitive
    nameObject.name = { $regex: name, $options: "i" };
  }

  //address field
  if (address) {
    nameObject.address = { $regex: address, $options: "i" };
  }
  if (rollno) {
    nameObject.rollno = rollno;
  }
  if (classyear) {
    nameObject.classyear = classyear;
  }

  let apiData = model.find(nameObject, { _id: 0, __v: 0 });
  let page = Number(req.query.page);
  let limit = Number(req.query.limit) || 2;

  let skip = (page - 1) * limit;

  //pagginations
  apiData = apiData.skip(skip).limit(limit);

  if (select) {
    // let sortFix = select.replace(",", " "); they are not work for some time so we can use this method
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  //for sorting purposes
  if (sort) {
    // let sortFix = sort.replace(",", " "); they are not work for some time so we can use this method
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }
  const data = await apiData;

  res.json({ data, no_Of_Data: data.length });
};

module.exports = { homePage, aboutPage };
