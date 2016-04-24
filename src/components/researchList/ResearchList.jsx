import React from 'react';
import * as actions from '../../actions';
import ResearchItem from '../researchItem/ResearchItem';
import {connect} from 'react-redux';
import styles from './ResearchList.css'

export class ResearchList extends React.Component {



	render() {
		this.getResearchCost = (baseCost, costIncrease, level) => {
			return baseCost + (baseCost * costIncrease * level);
		}
		return <section className={styles.root}>
			{this.props.researchList.map(item =>
				<ResearchItem
					key={item.get('id') }
					id={item.get('id') }
					name={item.get('name') }
					level={item.get('level') }
					baseProduction={item.get('baseProduction') }
					productionIncrease={item.get('productionIncrease') }
					upgradeCost={this.getResearchCost(item.get('baseCost'), item.get('costIncrease'), item.get('level')) }
					doResearch={this.props.research}
					/>
			) }
		</section>
	}

}

ResearchList.propTypes = {
	researchList: React.PropTypes.object.isRequired,
	research: React.PropTypes.func.isRequired

}

function mapStateToProps(state) {
	return {
		researchList: state.game.get('researchList')
	};
}
export const ResearchListContainer = connect(mapStateToProps, actions)(ResearchList);
