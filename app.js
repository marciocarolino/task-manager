const express = require('express');
const app = express();

const port = 3000;

const tasks = require('./routes/tasks-routes');

//middleware
app.use(express.json());


//route 
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
    console.log(`server is listening on port ${port}....`);
});

