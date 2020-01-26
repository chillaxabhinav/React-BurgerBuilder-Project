import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';


configure({adapter : new Adapter()});

describe('<NavigationItems />',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<NavigationItems />);
    })

    it('Should render 2 <NavigationItems/> if not authenticated',()=>{
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
    it('Should render 2 <NavigationItems/> if  authenticated', () => {
        //wrapper = shallow(<NavigationItems isAuthenticated/>);
        wrapper.setProps({isAuthenticated : true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    })
})