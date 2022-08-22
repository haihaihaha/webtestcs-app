//引入第三方组件
import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//引入样式
import './index.css'

export default class Forget extends Component {
  //状态
  state = {
    email: '',//邮箱
    password: '',//密码
    password2: '',//确认密码
    step: 1 //忘记密码步骤 1：第一步；2：第二步 默认为1
  }

  //自定义方法
  //重置密码第一步提交的回调
  onSubmit = (e) => {
    e.preventDefault();//阻止表单提交
    //更新状态 切换至第二步
    this.setState({ step: 2 })
  }

  //重置密码第二步提交表单的回调
  onSubmit2 =async (e) => {
    e.preventDefault();
    const { email, password, password2 } = this.state;
    if (password === password2&&password!=='') {
      //密码一致，请求注册
      await axios({
        url: '/user/forget',
        data: { email, password },
        method: 'post'
      }).then(res => {
        if (res.data.status === 200) {
          this.props.history.replace('/login');
        } else if (res.data.status === 'error') {
          alert("err");
        }
      }).catch(err => {
        console.log(err);
      })
    }else alert("请重新确认密码");
  }

  //受控组件 输入框的回调
  changeHandle = (e) => {
    //更新状态
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  
  render() {
    const { email, password, password2, step } = this.state;

    return (
      <div className="container">
        {/* <!-- Left content --> */}
        <div className={(step === 1) ? "container__left forget__img" : "container__left forget__img2"}>
        </div>

        {/* <!-- Right content --> */}
        <div className="container__right">

          <div className='formbox'>
            {/* 忘记密码第一步 */}
            <form onSubmit={this.onSubmit} style={{ display: (step === 1) ? 'block' : 'none' }}>
              <h1 className='title'>重置密码</h1>

              <div className='inputbox'>
                <label className=''>邮箱</label>
                <input
                  className='inp'
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.changeHandle} />
              </div>

              <button className='but__login'>发送</button>

              <div className='tipbox'>
                <span>您已有账号?<Link className='link__blue' to='/login'>用户登录</Link></span>
                <span>建立新账号?<Link className='link__blue' to='/signup'>用户注册</Link></span>
              </div>
            </form>

            {/* 忘记密码第二步 */}
            <form onSubmit={this.onSubmit2} style={{ display: (step === 2) ? 'block' : 'none' }}>
              <h1 className='title'>重置密码</h1>

              <div className='inputbox'>
                <label className=''>密码</label>
                <input
                  className='inp'
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.changeHandle} />
              </div>

              <div className='inputbox'>
                <label className=''>重复密码</label>
                <input
                  className='inp'
                  type="password"
                  name="password2"
                  value={password2}
                  onChange={this.changeHandle} />
              </div>

              <div className='otherbox'>
                <span >密码强度</span><br />
              </div>

              <button className='but__login'>重置密码</button>

              <div className='tipbox'>
                <span>没有账号?<Link className='link__blue' to='/signup'>用户注册</Link></span>
                <span>已有账号<Link className='link__blue' to='/login'>用户登录</Link></span>
              </div>

            </form>
            
          </div>
        </div>
      </div>
    )
  }
}
