import { useState } from "react";
import "./example.css";

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Rate my Website:</h2>
      {[...Array(totalStars)].map((_, i) => (
        <span
          key={i}
          style={{
            cursor: "pointer",
            color: i < selectedStars ? "gold" : "gray",
            fontSize: "2rem",
          }}
          onClick={() => setSelectedStars(i + 1)}
          onMouseOver={() => setSelectedStars(i + 1)}
          onMouseOut={() => setSelectedStars(selectedStars)}
        >
          ★
        </span>
      ))}
      <p>{selectedStars} of {totalStars} stars</p>
      <button type="submit">Submit</button>
      {submitted && <p>submitted!</p>}
    </form>
  );
}