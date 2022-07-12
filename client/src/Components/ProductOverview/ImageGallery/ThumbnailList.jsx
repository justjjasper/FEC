// The List of Thumbnail components

// Import stuff
import React, { useState, useEffect } from 'react';
import { ImageThumbnails, Arrow } from '../StyledComponents/ImageGallery/ImageThumbnails.jsx';
import Thumbnail from './Thumbnail.jsx';

// The list component itself
var ThumbnailList = (props) => {

  // The starting index of the 7 thumbnails that are being shown
  const [index, setIndex] = useState(0);
  // The 7 thumbnails that are being shown
  const [shown, setShown] = useState([]);

  // Whenever imageThumbnails changes, set the shown thumbnails
  useEffect(() => {
    setShown(props.imageThumbnails.slice(index, index + 7));
  }, [index, props.imageThumbnails])


  return (
    <ImageThumbnails>
      {index > 0 && <Arrow className="fa-solid fa-arrow-up" /> /* If the starting index is > 0, render an up arrow */}
      {shown.map((thumbnail, keyIndex = 0) => {
        return (
          <Thumbnail thumbnail={thumbnail} key={keyIndex++} setChosenImageUrl={props.setChosenImageUrl} />
          // If the thumbnail is the chosen one, render a bar under it to indicate that it's the chosen one
        );
      })}
      {index + 7 < props.imageThumbnails.length && <Arrow className="fa-solid fa-arrow-down" />/* If the starting index + 7 is < props.imageThumbnails.length, render a down arrow */}
    </ImageThumbnails>
  );
}

export default ThumbnailList;