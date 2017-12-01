import React, {Component} from 'react';
import _ from 'lodash';
import rp from 'request-promise';

class Games extends Component {

    state = {
        games: []
    };

    componentDidMount(){
        const options = {
            url: 'http://localhost:8880/api/results',
            method: 'GET'
        };
        rp(options)
            .then(function (results) {
                console.clear();
                console.log(results);
            })
            .catch(function (err) {
                console.clear();
                console.log(err);
            });
    }

    render(){
        const {games} = this.state;
        return (
            <div>
                {_.map(games, (game, index) =>
                    <code>{JSON.stringify(game, null, 2)}</code>
                )}
            </div>
        );
    }
};

export default Games;
