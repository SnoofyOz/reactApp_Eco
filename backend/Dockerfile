# Backend Dockerfile
FROM node:18-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Cài đặt dependencies cần thiết cho Alpine
RUN apk add --no-cache python3 make g++ curl

# Copy tất cả files
COPY . .

# Cài đặt tất cả dependencies (bao gồm devDependencies)
RUN npm install

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3001/health || exit 1

# Chạy ứng dụng
CMD ["npm", "start"]