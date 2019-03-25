const Joi=require('joi');

    module.exports=Joi.object().keys({
        name: Joi.string().max(10).min(5).required(),
        pass :Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
        city :Joi.string().required(),
        phnno :Joi.string().required(),
        gender :Joi.string().required(),
            shuttle :Joi.boolean().allow('', null).default(false),
            cricket :Joi.boolean().allow('', null).default(false),
            basketball :Joi.boolean().allow('', null).default(false),
    })