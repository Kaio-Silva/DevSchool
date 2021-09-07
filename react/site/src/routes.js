import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/index'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}