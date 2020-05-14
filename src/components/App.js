import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import hogs from '../porkers_data';
import HogHorde from './HogHorde';

/*
App
>> Should hold all the data
>> Should create all the methods that alters the data
- Nav
>> has to alter list of hogs
- HogHorde
>> Has list of hogs
    -HogCard

*/

class App extends Component {
  state = {
    hogsList: hogs,
    filtered: false,
    sortCategory: '',
  };

  resetHogs = () => {
    this.setState({
      filtered: false,
      sortCategory: '',
    });
  };

  sortHogsBy = (category) => this.setState({ sortCategory: category });

  toggleFiltered = () => this.setState({ filtered: !this.state.filtered });

  toggleHogs = () => {
    let hogsArr = [...this.state.hogsList];
    // filtered
    if (this.state.filtered) hogsArr = hogsArr.filter((hog) => hog.greased);
    // sort by name
    if (this.state.sortCategory === 'name')
      hogsArr = hogsArr.sort((a, b) => a.name.localeCompare(b.name));
    // sort by weight
    if (this.state.sortCategory === 'weight')
      hogsArr = hogsArr.sort((a, b) => a.weight - b.weight);

    return hogsArr;
  };

  render() {
    return (
      <div className="App">
        <Nav
          resetHogs={this.resetHogs}
          sortHogsBy={this.sortHogsBy}
          toggleFiltered={this.toggleFiltered}
          toggleHogs={this.toggleHogs}
        />
        <HogHorde hogsList={this.toggleHogs()} />
      </div>
    );
  }
}

export default App;
