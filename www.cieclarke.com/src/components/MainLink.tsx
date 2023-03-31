import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export interface MainLinkProps {
  text: string;
  href: string;
}

export default class MainLink extends Component<MainLinkProps> {
  render() {
    return (
      <Link className='menu-link' to={this.props.href ?? '/'}>
        {this.props.text}
      </Link>
    );
  }
}
