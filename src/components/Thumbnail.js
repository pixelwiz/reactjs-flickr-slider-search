import React from 'react';

const Thumbnail = props => (
  <img
    key={props.id}
    src={props.url}
    alt={props.title}
    index={props.index}
    onClick={() => props.onThumbnailClick(props.index)} 
    // This violates accessibility rules, need to add keyboard handling
    // ToDo: The function also really shoudl come from props
  />
);

export default Thumbnail;
