import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Curriculum from '../index';

describe('Curriclum component', () => {
    it('should render five standards when Curriclum components loads', () => {
        let wrapper = mount(<Curriculum></Curriculum>) 
        expect(wrapper.find('Standard')).toHaveLength(5);
        wrapper.unmount();
    });
    it('should render button with icon and text', () => {
        let wrapper = shallow(<Curriculum></Curriculum>);
        const btn = wrapper.find("Button");
        //console.log(btn.dive().debug());
        expect(btn.dive().text()).toEqual('Add a Standard');
        wrapper.unmount();
    });
    it('should add exactly one standard when clicking upon Add a Standard button', () => {
        var onButtonClick = sinon.spy();
        let wrapper = mount(<Curriculum onButtonClick={onButtonClick}></Curriculum>)

        expect(wrapper.find("Standard")).toHaveLength(5)
        const btn = wrapper.find("button")
        btn.simulate('click');
        expect(wrapper.find("Standard")).toHaveLength(6)
    })
});
