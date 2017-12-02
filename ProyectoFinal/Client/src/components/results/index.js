import React, { Component } from "react";
import io from "socket.io-client";
import _ from 'lodash';
import './styles.css';
import Result from './result';
import {TYPES, SERVER_HOST, SERVER_PORT} from '../../config/constants';

class Results extends Component {

    state = {
        results: {},
        online: undefined
    };

    constructor(props){
        super(props);

        this.socket = io(`${SERVER_HOST}:${SERVER_PORT}`);

        this.socket.on('SEND_RESULT_MESSAGE', function(data){
            addMessage(data);
        });

        this.socket.on('CONNECT_RESULT', function(data){
            requestResult(data);
        });

        const addMessage = data => { this.setState({results: data}); };
        const requestResult = data => { this.setState({online: _.get(data, 'isConnection', false)}); };
    }

    updateGames = () => {
        this.socket.emit('UPDATE-GAMES');
    }

    render(){
        const {online, results} = this.state;
        return (
            <div className="container">
                <div className="container-connect">
                    <div className="container-icon"></div>
                    <div className="container-connect-icon">
                        {
                          online
                             ? <svg fill="#006400" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M0 0h24v24H0z" fill="none"/>
                                   <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                               </svg>
                             : <svg fill="#8B0000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                   <path d="M0 0h24v24H0z" fill="none"/>
                               </svg>
                        }
                    </div>
                </div>
                {
                    online
                        ?
                            <div style={{textAlign: 'center'}}>
                                {_.map(TYPES, (type, index) => {
                                    const result = _.get(results, _.get(type, 'key'), []),
                                          visibleBorder = _.size(result) > 0,
                                          title = _.get(type, 'title'),
                                          color = _.get(type, 'color', "#FFF");
                                    return (
                                        <div key={`deport-${index}`}>
                                            <Result key={`deport-${index}`} name={title} color={color} results={result} />
                                            <div style={{borderTop: `${visibleBorder ? "1px" : "0px"} solid ${_.get(type, 'color', "#FFF")}`}} className="separator-line-deport"></div>
                                        </div>
                                    );
                                })}
                            </div>
                        :
                            <div className="title-no-connection">
                                No hay conexión con el servidor
                            </div>
                }
            </div>
        );
    }
}

export default Results;
