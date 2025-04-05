import "./dotscomponent.css";

export const DotsComponent = ({ totalItems, currentDot, onDotClick }) => {
  const maxDots = 10;
  const totalDots = Math.min(totalItems, maxDots);

  return (
    <div className="dots-container">
      {Array.from({ length: totalDots }, (_, index) => (
        <span
          key={index}
          className={`dot ${currentDot === index ? "active" : ""}`}
          onClick={() => {
            onDotClick(index);
          }}
        />
      ))}
    </div>
  );
};
