// Will display anxiety level scale for user to interact with
import './Levels.css';
import buddhaImage from './assets/buddha.png';

// With TS, define data type for function recieved as prop
// function takes a level which is a number type
// function returns nothing, ie void.
interface Props {
  onUpdateLevel: (level: number) => void;
}

function Levels({ onUpdateLevel }: Props) {
  const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className='levels-container'>
      <div>
        <h2>Hello! I'm glad you're here. <br></br>
        What is your current anxiety level? <br></br>
        (0 = calm , 10 = panic attack)
        </h2>
        
      </div>
      <div className='border'>
      
        {' '}
        {/* Add scale */}
        {/* Display each level as a button by looping through levels array; each should have event handler in case it's clicked */}
        {levels.map((level) => (
          <button className='btn-level' key={level} onClick={() => onUpdateLevel(level)}>
            {level}
          </button>
        ))}
      </div>
      <div>
        {' '}
        <img className='buddha' src={buddhaImage} alt='Image of a sitting buddha' />
      </div>
    </div>
  );
}

export default Levels;
