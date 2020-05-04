import express, { Application } from 'express';
import path from 'path';
import logger from 'morgan';
import sassMiddleware from 'node-sass-middleware';
import { exampleRouter, homeRouter } from './routes';
import { db } from './config/db';

export default class Server {
  readonly port: number;
  public app: Application;
  /**
   * Server's constructor.
   * It takes a number as parameter.
   * It cannot take any other type else the project won't compile
   */
  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.setConfig();
  }

  private setConfig(): void {
    // view engine setup
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'hbs');
    // morgan logger
    this.app.use(logger('dev'));
    // express body parser
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    // compile sass
    this.app.use(
      sassMiddleware({
        src: path.join(__dirname, 'public'),
        dest: path.join(__dirname, 'public'),
        indentedSyntax: false, // true = .sass and false = .scss
        sourceMap: true,
      }),
    );
    // use assets from public folder
    this.app.use(express.static(path.join(__dirname, 'public')));
    // use routes
    this.app.use('/example', exampleRouter);
    this.app.use('/', homeRouter);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log('Server is running on port ' + this.port);
    });
  }

  public connectDB(): void {
    // testing the db connection
    db.authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch((err: any) => {
        console.error('Unable to connect to the database:', err);
      });
  }
}
