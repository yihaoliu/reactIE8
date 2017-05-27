/**
 * 路由配置
 * 
 * by tommyshao
 */

import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

const routes = {
    component: require('../containers/common/layout').default,
    childRoutes: [
        {
            path: '/',
            indexRoute: {
                onEnter: (nextState, replace) => replace('','Home')
            }
        },
        {
            path: 'Home',
            getComponent(nextState, cb) {
                require.ensure([], require => {
                    cb(null, require('../containers/index').default)
                })
            }
        }
    ]
}

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router history={ hashHistory } routes={ routes } />
        )
    }
}
