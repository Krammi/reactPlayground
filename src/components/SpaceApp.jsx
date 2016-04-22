import React from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {ResearchListContainer} from './ResearchList'

export class SpaceApp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.timer = setInterval(this.props.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <div>
            <span>{this.props.error}</span>
            <span>Iron: {this.props.spaceShip.get('iron') }</span>
            <span>Defence: {this.props.spaceShip.get('defence') }</span>
            <ResearchListContainer/>
        </div>
    }

}


function mapStateToProps(state) {
    return {
        spaceShip: state.get('spaceShip'),
        error: state.get('errorMsg')
    };
}

export const SpaceAppContainer = connect(mapStateToProps, actions)(SpaceApp);