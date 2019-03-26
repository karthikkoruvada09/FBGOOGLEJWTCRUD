app={};
const schema=require('../lib/joi');
const Joi=require('joi');
const model=require('../model');


app.post=   async(req,res)=>{
    console.log(req.body)
        try{
            let result;
            try{
                result = await Joi.validate(req.body,schema);
                console.log(result);
            }catch(err){
                return  res.status(400).send({err});
            }
            const post=new model(result);
            console.log(post)
            const data=await post.save();
            const data1=await model.find({});
            res.status(200).send(data1);
        }catch(err){
           //  return   res.status(500).send({err});
            
        }
};



app.get=   async(req,res)=>{
    const data=await model.find({});
    res.status(200).send(data)
};


app.delete=   async(req,res)=>{
        await model.remove({_id:req.params.id});
        const data=await model.find({});
        res.status(200).send(data)
    
};



app.put=   async(req,res)=>{
        var id=req.body._id;
        delete req.body._id;  delete req.body.__v;
        try{
            let result;
            try{
                 result =Joi.validate(req.body,schema)
        }catch(err){                                                     //here the updated data is again validated against joi and after validated
                                                                            // that document is deletedand saved a new document with sane id
          return  res.status(400).send({err})
            }
           const post=new model(req.body);
           delete post._id;
           post._id=id;
           const remove=await model.remove({_id:post._id});
           const data=await model.insertMany([post]);
           const final=await model.find({});
           return res.status(200).send(final)

        }catch(err){
            return  res.status(500).send({err});

        }
       

        
 

};


module.exports=app;