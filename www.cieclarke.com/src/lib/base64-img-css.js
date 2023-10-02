module.exports = function (source) {
  return `
    import React from 'react';
    export default function ImageDiv(props) { 
      return <div style={{height: props.height, width: '100px', backgroundImage: 'url("data:image/png;base64, ${source}")', backgroundSize: 'cover' }}></div>;
    };
`;
};
