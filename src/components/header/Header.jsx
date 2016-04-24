import React from 'react';
import {connect} from 'react-redux';
import styles from './Header.css'

export class Header extends React.Component {

    render() {
        return <section>
			<div className={styles.iron + ' totalIron'}>Iron: {this.props.spaceShip.get('iron') }</div>
            <div className={styles.error + ' errorMsg'}>{this.props.error}</div>
        </section>
    }

}

Header.propTypes = {
	spaceShip: React.PropTypes.object.isRequired,
	error: React.PropTypes.string.isRequired
}

function mapStateToProps(state) {
    return {
        spaceShip: state.game.get('spaceShip'),
        error: state.game.get('errorMsg')
    };
}

export const HeaderContainer = connect(mapStateToProps)(Header);
