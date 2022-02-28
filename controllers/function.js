//This is file is used to create login b/w model and view no need to define headers just normally create functions 
// to run the program.

const db= require('../model/user');

//************************Signup login*************************** */

const signup =async(req,res)=>{
    const data= new db({
        f_name:req.body.fname,
        l_name:req.body.lname,
        phone_no:req.body.p_no,
        email:req.body.email_id

    })

    try {await data.save().then((result)=>{
        res.status(200).json(result);
        console.warn("new user added!..",result);
    })
        
    } catch (error) {
        console.log(error);
        
    }
};
module.exports={signup}