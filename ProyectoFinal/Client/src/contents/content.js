import React, {Component} from 'react';
import { Switch, Route  } from 'react-router-dom';
import GameOnline from './gameOnline';
import Main from './mainComponent';
import Games from './gameComponent';

class Content extends Component {

    render(){
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/online' component={GameOnline}/>
                </Switch>
            </main>
        );
    }
};

export default Content;
