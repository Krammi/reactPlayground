import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ResearchItem from '../../src/components/ResearchItem';
import {expect} from 'chai';
import {List, Map, fromJS} from 'immutable';

const {renderIntoDocument,
    scryRenderedDOMComponentsWithClass,
    Simulate} = TestUtils;

const item = fromJS({
    id: 1,
    name: 'iron',
    level: 0
})


function setup() {
    let props = fromJS({
        id: 1,
        name: 'iron',
        level: 0
    });

    let output = renderIntoDocument(<ResearchItem
        key={item.get('id') }
        id={item.get('id') }
        name={item.get('name') }
        level={item.get('level') }
        />
    )
    return {
        props,
        output
    }
}

describe('ResearchItem', () => {
    it('renders an item', () => {
        const component = renderIntoDocument(
            <ResearchItem
                key={item.get('id') }
                id={item.get('id') }
                name={item.get('name') }
                level={item.get('level') }
                />
        );
        const researchItems = scryRenderedDOMComponentsWithClass(component, 'researchButton');
        expect(researchItems.length).to.equal(1);
    });


});