import express from 'express';
const app=express();
const PORT=process.env.PORT||5000;
app.get('/',(req,resp)=>{
  resp.send(`Server is running on PORT ${process.env.PORT}`)
})
app.get('/jokes',(req,resp)=>{
const joke=[{
  id:1,
  msg:"HI"
},{
  id:2,
  msg:"HELLO"
}]
resp.send(joke);
})
app.listen(PORT,()=>
  console.log(`Server is running on PORT ${PORT}`)
)
