import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './servers.css';

export default class Servers extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Servers', className)} {...props}>
        <h1>
          Servers
        </h1>
      </div>
    );
  }
}
