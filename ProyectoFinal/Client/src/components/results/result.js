import React, { Component } from "react";
import _ from 'lodash';
import './styles.css';

class Result extends Component {

    render(){
        const {results, name, color} = this.props;
        if(_.isUndefined(results) || _.isNull(results) || _.size(results) === 0){
            return (<span></span>);
        }/*<div className="icon-deport-result">

        </div>*/
        return (
            <div style={{display: "inline-block"}}>
                {_.map(results, (result, index) =>
                    <div key={`deport-${_.trim(name)}-${index}`} style={{border: `1px solid ${color}`}} className="container-result">
                        <h3 style={{backgroundColor: color}}>{name}</h3>
                        <h4>Periodo <span>{_.get(result, 'period', 1)}</span></h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="result-goals result-left-top">
                                        {_.get(result, 'team1.goals', 0)}
                                    </td>
                                    <td className="result-goals">
                                        {_.get(result, 'team2.goals', 0)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="result-names result-left-bottom">
                                        {getName(_.get(result, 'team1.name', ""))}
                                    </td>
                                    <td className="result-names">
                                        {getName(_.get(result, 'team2.name', ""))}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="status-game"><div style={{backgroundColor: getColorStatus(_.get(result, 'finalized', false))}}></div></div>
                    </div>
                )}
            </div>
        );
    }
}

function getColorStatus(status){
    return status ? "#2E8922" : "#C24F1E";//"#A41A1A";
}

function getName(text){
    //return _.capitalize(text.substring(0, 3));
    return _.capitalize(text);
}

export default Result;
