export const Square = ({ children, isSelected, updateBoard, index }) => {
    function handleClick() {
      updateBoard(index);
    }
  
    return (
      <div
        className={isSelected ? " square is-selected" : "square"}
        key={index}
        onClick={handleClick}
      >
        {children}
      </div>
    );
  };