import React from 'react';

const Thumbnail = props => <img key={props.id} src={props.url} alt={props.title} />;

export default Thumbnail;
