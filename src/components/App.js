import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    // overriding the default constructors
    // the component has its own constructor, 
    // and calling super will call the constructor of the super
    super();

    this.state = { gifts: [] };
  }

  // directly setting the class method into an arrow function
  // use the same this object in our helper function to properly access the state
  // of the app
  // anon function doesn't create it's own this object

  addGift = () => {
    const { gifts } = this.state;

    const ids = this.state.gifts.map(gift => gift.id);

    // only run this if the ids length is greater than 0
    const max_id = ids.length > 0 ? Math.max(... ids) : 0;

    gifts.push({ id: max_id+1 });

    this.setState({ gifts: gifts })
  }

// for buttons, don't use . because it's added - so, NOT '.gift-list'
// use map to look at each gift one at a time, and for each gift, return a div
  render() {
    return (
        <div>
          <h2>Gift Giver</h2>
          <div className='gift-list'>
            {
              this.state.gifts.map(gift => {
                return (
                  <div key={gift.id}></div>
                )
              })
            }
          </div>
          <Button className='btn-add' onClick={this.addGift}>Add Gift </Button>
        </div>
    )
  }
}

export default App; 

// notes, 