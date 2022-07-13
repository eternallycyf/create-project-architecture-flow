## Dockerfile

### 基础配置

```Dockerfile
# from 基础镜像
FROM centos:7
# maintainer 维护者信息 姓名+邮箱
MAINTAINER eternallycyf<969475322@qq.com>
# run 构建时候需要运行的命令
RUN yum -y install vim
# add 集成别的东西 会自动解压
ADD 文件名 解压后的镜像内地址
# workdir 设置当前工作目录 / /bin/bash
WORKDIR $MYPATH
# valume 设置容器卷
VALUME
# expose 暴露端口
EXPOSE 80
# 运行
RUN
```

### 其他配置

```Dockerfile
# 脚本命令  只有最后一个会生效 可被替代 (覆盖) docker run xxx -l 就会替换掉 编写的 CMD ["ls","-a"]
CMD echo $MYPATH
CMD ["ls","-a"]
CMD echo '----end---'
CMD /bin/bash
# entrypoint 脚本命令  可以追加命令 不
ENTRYPOINT
# onbuild 当构建一个dockerfile 文件时 就触发这个指令
ONBUILD
# copy 文件拷贝到镜像中
COPY readme.txt /user/local/readme.txt
# env 环境变量 ENV
  # 例如 MYPATH user/local
  # 使用时候需要 $MYPATH
ENV MYPATH /user/local
```

## docker 项目常用命令

```shell
docker build -v 名字:版本号 . // 第一步运行打包命令  例子：docker build -v dpm-mobile:v1 .

docker save -o dpm-mobile.tar 名字:版本号 //将打包好的镜像放到本地

scp dpm.tar root@10.20.0.52:/usr/tmp // 将文件放入目标服务器

ssh root@10.20.0.52 // 登陆服务器

docker load -i /usr/tmp/dpm-mobile.tar //加载打包好的镜像

docker stop ***** //停止docker服务

docker run -d -p 82:80 -v /usr/local/file:/usr/local/file 名字:版本号 运行docker
```

## .dockerignore

```bash
.git/
.gitignore
.dockerignore
Dockerfile
docker-compose.yml
node_modules/         # Installed inside container
nginx/                # We'll create this directory soon
notes/
README.md
```

## demo

- 使用 alpine 镜像, 占用空间更少

```Dockerfile
FROM node:12.16.1-alpine AS installer
COPY package.json ./
RUN npm i tyarn -g
RUN tyarn

FROM node:12.16.1-alpine AS builder
COPY --from=installer /node_modules ./node_modules
COPY . .
RUN npm run build

FROM  vixlet/nginx:alpine
COPY --from=builder /dist /app
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
```
