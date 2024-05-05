# 使用 Node 18.17.0 版本的基础镜像
FROM node:18.17.0
# 设置工作目录
WORKDIR /usr/src/app
# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./
# 安装项目依赖
RUN npm install next -g
RUN npm install
# 构建应用
RUN npm run build
# 暴露应用运行时的端口
EXPOSE 8081
# 运行应用
CMD ["npm","run", "dev"]


