import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ResearchItem from '../../src/components/researchItem/ResearchItem';
import {expect} from 'chai';
import {fromJS} from 'immutable';
import {gameInitialState} from '../../src/store';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} = TestUtils;

function setup() {
	const initalState = fromJS(gameInitialState);

    const props = initalState.get('researchList').get(0);
    let output = renderIntoDocument(<ResearchItem
        key={props.get('id') }
        id={props.get('id') }
        name={props.get('name') }
        level={props.get('level') }
        />
    )
    return {
        props,
        output
    }
}

describe('ResearchItem', () => {
    it('renders an item', () => {
        const {output} = setup();

        const researchItems = scryRenderedDOMComponentsWithTag(output, 'button');
        expect(researchItems.length).to.equal(1);
    });


});
