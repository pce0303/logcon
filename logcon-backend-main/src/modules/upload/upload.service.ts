import { Injectable } from '@nestjs/common';
import { Express } from 'express';

@Injectable()
export class UploadService {
  async saveFile(file: Express.Multer.File) {
    return { path: file.path, filename: file.filename };
  }
}
