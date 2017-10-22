import React from 'react';
import Thumbnail from './Thumbnail';

const Thumbnails = (props) => {
  const { thumbnails } = props;
  const thumbnailHTML = thumbnails.map(i =>
    <Thumbnail key={`t_${i.id}`} url={i.url} title={i.title} />);
  return thumbnailHTML;
};

export default Thumbnails;
