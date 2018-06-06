import { default as User, UserModel, AuthToken } from "../models/User";
import { Request, Response, NextFunction } from "express";
import * as AWS from "aws-sdk";

const s3 = new AWS.S3();

export let fileUpload = (req: Request, res: Response) => {
  console.log("req.user is" + req.user);
  if (req.user) {
    console.log("파일 로그인");
    const params = {
      Bucket: "Fallen_Angel",
      Key: "Fallen_Angel.png",
      Body: "Hello!"
    };
    s3.putObject(params, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(
          `Successfully uploaded data to ${params.Bucket}/${params.Key}`
        );
      }
    });

    return res.send({ success: true }).status(200);
  }
  console.log("이미 로그인 X");
  return res.send({ success: false }).status(500);
};
