import React, {Component} from 'react';
import './styles.css';

class Main extends Component {

    render(){
        return (
            <div className="content-ppal-menu">
                <div className="content-ppal-item content-ppal-online"></div>
                <div className="content-ppal-item content-ppal-games"></div>
                <div className="content-ppal-item content-ppal-admin"></div>
            </div>
        );
    }

}

export default Main;
