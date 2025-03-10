import express from "express"
import userRoutes from "./src/routes/usersRoutes.js"

const app = express()
const port = 3000
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})

app.use(express.json())
app.use('/auth', userRoutes )

export default app