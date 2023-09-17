// src/components/Book.js

import React from 'react';
import FavouriteButton from './Buttons/Favourite';
import DownloadBtn from './Buttons/Download';
import BookMark from './SVG/BookMark';
import BookMarkFilled from './SVG/BookMarkFilled';
function Book(props) {
  return (
    <div class="card">
      <FavouriteButton

        addNewBook={props.añadirLibro}
        book={props.book}
        Svg = {Array.isArray(props.libreria) && props.libreria.includes(props.book) ? <BookMarkFilled/> : <BookMark />}

      />
      <div class="card-image">


        <a href={props.cover} target="_blank" ><img src={props.cover} /></a>

      </div>
      <div class="category">{props.title}</div>
      <div class="btn-container">


        {/* <DownloadBtn
          downloadFile={props.file}

        /> */}

      </div>
    </div>

  );
}

export default Book;
