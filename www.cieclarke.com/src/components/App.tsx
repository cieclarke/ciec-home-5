import React from 'react';

const title = () => {
  return <h3>clarke</h3>;
};

export default class App extends React.Component {
  render() {
    return (
      <>
        <h1 className='text-primary text-4xl font-bold'>chris</h1>
        {title()}
      </>
    );
  }
}
