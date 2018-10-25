import express from "express";
import { SampleFunctionality } from "./../controllers/c01-sample-controller/sample-functionality.controller";

export class GeneralAPIs {
  public router = express.Router();

  constructor() {
    this.init();
  }

  private init() {
    this.router.get("/my-test-api", new SampleFunctionality().responder);
  }
}
