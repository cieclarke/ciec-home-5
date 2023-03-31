import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export interface HomeLinkProps {
  text: string;
  href: string;
}

export default class HomeLink extends Component<HomeLinkProps> {
  render() {
    return (
      <Link className='home-link' to={this.props.href ?? '/'}>
        {this.props.text}
      </Link>
    );
  }
}
