const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
    'elliot' : {
        'outfit': 'black hoodie',
        'condition': 'paranoia',
        'speciality': 'hacking'
},
    'mr_robot' : {
        'outfit': 'robot jacket',
        'condition': 'stable',
        'speciality': 'hacking'
},
     'tyrell' : {
        'outfit': 'black suit',
        'condition': 'scatterd',
        'job': 'cybersecurity at E-Corp'
},
    'unknown' : {
       'outfit': 'unknown',
       'condition': 'unknown',
       'job': 'unknown'
}
}
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})


app.get('/api/:name',(req,res)=>{
    const charactersName = req.params.name.toLocaleLowerCase()
    if( characters[charactersName] ){
        res.json(characters[charactersName])
    }else{
        res.json(characters['unknown'])
    }

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It! `)
})
