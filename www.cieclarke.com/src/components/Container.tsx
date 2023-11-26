import React from 'react';

import MainLink from './MainLink';
import HomeLink from './HomeLink';
import { Outlet } from 'react-router-dom';

export default function Container(): React.JSX.Element {
  return (
    <div id='site'>
      <div id='hero'></div>
      <div id='banner'>
        <HomeLink href='/' text='cieclarke' />
      </div>
      <div id='home-menu'>
        <nav>
          <div className='flex flex-row w-full'>
            <div className='flex-1 text-center'>
              <MainLink href='/photos' text='Photos' />
            </div>
          </div>
        </nav>
      </div>
      <div id='content'>
        <Outlet />
      </div>
    </div>
  );
}
