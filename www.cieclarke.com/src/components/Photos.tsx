/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

const baseUrl = 'https://localhost:3000 ';

interface IProps {
  [key: string]: object | boolean;
}

interface Album {
  id: string;
  size_urls: string;
  title: { _content: string };
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

  componentDidMount() {
    this.loadRecentPhotos(new MouseEvent('init'), 3);
    this.loadAlbums();
  }

  loadAlbums() {
    fetch('/flickr/albums')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ albums: data });
        this.setState({ isAlbumsLoading: false });
      });
  }

  loadPhotos(e: MouseEvent, album: { id: string }) {
    e.preventDefault();
    fetch(baseUrl + '/flickr/photos/' + album.id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ photos: data });
        this.setState({ isPhotosLoading: false });
      });
    this.setState({ selectedAlbum: album });
  }

  loadRecentPhotos(e: MouseEvent, count: number) {
    e.preventDefault();
    fetch(baseUrl + '/flickr/recentphotos/' + count)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ photos: data });
        this.setState({ isPhotosLoading: false });
      });
    this.setState({ selectedAlbum: { id: 0 } });
  }

  goEvent(_e: MouseEvent | TouchEvent, href: string) {
    if (!this.state.isTouchMoved) {
      window.location.href = href;
    }
  }

  moveEvent() {
    this.setState({ isTouchMoved: true });
  }

  startEvent() {
    this.setState({ isTouchMoved: false });
  }

  renderLoader() {
    return <div>Loading</div>;
  }

  renderContent() {
    return (
      <div>
        <div className='flex flex-row w-full'>
          <div
            className={
              this.state.selectedAlbum.id === 0
                ? 'cc-photos-selected flex-1'
                : 'cc-photos flex-1'
            }
          >
            <a
              className='block h-full'
              href='#'
              onClick={(e) => {
                //this.loadRecentPhotos(e, 3);
              }}
            >
              Recent
            </a>
          </div>
          {this.state.albums.map((album) => (
            <div
              key={album.id}
              className={
                this.state.selectedAlbum.id === album.id
                  ? 'cc-photos-selected flex-1'
                  : 'cc-photos flex-1'
              }
            >
              <a
                className='block h-full'
                href='#'
                onClick={(e) => {
                  // this.loadPhotos(e, album);
                }}
              >
                {album.title._content}
              </a>
            </div>
          ))}
        </div>
        <div className='flex flex-col flex-wrap'>
          {this.state.photos.map((photo) => (
            <div key={photo.title} className='flex-grow flex-1'>
              <div
                onClick={(e) => {
                  // this.goEvent(e, photo.size_urls.url_m);
                }}
                onTouchEnd={(e) => {
                  // this.goEvent(e, photo.size_urls.url_m);
                }}
                onTouchStart={() => {
                  this.startEvent();
                }}
                onTouchMove={() => {
                  this.moveEvent();
                }}
                style={{
                  backgroundImage: "url('" + photo.size_urls.url_m + "')"
                }}
                className='bg-left-top bg-no-repeat bg-cover h-40 '
              >
                <div className='bg-gradient-to-r from-cornflowerblue-800'>
                  <p>{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        {this.state.isAlbumsLoading && this.state.isPhotosLoading
          ? this.renderLoader()
          : this.renderContent()}
      </>
    );
  }
}
