// Will display anxiety level scale for user to interact with

// With TS, define data type for function recieved as prop
// function takes a level which is a number type
// function returns nothing, ie void.
interface Props {
  onUpdateLevel: (level: number) => void;
}

function Levels({ onUpdateLevel }: Props) {
  const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <h2>What is your current anxiety level?</h2>

      {/* Add scale */}
      {/* Display each level as a button by looping through levels array; each should have event handler in case it's clicked */}
      {levels.map((level) => (
        <button key={level} onClick={() => onUpdateLevel(level)}>
          {level}
        </button>
      ))}
    </div>
  );
}

export default Levels;
