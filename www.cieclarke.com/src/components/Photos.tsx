import React from 'react';

const baseUrl = 'http://localhost:8080';

interface IProps {
  [key: string]: object | boolean;
}

interface Album {
  id: string;
  url: string;
}

interface Photo {
  id: string;
  size_urls: { url_m: string };
  title: string;
}

interface IState {
  photos: Photo[];
  albums: Album[];
  selectedAlbum: { id: string | number };
  isPhotosLoading: boolean;
  isAlbumsLoading: boolean;
  isTouchMoved: boolean;
}

export default class Photos extends React.Component<IProps, IState> {
  static displayName = Photos.name;

  constructor(props: IProps) {
    super(props);
    this.state = {
      photos: [],
      albums: [],
      selectedAlbum: { id: 0 },
      isPhotosLoading: true,
      isAlbumsLoading: true,
      isTouchMoved: false
    };
  }

  async componentDidMount() {
    //this.loadRecentPhotos(new MouseEvent('init'), 3);
    await this.loadAlbums();
  }

  async loadAlbums() {
    const albums: Album[] = await (await fetch(`${baseUrl}/albums`)).json();
    this.setState({ albums: albums });
  }

  renderContent() {
    return (
      <div>
        <div className='flex flex-row w-full'>
          {this.state.albums.map((album) => (
            <div key={album.id} className='cc-photos flex-1'>
              <img src={album.url} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return <>{this.renderContent()}</>;
  }
}
