import express          from 'express';
import { createServer } from 'http';


const HOST='localhost';
const PORT=3001;
const output=`${__dirname}/index.html`;
const app=express();
const server=createServer(app);

server.listen(PORT, HOST, ()=>{
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

app.get(`/`, (req, res)=>{
  res.sendFile(output)
});