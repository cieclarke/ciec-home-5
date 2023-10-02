import React from 'react';
import ImageDiv1 from '../image_store/GOPR0370.JPG';

export default class Photos extends React.Component<any> {
  constructor(props: string) {
    super(props);
  }

  async componentDidMount() {}

  renderContent() {
    return (
      <div className='bg_lola_img lola_test'>
        <ImageDiv1 height='100px' />
      </div>
    );
  }

  render() {
    return <>{this.renderContent()}</>;
  }
}
