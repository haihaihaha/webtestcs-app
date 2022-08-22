// 引入mockjs
import Mock from 'mockjs';

let data_success =
{
    status: 200,//表示登录成功
};

let data_error =
{
    status: 'error',//表示登录失败
};
// 存储模拟数据
//用户信息数组
let userList=[
    {//默认账号
        email:'admin@mail.com',
        password:'111111'
    }
]
/*
    在mockData.js中引入mockjs，并写模拟的返回数据，
    第一个参数是接口，
    第二个是请求类型，
    第三个是一个函数，接收请求参数并处理之后返回数据
*/
// 登录接口
export default Mock.mock(
    '/user/login', 'post',
    (req) => {
        // console.log(req)
        let req_data = JSON.parse(req.body)
        // 匹配用户
        const result = userList.some((item) => { 
            return req_data.email === item.email && req_data.password === item.password})
        if (result) {
            return data_success;
        }
        return data_error;
    }
)
// 注册接口
export const SignUp=Mock.mock(
    '/user/signup','post',
    (req)=>{
        let req_data = JSON.parse(req.body);
        userList=[...userList,req_data];
        console.log(userList)
        return data_success;
    }
)
// 修改密码接口
export const Forget = Mock.mock(
    '/user/forget', 'post',
    (req) => {
        let req_data = JSON.parse(req.body);
        userList.map(item=>{
            if(item.email===req_data.email){
                item.password=req_data.password;
            }
            return userList;
        })
        userList = [...userList, req_data];
        console.log(userList)
        return data_success;
    }
)