import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from '../containers/Pages';
import Detail from '../containers/Detail';

const AppRoutes = () => {
  const routers = [{
    page: 'All',
    component: Pages,
    key: 'root',
    path: '/',
    exact: true,
  }, {
    page: 'All',
    component: Pages,
    key: 'All',
    path: '/all',
  }, {
    page: 'Social',
    component: Pages,
    key: 'Social',
    path: '/social'
  }, {
    page: 'News',
    component: Pages,
    key: 'News',
    path: '/news'
  }, {
    page: 'Detail',
    component: Detail,
    key: 'Detail',
    path: '/detail/:messageId'
  }];

  return (
    <Switch>
      {
        routers.map((item) => {
          return (
            <Route key={item.key} exact={item.exact} path={item.path} component={item.component} />
          );
        })
      }
    </Switch>
  );
}

export default AppRoutes;