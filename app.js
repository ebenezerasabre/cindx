const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const UserController = require('./controllers/UserController');
// const db = require('./db');

http.listen(1000, () => { console.log('ccindx server is running'); });



/** Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


/** Make index file is public folder absolute entry */
app.use(express.static(__dirname+'/public'));


/** Serve some static files */
app.get('/cintest', (req, res) => { res.sendFile(__dirname + '/static/test.html'); });


/** * ROUTES STARTS  */
app.use('/user', require('./routes/UserRoutes'));
app.use('/culprit', require('./routes/CulpritRoutes'));
app.use('/view', require('./routes/ViewRoutes'));
app.use('/emergency', require('./routes/EmergencyRoutes'));
app.use('/resolved', require('./routes/ResolvedRoutes'));
app.use('/issue', require('./routes/IssueRoutes'));
app.use('/comment', require('./routes/CommentRoutes'));

/** * ROUTES ENDS  */




