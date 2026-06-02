# Logcon

> CTF 대회 운영 및 문제 풀이 플랫폼

## 📌 프로젝트 소개

Logcon은 CTF 대회를 운영하고 참가자가 문제를 풀 수 있도록 만든 웹 플랫폼입니다. 사용자는 회원가입 및 로그인 후 문제를 확인하고 플래그를 제출할 수 있으며, 점수판을 통해 자신의 순위를 확인할 수 있습니다. 관리자는 문제와 카테고리, 공지사항을 관리할 수 있어 실제 대회 운영 흐름을 고려한 구조로 개발했습니다.

## 🛠 기술 스택

| 구분 | 기술 |
|---|---|
| Frontend | Next.js, React, TypeScript, Styled Components |
| Backend | NestJS, TypeScript |
| Database | MySQL, TypeORM |
| Auth | JWT, Cookie |
| Realtime | Socket.IO |
| Infra | Docker, Docker Compose |
| Tool | Git, GitHub Actions |

## ✨ 주요 기능

### 사용자 기능

- 회원가입 및 로그인
- 문제 목록 조회
- 문제 카테고리별 확인
- 플래그 제출
- 점수판 확인
- 공지사항 확인
- 사용자 프로필 조회

### 관리자 기능

- 문제 생성, 수정, 삭제
- 카테고리 관리
- 공지사항 관리
- 대회 운영에 필요한 데이터 관리

### 기타 기능

- Docker 기반 문제 환경 실행 구조
- JWT 기반 사용자 인증
- TypeORM을 활용한 데이터 관리
- Socket.IO 기반 실시간 기능 구조
