import React, {Component} from 'react';
import Menu from './menu';
import Content from './content';

class ContentComponent extends Component {

    render(){
        return (
            <div>
                <Menu />
                <Content />
            </div>
        );
    }
};

export default ContentComponent;
