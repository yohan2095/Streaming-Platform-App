const express = require('express');
const moviesRouter = require('./routers/moviesRouter');
const membersRouter = require('./routers/membersRouter');
const subscriptionsRouter = require('./routers/subscriptionsRouter');
const usersRouter = require('./routers/usersRouter');
const authRouter = require('./routers/authRouter');
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express();


app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./configs/database');

app.use('/api/movies', moviesRouter);
app.use('/api/members', membersRouter);
app.use('/api/subscriptions', subscriptionsRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

app.listen(8000);