import React from 'react';
import Home from "../container/Home"
import LifeService from "../container/LifeService"
import Mine from "../container/Mine"
import Shop from "../container/Shop"
import NotFound from "../container/NotFound"
import City from "../container/City"
import Search from "../container/Search"
import Detail from "../container/Detail"
import Login from "../container/Login"
import ShopCar from "../container/ShopCar"

import { Route, Switch } from "react-router-dom"

export default class SubRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/life" component={LifeService}></Route>
        <Route path="/mine" component={Mine}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/city" component={City}></Route>
        <Route path="/search/:keyword?" component={Search}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <Route path="/login/:router?" component={Login}></Route>
        <Route path="/shopcar" component={ShopCar}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    )
  }
}
