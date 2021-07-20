/**@module amazonS3Service */
require('dotenv/config');
const {S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand} = require('@aws-sdk/client-s3');


//Config info
const region = process.env.AWS_BUCKET_REGION;
const accessKeyID = process.env.AWS_ACCESS_KEY;
const secretKeyID = process.env.AWS_SECRET_KEY;
const bucket = process.env.AWS_BUCKET_NAME;


const s3 = new S3Client({region: region, credentials: {accessKeyId: accessKeyID, secretAccessKey: secretKeyID}, signatureVersion: 'v4'});

module.exports = {
  /**This function post a file in AWS S3
   * @function postFile
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns -201 & Created object // 500 & Server error
   */
  async postFile(file) {

    //Spaces in a file name can be troublesome if we want to use them as ID's
    var fileName = file.originalname.replace(/ /g, '-');


    const params = {
      Bucket: bucket,
      Key: fileName,
      Body: file.buffer,
      ContentType: "image/jpeg"
    };

    try{
      const command = new PutObjectCommand(params);
      await s3.send(command);

      const url = `https://${bucket}.s3.${region}.amazonaws.com/${fileName}`;
      return ({path: url});
    }catch(err){
      console.log({error : err});
      return false;
    }
  },

  /**This function get a file from AWS S3
   * @function postFile
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns -200 & File // 500 & Server error
   */

  async getFile(id) {
    const params = {
      Bucket: bucket,
      Key: id,
    };


    const command = new GetObjectCommand(params);
    
    try{
      const image = await s3.send(command);
      
      return ({url : image})
    }catch(err){
      console.log(err);

      return({error: err});
    }
  },

  /**This function deletes a file from AWS S3
   * @function postFile
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @returns -200 & "File successfully deleted" // 500 & Server error
   */
  async deleteFile(id) {

    const params = {
      Bucket: bucket,
      Key: id
    };

    const command = new DeleteObjectCommand(params)

    try{
      const operation = await s3.send(command);

      if(operation.$metadata.httpStatusCode == 204) return false;
      return true;
    } catch(err){
      console.log(err);
      return false;
    }
  }
};
