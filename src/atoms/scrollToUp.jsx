import "../scrollToUp.css";

const ScrollToUp = () => {
  return (
    <>
      <div
        className="scroll"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <p>◀</p>
      </div>
    </>
  );
};

export default ScrollToUp;
