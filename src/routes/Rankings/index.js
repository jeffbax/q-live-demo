import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './rankings.css';

export default class Rankings extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Rankings', className)} {...props}>
        <h1>
          Rankings
        </h1>
      </div>
    );
  }
}
