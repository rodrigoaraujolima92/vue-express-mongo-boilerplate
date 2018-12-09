import cookieParser from 'cookie-parser';
import {config} from './config';
import express from 'express';
import http from 'http';
import createError from 'http-errors';
import path from 'path';
import logger from 'morgan';
import {router} from './routes/routes';

const app = express();

const server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../Client/Resources/Public')));

app.use('/', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); 
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(config.server.port, () => console.log(`Listening on port ${config.server.port}`));
