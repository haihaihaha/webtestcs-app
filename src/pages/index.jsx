// 路由配置页面
import React, { Fragment } from 'react'
// import { useRoutes, Navigate } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'

import Login from './Login'
import SignUp from './SignUp'
import Forget from './Forget'
import Home from './Home'


export default function Pages() {
    // 路由表
    // const element = useRoutes([
    //     {
    //         path: '/login',
    //         element: <Login />
    //     },
    //     {
    //         path: '/signup',
    //         element: <SignUp />
    //     },
    //     {
    //         path: '/home',
    //         element: <Home />
    //     },
    //     {
    //         path: '/forget',
    //         element: <Forget />
    //     },
    //     //重定向
    //     {
    //         path: '/',
    //         element: <Navigate to='/login' />
    //     }
    // ])
    return (
        <Fragment>
            {/* 注册路由 */}
            {/* {element} */}
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
                <Route path='/forget' component={Forget} />
                <Route path='/home' component={Home} />
                <Redirect to='/login' />
            </Switch>
        </Fragment >
    )
}

