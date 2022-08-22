//引入第三方组件
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//引入样式
import './index.css'
import '../CSS/index.css'

export default class Login extends Component {

  //状态
  state = {
    email: 'admin@mail.com',//邮箱
    password: '111111',//密码
    eyeShow:false //控制密码的显示和隐藏
  }

  //自定义方法
  //提交登录表单的回调
  onSubmit =async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    // Mock 登录请求
    await axios({
      url: '/user/login',
      data: { email, password },
      method: 'post'
    }).then((res) => {
      console.log(res)
      if (res.data.status === 200) {
        //编程式路由跳转 登陆成功去首页
        this.props.history.replace('/home');
      } else if (res.data.status === 'error') {
        alert("邮箱或密码错误")
      }
    }).catch(err=>{
      console.log(err);
    })
  }

  //form表单内输入变化的回调
  changeHandle = (e) => {
    //解构赋值 元素的name 和value值
    const { name, value } = e.target;
    //更新状态
    this.setState({ [name]: value })
  }

  render() {
    // 解构赋值
    const { email, password,eyeShow } = this.state;

    return (
      <div className="container">
        {/* <!-- Left content --> */}
        <div className="container__left login__img">
          <img src="../../../public/image/login_bg.png" alt="" />
        </div>

        {/* <!-- Right content --> */}
        <div className="container__right">
          {/* 登录表单 */}
          <div className='formbox'>
            <form onSubmit={this.onSubmit}>
              <h1 className='title'>欢迎登录创思设备管理系统</h1>

              <div className='inputbox'>
                <label className=''>邮箱</label>
                <input
                  className='inp'
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.changeHandle} />
              </div>

              <div className='inputbox'>
                <label className=''>密码</label>
                <div className='pass_eyes_box'>
                  <input
                    className='inp'
                    type={eyeShow? "text":"password"}
                    name="password"
                    value={password}
                    onChange={this.changeHandle} />
                  <img 
                    src={eyeShow ? 'image/akar-icons_eye-slashed.png' :'image/eye-open.png'}
                    onClick={()=>{this.setState({eyeShow:!eyeShow}) }}
                    alt='PNG'/>
                </div>
              </div>

              <div className='otherbox'>
                <input type="checkbox" name="memorize" />
                <label className=''>记住我</label>
                <Link className='right link__black'style={{float:'right'}} to='/forget'>忘记密码</Link>
              </div>

              <button className='but__login'>登录</button>

              <div className='tipbox'>
                <span>你还没有账号？</span>
                <Link className='link__blue' to='/signup'>注册账号</Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    )
  }
}

