# 创思找工作前端测试
## 说明
1.项目周期：2022-8-18~22
2.作者：Yang
3.技术：使用react脚手架搭建项目
4.react-route-dom@5
## 完成目标
1.还原所有页面
2.处理好自适应，如有响应、动画效果
3.对页面进行优化。包括页面防抖、错误提醒、数据判定等
4.使用mock模拟接口测试，并建立前端相关业务
    Mock演示数据：
    接口方式：post
    数据格式：json
    如登录接口，接口名：user/login
    参数格式：
    {
    “email”:“xxxx@mail.com”
    “password”:md5值
    }
    返回格式：
    {
    “code”:200成功，300参数错误，400接口异常
    “msg”:”登录成功，参数错误，接口异常”
    “result”:null
    }
5.根据mock模拟使用springboot+mybatis开发接口，并登录。此需求为非必须项，为项目组考察后端开发能力
6.项目完成提供gitee仓库地址，并打包提供dist压缩文件包，提供mock演示数据文档说明，代码请按标准规范命名、备注、说明
## 页面
登录
注册
    1.注册
    2.完善信息
忘记密码
    1.邮箱验证
    2.重置密码
首页（落地页）
## 路由组件
登录:Login
注册:SignUp
忘记密码:Forget
首页:Home
## 优化
1.整理登录、注册、忘记密码路由页面的冗余结构。这些页面只是左边背景图和右边内容区域不一样，壳子是一样的。
2.密码小眼睛
3.用户注册上传头像

