// Display remedies for chosen anxiety level

interface Props {
  remedies: string[];
}

function Remedies({ remedies }: Props) {
  return (
    <div>
      <h2>Anxiety is normal. Try these to reduce it: </h2>

      {/* map through remedies and display */}
      {remedies.map((remedy, index) => (
        <div key={index}> {remedy} </div>
      ))}
    </div>
  );
}

export default Remedies;
