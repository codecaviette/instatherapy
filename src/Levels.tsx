// Will display anxiety level scale for user to interact with

// With TS, define data type for function recieved as prop 
    // function takes a level which is a number type
    // function returns nothing, ie void.
interface Props {
    onSubmit: (level: number) => void;
}

function Levels({ onSubmit } : Props ) {
  return (
    <div>
      <h2>What is your current anxiety level?</h2>
      {/* Add scale */}

      {}
    </div>
  );
}

export default Levels;
