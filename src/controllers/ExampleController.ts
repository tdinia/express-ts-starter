import { Request, Response } from "express";
import { CrudController } from "./CrudController";

export class ExampleController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>): void {
        throw new Error("Method not implemented.");
    }

    public read(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>): void {
        res.json({ message: 'GET /user request received' });
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>): void {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("express-serve-static-core").Query>, res: Response<any>): void {
        throw new Error("Method not implemented.");
    }
}
