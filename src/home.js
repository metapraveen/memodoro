import React from 'react';
import classNames from 'classnames/bind';
import { css } from 'emotion';

class Home extends React.Component {
  state = {
    isActive: false,
    task: '',
    time: 20,
    errors: {
      task: false,
      time: false
    }
  };

  render() {
    const { isActive, task, time, countdownTimer, errors } = this.state;

    if (isActive) {
      return (
        <div className={containerClass}>
          <div className={flexContainer}>
            <div className="task">
              <div className="label">current task </div>
              <div className="readonly-task">{task}</div>
            </div>

            <div className="time">
              <div className="label"> time left </div>
              <div className="readonly-task">{countdownTimer}</div>
            </div>

            <button className="discard" onClick={this.discardCurrentTask}>
              discard
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className={containerClass}>
          <div className={flexContainer}>
            <div className="task">
              <div className="label"> your next task </div>
              <input
                required
                value={task}
                onChange={this.handleTaskChange}
                className={classNames({ required: errors.task })}
              />
            </div>

            <div className="time">
              <div className="label"> time </div>
              <input
                type="number"
                required
                value={time}
                onChange={this.handleTimeChange}
                className={classNames({ required: errors.time })}
              />
            </div>

            <button onClick={this.startPromodoro}>start</button>
          </div>
        </div>
      );
    }
  }

  handleTaskChange = event => {
    this.setState({ task: event.target.value });
  };

  handleTimeChange = event => {
    this.setState({ time: event.target.value });
  };

  startPromodoro = () => {
    const { task, time } = this.state;

    if (!task || !time) {
      this.setState({
        errors: {
          task: !task,
          time: !time
        }
      });

      return;
    } else {
      this.setState({
        errors: {
          task: false,
          time: false
        }
      });
    }

    this.setState({
      isActive: true,
      countdownTimer: time
    });

    // keep decementing time by minutes once task starts
    setInterval(
      () =>
        this.setState({
          countdownTimer: this.state.countdownTimer - 1
        }),
      1000 * 60
    );
  };

  discardCurrentTask = () => {
    this.setState({
      isActive: false,
      task: '',
      time: 20
    });
  };
}

export default Home;

const containerClass = css`
  margin: 0 auto;
  width: 50%;
  margin-top: 5%;
`;

const flexContainer = css`
  display: flex;
  justify-content: space-around;

  input,
  .readonly-task {
    width: 100%;
    height: 35px;
    border-radious: 5%;
    font-family: monospace;
    padding: 5px;
    font-size: 14px;

    &.required {
      border: 1px solid red;
    }
  }

  .task {
    width: 60%;
  }

  .time {
    width: 10%;

    input {
      text-align: center;
    }
  }

  button {
    height: 35px;
    font-size: 15px;
    font-weight: 600;
    background-color: green;
    align-self: flex-end;

    &.discard {
      background-color: red;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .label {
    padding: 2px;
  }
`;
