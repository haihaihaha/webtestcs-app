import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './index.css'

export default class SignUp extends Component {

  //状态
  state = {
    username: '',//姓名
    email: '',//邮箱
    password: '',//密码
    birthday: '',//生日
    phonenumber: '',//手机号码
    sex: '',//性别
    step: 1 //注册页面标志 1-注册页面 2-完善用户信息
  }

  //自定义方法
  //提交注册表单1的回调
  onSubmit = (e) => {
    e.preventDefault();
    //更新状态
    this.setState({ step: 2 })
  }

  //提交完善信息表单的回调
  onSubmit2 = async (e) => {
    e.preventDefault();
    const { username, email, password, birthday, phonenumber, sex } = this.state
    //注册请求
    await axios({
      url: '/user/signup',
      data: { username, email, password, birthday, phonenumber, sex },
      method: 'post'
    }).then((res) => {
      if (res.data.status === 200) {
        this.props.history.replace('/login');
      } else if (res.data.status === 'error') {
        alert("err")
      }
    }).catch(err => {
      console.log(err);
    })
  }

  //受控组件 登录邮箱、密码输入框的回调
  changeHandle = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { username, email, step, birthday, phonenumber, password } = this.state;

    return (
      <div className="container">
        {/* <!-- Left content --> */}
        <div className={(step === 1) ? "container__left signup__img" : "container__left signup__img2"}>
        </div>

        {/* <!-- Right content --> */}
        <div className="container__right" >

          <div className='formbox'>
            {/* 注册1 */}
            <form onSubmit={this.onSubmit} style={{ display: (step === 1) ? 'block' : 'none' }}>
              <h1 className='title'>欢迎注册创思设备管理系统</h1>
              <div className='inputbox'>
                <label className=''>姓名</label>
                <input
                  className='inp'
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.changeHandle} />
              </div>

              <div className='inputbox'>
                <label className=''>邮箱</label>
                <input
                  className='inp'
                  type="text" name="email"
                  value={email}
                  onChange={this.changeHandle} />
              </div>

              <div className='inputbox'>
                <label className=''>密码</label>
                <input
                  className='inp'
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.changeHandle} />
              </div>

              <div className='otherbox' style={{ flexFlow: 'column' }}>
                <span >密码强度</span><br />
                <span><input type="checkbox" name="" />我已阅读用户协议</span>
              </div>

              <button className='but__login'>注册</button>

              <div className='tipbox'>
                <span >您已有平台账号?</span>
                <Link className='link__blue' to='/login'>用户登录</Link>
                <Link className='link__black' to='/forget'>忘记密码</Link>
              </div>
            </form>

            {/* 注册2 */}
            <form onSubmit={this.onSubmit2} style={{ display: (step === 2) ? 'block' : 'none' }}>
              <h1 className='title'>用户资料完善</h1>
              <div className='user_img'>
                <img 
                  src="/image/clarity_note-edit-line.png" 
                  alt="" 
                  onClick={() => alert('正在维护，请期待！')}/>
              </div>

              <div className='inputbox'>
                <label className=''>姓名</label>
                <input
                  className='inp'
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.changeHandle} />
              </div>

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
                <label className=''>生日</label>
                <input
                  className='inp'
                  type="text"
                  name="birthday"
                  value={birthday}
                  onChange={this.changeHandle} />
              </div>

              <div className='inputbox'>
                <label className=''>手机号码</label>
                <input
                  className='inp'
                  type="text"
                  name="phonenumber"
                  value={phonenumber}
                  onChange={this.changeHandle} />
              </div>

              <div className='inputbox'>
                <label >性别</label>
                <select name="sex" onChange={this.changeHandle}>
                  <option value="女">女</option>
                  <option value="男">男</option>
                </select>
              </div>
              
              <button className='but__login' style={{ width: '100px', textAlign: 'center', margin: '0 80px' }}>提交</button>
            </form>
            
          </div>
        </div>
      </div>
    )
  }
}


