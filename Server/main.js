const express = require('express');
const moviesRouter = require('./routers/moviesRouter');
const membersRouter = require('./routers/membersRouter');
const subscriptionsRouter = require('./routers/subscriptionsRouter');
const cors = require('cors');

let app = express();

app.use(cors());

app.use(express.json());

require('./configs/database');

app.use('/api/movies', moviesRouter);
app.use('/api/members', membersRouter);
app.use('/api/subscriptions', subscriptionsRouter);

app.listen(8000);