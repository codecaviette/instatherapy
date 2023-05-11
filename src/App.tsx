import { useState } from 'react';
import './App.css';
import Remedies from './Remedies';
import Levels from './Levels';

interface remedies {
  [index: number]: string[];
  0: string[];
  1: string[];
  2: string[];
  3: string[];
  4: string[];
  5: string[];
  6: string[];
  7: string[];
  8: string[];
  9: string[];
  10: string[];
}

function App() {
  const [remedies, setRemedies] = useState<remedies>({
    0: [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 10 minutes',
    ],
    1: [
      'Breathe deeply',
      'Meditate for 20 minutes',
      'Exercise for 20 minutes',
    ],
    2: [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    3: [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    4: [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    5: [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    6: [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    7: [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    8: [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    9: [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    10: [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
  });

  const [level, setLevel] = useState<number>(0);

  // Define fxn to set/update level state based on input
  // Once passed to Levels as prop, need to include the following in Levels comp for receiving function as prop:
    // interface Props {
    //   onLevelChange: (level: number) => void;
    // }
  const updateLevel = ( selectedLevel: number ) => {
    console.log(selectedLevel)
    setLevel(selectedLevel);
  } 

  // Define fxn to filter for only remedies that match a given level; pass this as prop "remedies" to Remedies comp
  const remediesForSelectedLevel = ( selectedLevel:number ) => {
    return remedies[selectedLevel];
  }


  return (
    <div className='app'>
      <Levels onUpdateLevel={updateLevel} />  
      <Remedies remedies={remediesForSelectedLevel(level)} />
    </div>
  );
}

export default App;
