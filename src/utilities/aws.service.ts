import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client } from '@aws-sdk/client-s3';
import { FileUpload } from 'graphql-upload-minimal';
import { Upload } from '@aws-sdk/lib-storage';

@Injectable()
export class AwsService {
  private AWS_BUCKET = '';
  private s3_instance: S3Client;

  constructor(private configService: ConfigService) {
    this.s3_instance = new S3Client({
      credentials: {
        accessKeyId: configService.get<string>('AWS_ACCESS_ID'),
        secretAccessKey: configService.get<string>('AWS_SECRET_ACCESS_KEY'),
      },
      region: configService.get<string>('AWS_REGION_NAME'),
    });
    this.AWS_BUCKET = configService.get<string>('AWS_BUCKET_NAME');
  }

  async uploadFileToS3(file: FileUpload) {
    const file_ext = file.filename.substring(
      (Math.max(0, file.filename.lastIndexOf('.')) || Infinity) + 1,
    );

    const fileKey = this.generateRandom() + `.${file_ext}`;
    try {
      const uplaodCommand = new Upload({
        client: this.s3_instance,
        params: {
          ACL: 'public-read',
          Bucket: this.AWS_BUCKET,
          ContentType: file.mimetype,
          ContentEncoding: file.encoding,
          ContentDisposition: 'inline',
          Key: String(fileKey),
          Body: file.createReadStream(),
        },
      });
      return await uplaodCommand.done();
    } catch (e) {
      console.log(e);
    }
  }

  private generateRandom = () =>
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(23).substring(2, 5);
}
