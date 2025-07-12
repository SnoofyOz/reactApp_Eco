# Frontend Dockerfile
FROM node:18-alpine

# Tạo thư mục làm việc
WORKDIR /app

# Copy tất cả files
COPY . .

# Cài đặt dependencies
RUN npm install

# Build ứng dụng
RUN npm run build

# Cài đặt serve để chạy static files
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Chạy ứng dụng
CMD ["serve", "-s", "build", "-l", "3000"]