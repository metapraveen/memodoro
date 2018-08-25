import React from 'react';

class Home extends React.Component {
  state = {
    task: '',
    time: 20
  };

  render() {
    return (
      <React.Fragment>
        <input value={this.state.task} onChange={this.handleTaskChange} />
        <input value={this.state.time} onChange={this.handleTimeChange} />
        <div>start</div>
      </React.Fragment>
    );
  }

  handleTaskChange = event => {
    this.setState({ task: event.target.value });
  };

  handleTimeChange = event => {
    this.setState({ time: event.target.value });
  };
}

export default Home;
