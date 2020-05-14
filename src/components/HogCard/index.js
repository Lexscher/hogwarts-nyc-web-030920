import React, { Component } from 'react';

const snakifyStr = (str) => str.split(' ').join('_').toLowerCase();
// class component

export default class HogCard extends Component {
    state = {
        clicked: false
    }

    toggleDetails = () => this.setState({ clicked: !this.state.clicked })

  render() {

    const {
      greased,
      'highest medal achieved': highest,
      name,
      specialty,
      weight,
    } = this.props.hogData;

    const imgPath = '/hog-imgs/' + snakifyStr(name) + '.jpg'

    const detailsJsx = (
        <div>
            <p>{greased ? 'greasy pig' : 'clean pig'}</p>
            <p>weight: {weight}</p>
            <p>specialty: {specialty}</p>
            <p>highest medal achieved: {highest}</p>
        </div>
    )

    const hogCardJsx = (
      <div className="ui eight wide column" onClick={this.toggleDetails}>
        <div className="pigTile">
            <img alt={'image of pig: ' + name} src={imgPath} />
            <h1>{name}</h1>
            {this.state.clicked && detailsJsx}
        </div>
      </div>
    );

    return hogCardJsx;
  }
}
