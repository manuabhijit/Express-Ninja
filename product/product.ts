import * as bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import { GeneralAPIs } from "./routes/general-apis.router";

// import * as path from "path";
// import * as cors from "cors";

/**
 * The server.
 *
 * @class Server
 */
export class ProductServer {
  public app: express.Application;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): ProductServer {
    return new ProductServer();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();
    this.app.use(morgan("dev"));
    // this.app.use(cors());

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    //this.app.use(HeaderSecurity.securityCheck);

    this.app.use("/", new GeneralAPIs().router);

    this.app.use((_req: any, res: any, _next: any) => {
      let error: any = {
        message: "Unknown API",
        name: "400"
      };
      res.status(Number(error.name) || 500).json(error);
    });

    // //configure application
    // this.config();
  }
}
