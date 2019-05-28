
// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Contacts from './Contacts';

describe('Contacts', () => {
  const props = {
    contacts: {
      email: 'kms920612@gmail.com',
      twitter: '#',
      vkontakte: '#',
      github: '#',
      rss: '#',
      telegram: '#'
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Contacts {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
