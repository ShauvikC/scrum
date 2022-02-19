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

import { First } from "../models/firstControllerModel.js";

const getData = async (req, res) => {
  const result = await First.findById(req.params.id);
  res.status(200).json({ data: result });
};

/**
 * fill this up yourself with params
 */

//POST Request


const setData = async (req, res) => {
  try {
    const payload = req.body;
    console.log(req.body);
    // const result = new First(payload);
    // if (await result.save()) {
    //   res.status(200).json({ data: `User created succesfully` });
    // }

    res.status(200).json({result:"hello"})

    /**
     * Change the schema
     */
  } catch (e) {
    res.status(500).json({ data: `Age` });
  }
};


{/* <button onClick={handles}></button>
import basePath from 'basepath.js'
const set =(id)=>{
  return await axios.get(`${basePath}/${id}`)
}

const handles=()=>{
  const someres=await set(`(new URLparams(window.location.search)).get("id")`) //{ data: `Age` }

}

if(someresult.data === "Age"){
  cogoToast.error("Please Provide age > 100")
} */}

// PUT Request

const putData = async (req, res) => {
  try{
    const result = await First.updateOne(req.params.id,
      {
        $set:{
            contact : "8240154659"
        }
      });
      res.status(200).json({data:`data updated`})
  }catch(err){
    res.status(500).json({error_in :err});
  }

};

// delete Request

const deleteData = async (req, res) => {
  res.status(200).json({ data: "Hello from delete controller!!!" });
};

const firstController = {
  getData,
  setData,
  putData,
  deleteData,
};

export default firstController;

