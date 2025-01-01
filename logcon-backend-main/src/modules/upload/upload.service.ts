import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/shared/entities';
import { Express } from 'express';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // 파일 저장 처리 (예시로 작성)
  async saveFile(file: Express.Multer.File) {
    // 파일 저장 후 정보 반환
    return { path: file.path, filename: file.filename };
  }
}
