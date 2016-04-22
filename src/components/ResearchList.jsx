import React from 'react';
import * as actions from '../actions';
import ResearchItem from './ResearchItem';
import {connect} from 'react-redux';

export class ResearchList extends React.Component {


  render() {
    return <section>
      <div>
        {this.props.researchList.map(item =>
          <ResearchItem
            key={item.get('id') }
            id={item.get('id') }
            name={item.get('name') }
            level={item.get('level') }
            baseProduction={item.get('baseProduction') }
            productionIncrease={item.get('productionIncrease') }
            doResearch={this.props.research}
            />
        ) }
      </div>
    </section>
  }

};
function mapStateToProps(state) {
  return {
    researchList: state.get('researchList')
  };
}
export const ResearchListContainer = connect(mapStateToProps, actions)(ResearchList);