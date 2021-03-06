import { default as User, UserModel, AuthToken } from "../models/User";
import { Request, Response, NextFunction } from "express";
import * as AWS from "aws-sdk";
import Assets from "./../models/Assets";


const s3 = new AWS.S3();
// data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAALUlEQVRYR+3QQREAAAABQfqXFsNnFTizzXk99+MAAQIECBAgQIAAAQIECBAgMBo/ACHo7lH9AAAAAElFTkSuQmCC
export let fileUpload = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    console.log("파일 로그인");

    const params = {
      Bucket: "fallen-angel",
      Key: req.user.email + "_" + req.body.job + ".png",
      Body: new Buffer(
        req.body.imageDataUri.replace(/^data:image\/png;base64,/, ""),
        "base64"
      ),
      ContentEncoding: "base64",
      ContentType: "image/png"
    };
    s3.upload(params, function(err: any, data: any) {
      if (err) {
        console.log(err);
      } else {
        console.log(
          `Successfully uploaded data to ${params.Bucket}/${params.Key}`
        );

        const assets = {
          fileName: req.user.email + "_" + req.body.job + ".png",
          fileUrl: data.Location,
          userEmail: req.user.email,
          job: req.body.job,
          type: req.body.type
        };

        Assets.update(
          {
            userEmail: req.user.email,
            job: req.body.job
          },
          assets,
          { upsert: true },
          (err, raw) => {
            if (err) {
              console.log(err);
            }
            console.log(raw);
          }
        );
      }
    });

    return res.send({ success: true, job: req.body.job, type: req.body.type }).status(200);
  }
  console.log("이미 로그인 X");
  return res.send({ success: false }).status(500);
};