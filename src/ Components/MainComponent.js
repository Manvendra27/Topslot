import React, { Component } from 'react';
import Personalinfo from './Personalinfo';
import UploadDocs from './UploadDocs';
import Payment from './Payment';
import { Switch,Route,Redirect} from 'react-router-dom';

export class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route exact path='/' component={() => <Personalinfo />} />
                <Route exact path='/upload' component={() => <UploadDocs />} />
                <Route exact path='/payment' component={() => <Payment />} />
                </Switch>
            </div>
        )
    }
}

export default (Main)
