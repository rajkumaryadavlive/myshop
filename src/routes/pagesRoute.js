import {Switch, Route } from "react-router-dom";
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';
import NotFound from "../pages/NotFount";
const PagesRoute=()=>{
    return(<Switch>
                <Route path='/' exact>
                <HomePage />
                </Route>
                <Route path='/auth'>
                <AuthPage />
                </Route>
                
                <Route component={NotFound} />

           </Switch>
        )
}
export default PagesRoute;