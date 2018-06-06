import { Request, Response } from "express";
import path from "path";


/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
  if (req.user) {
    console.log("이미 로그인");
    return res.redirect("http://localhost:9001/");
  }
  console.log("이미 로그인 x");
  res.sendFile(__dirname + "/index.html");
};

export let choice = (req: Request, res: Response) => {
  console.log("req.user " + req.user);
  // console.log("고고" + __dirname + "/../public/choice.html");
  res.sendFile(path.resolve(__dirname + "/../public/choice.html"));
};