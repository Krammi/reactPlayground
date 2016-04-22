import React from 'react';

export default class ResearchItem extends React.Component {

    render() {
        return <div className="researchItem">
            <div>
                Current Level: {this.props.level}
                Current Production: {(this.props.level * this.props.productionIncrease) + this.props.baseProduction}
            </div>
            <button className="researchButton" onClick={() => this.props.doResearch(this.props.id)} >{this.props.name} </button>
        </div>
    }
};