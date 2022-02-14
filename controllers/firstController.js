/**
 * 
 *  
 * Created by shauvik chakroborty 
 * LIcensed : ISC
 */

//CRUD operations


/**
 * 
 *GET request for fetching data without **args** 
 * 
 */
const getData = async (req, res) => {
  res.status(200).json({ data: "hello form get controller!!!" });
};

/**
 * fill this up yourself with params
 */

//POST Request
// create this controller yourself
const setData = async (req, res) => {

    //await with database request => will be done next day
    res.status(200).json({ data: "hello form get controller!!!" });
  };

const firstController = {
  getData,
};

export default firstController;
