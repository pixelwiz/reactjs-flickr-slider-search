import React from 'react';
import Thumbnail from './Thumbnail';

const Thumbnails = (props) => {
  const { thumbnails, onThumbnailClick } = props;
  const thumbnailHTML = thumbnails.map((item, index) => (
    <Thumbnail
      key={`t_${item.id}`}
      url={item.url}
      title={item.title}
      index={index}
      onThumbnailClick={onThumbnailClick}
    />
  ));
  return thumbnailHTML;
};

export default Thumbnails;
