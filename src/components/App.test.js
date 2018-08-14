import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// shallow function takes in JSX as an argument, 
// then returns an object that represents our app component 
// in the react environment 

const app = shallow(<App />);

it('renders correctly', () => {
  // snapshots keep a recorded history of the react component
  // updates whenever a change happens, and keeps it in state
  // in order to unit test, we can test the render as a whole, in toMatchSnapshot
  expect(app).toMatchSnapshot();
});

it('initializes the `state` with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to `state` when clicking the `add gift` button', () => {
  // assuming we've already clicked on the button
  // find the add gift button and click on it
  // allows us to find child nodes by jsx tags, 
  // by class name, start with a '.' to represent a css class name
  app.find('.btn-add').simulate('click');

  // it will be the effect of our add click button which adds a new gift
  // each gift will be represented as an object with an id
  // we'll get the max id of all the current gifts in the array, and will
  // always get a unique id
  expect(app.state().gifts).toEqual([{ id: 1 }]);

  // need to add a clickable button
})

it('adds a new gift to the rendered list when clicking the `add gift` button', () => {
  app.find('.btn-add').simulate('click');
  // find dom item gift list and then 
  expect(app.find('.gift-list').children().length).toEqual(2)
});

