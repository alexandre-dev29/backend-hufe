import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { FileUpload } from 'graphql-upload-minimal';
import { CloudinaryResponse } from '../types/cloudinary-response';

@Injectable()
export class CloudinaryService {
  async uploadFile(file: FileUpload): Promise<CloudinaryResponse | undefined> {
    return new Promise<CloudinaryResponse | undefined>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      file.createReadStream().pipe(uploadStream);
    });
  }
}
