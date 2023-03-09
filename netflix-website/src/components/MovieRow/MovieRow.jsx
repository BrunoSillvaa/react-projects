import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./MovieRow.css";

export default ({ title, filmList }) => {
  return (
    <div className="list-row">
      <h2 className="list-title">{title}</h2>

      <div className="movie-listarea">
        <div className="list-left-arrow">
          <IoIosArrowBack style={{ fontSize: 50 }} />
        </div>

        <div className="movie-list">
          {filmList.results.length > 0 &&
            filmList.results.map((film, key) => {
              return (
                <div className="movie" key={key}>
                  <img
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                    alt={film.original_title}
                  />
                </div>
              );
            })}
        </div>

        <div className="list-right-arrow">
          <IoIosArrowForward style={{ fontSize: 50 }} />
        </div>
      </div>
    </div>
  );
};
