import React from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {ResearchListContainer} from './researchList/ResearchList'
import styles from './SpaceApp.css'
import {HeaderContainer} from './header/Header'


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
        return <div className={styles.root}>
			<HeaderContainer/>
            <ResearchListContainer/>
        </div>
    }
}

SpaceApp.propTypes = {
	tick: React.PropTypes.func.isRequired
}
/* eslint-disable */
function mapStateToProps(state) {
	return {};
}
/* eslint-enable */
export const SpaceAppContainer = connect(mapStateToProps, actions)(SpaceApp);
