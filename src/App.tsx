import { useState } from 'react';
import './App.css';
import Remedies from './Remedies';

interface remediesAllLevels {
  '0': string[];
  '1': string[];
  '2': string[];
  '3': string[];
  '4': string[];
  '5': string[];
  '6': string[];
  '7': string[];
  '8': string[];
  '9': string[];
  '10': string[];
}

function App() {
  const [remediesAllLevels, setRemediesAllLevels] = useState<remediesAllLevels>({
    '0': [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    '1': [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    '2': [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    '3': [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    '4': [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    '5': [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    '6': [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    '7': [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    '8': [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    '9': [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
    '10': [
      'Breathe deeply',
      'Meditate for 10 minutes',
      'Exercise for 20 minutes',
    ],
  });


  return (
    <div>
      <Remedies remediesSingleLevel={remediesAllLevels[0]} />
    </div>
  );
}

export default App;
