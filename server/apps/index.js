const express =  require("express")
const PORT = 5789
const app = express()
app.listen(PORT,()=>{
    console.log('server started at http://localhost:$(PORT)')
})