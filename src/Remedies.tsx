// Display remedies for chosen anxiety level

interface Props {
  remedies: string[];
}

function Remedies({ remedies }: Props) {
  return (
    <div>
      <h2>Anxiety is normal. Try these to reduce it: </h2>

      <div className='border'>
        {' '}
        {/* map through remedies and display */}
        {remedies.map((remedy, index) => (
          <h2 key={index}> {remedy} </h2>
        ))}
      </div>
    </div>
  );
}

export default Remedies;
