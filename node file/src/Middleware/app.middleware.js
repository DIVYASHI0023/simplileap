const  verifysignUpRequest=(req,res,next)=>{

    const {name,password,email}=req.body;

    if(!name){
        return res.status(400).send({message:"Name is not provided"})
    }
    if(!password){
        return res.status(400).send({message:"Password is not provided"})
    }
    if(!email){
        return res.status(400).send({message:"email is not provided"})
    }
    next()
}

module.exports={
    verifysignUpRequest
}