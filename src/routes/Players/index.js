import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './players.css';

export default class Players extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Players', className)} {...props}>
        <h1>
          Players
        </h1>
      </div>
    );
  }
}
