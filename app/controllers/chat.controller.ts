import { Request, Response } from "express";
import { ApplicationController } from "./application.controller";

export class ChatController extends ApplicationController {
  public index(req: Request, res: Response) {
    res.render("chat.view/index", { title: "Chat Room" });
  }
}
