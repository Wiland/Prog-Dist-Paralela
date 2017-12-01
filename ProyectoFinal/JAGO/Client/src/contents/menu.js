import React, {Component} from 'react';
import { Link  } from 'react-router-dom';

class MenuComponent extends Component {

    state = {
        visible: false
    };

    handleOpenMenu = () => {
        this.setState(prev => ({ visible: true }));
    };

    handleClosenMenu = () => {
        this.setState(prev => ({ visible: false }));
    };

    render(){
        const {visible} = this.state;
        return (
            <div>
                {!visible &&
                    <div id="icon-button-menu-open" onClick={this.handleOpenMenu}>
                        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                        </svg>
                    </div>
                }
                <div id="space-content-menu"></div>
                <div id="navbar" className={visible ? 'slideIn' : 'slideOut'}>
                    <div id="icon-button-menu-close" onClick={this.handleClosenMenu}>
                        <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            <path d="M0 0h24v24H0z" fill="none"/>
                        </svg>
                    </div>
                    <ul>
                        <li><Link to='/' onClick={this.handleClosenMenu}>Principal</Link></li>
                        <li><Link to='/online' onClick={this.handleClosenMenu}>Tiempo real</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default MenuComponent;
