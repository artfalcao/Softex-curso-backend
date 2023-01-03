const express = require('express')
const app = express()
  
app.get(req, res) => {
      
  const responseData = {
      message:"Hello!!",
    articleData:{
        articleName: "How to send JSON response from NodeJS",
        category:"NodeJS",
        status: "published"
    }
  }
    
  const jsonContent = JSON.stringify(responseData)
  res.send(jsonContent)
};
    
server.listen(3000, () => {
    console.log("Server is Listening at Port 3000!")
})
