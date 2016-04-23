import React from 'react';
import styles from './ResearchItem.css'

export default class ResearchItem extends React.Component {

    render() {
        return <div className={styles.root}>
            <div className={styles.stats_container}>
                <span className={styles.stats_item}>Current Level: {this.props.level}</span>
                <span className={styles.stats_item}>Current Production: {(this.props.level * this.props.productionIncrease) + this.props.baseProduction}</span>
            </div>
			<div className={styles.research_btn_container}>
				<button className={styles.research_btn} onClick={() => this.props.doResearch(this.props.id) } >{this.props.name} ({this.props.upgradeCost}) </button>
			</div>
        </div>
    }
}

ResearchItem.propTypes = {
	level: React.PropTypes.number.isRequired,
	productionIncrease: React.PropTypes.number.isRequired,
	baseProduction: React.PropTypes.number.isRequired,
	doResearch: React.PropTypes.func.isRequired,
	name: React.PropTypes.string.isRequired,
	upgradeCost: React.PropTypes.number.isRequired,
	id: React.PropTypes.number.isRequired
}
