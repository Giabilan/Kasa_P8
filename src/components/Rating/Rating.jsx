import React from "react";

const Rating = ({ rating }) => {
  // rating du fichier .json
  const currentNoteRedStars = rating;
  //
  const emptyNoteGreyStars = 5 - currentNoteRedStars;

  const displayRating = () => {
    const stars = [];

    for (let i = 0; i < currentNoteRedStars; i++) {
      stars.push(
        <i
          key={`currentNoteRedStars_${i}`}
          className="fa-solid fa-star currentNoteRedStars"
        ></i>
      );
    }

    for (let j = 0; j < emptyNoteGreyStars; j++) {
      stars.push(
        <i key={`emptyNoteGreyStars_${j}`} className="fa-solid fa-star emptyNoteGreyStars"></i>
      );
    }

    return stars;
  };

  return <div className="displayRating">{displayRating()}</div>;
};

export default Rating;
