import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { Login } from './Login';

if (Meteor.isClient) {
  describe('Login', function () {

    it('should show error messages', function () {
      const error = 'This is not working';
      const wrapper = mount(<Login loginWithPassword={() => { }} />);

      wrapper.setState({ error });

      const errorText = wrapper.find('p').text();
      expect(errorText).toEqual(error);

      wrapper.setState({ error: ''});
      expect(wrapper.find('p').length).toBe(0);
    });
  });
}