import mongoose,{Schema} from "mongoose";


const ContactUsSchema =new Schema({
     name:{type:String, required:true},
     email:{type:String,required:true,match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
     message:{type:String,required:true}
     


},{
     versionKey:false,
})

const ContactUs = mongoose.model('ContactUs',ContactUsSchema);

export default ContactUs;