// Display remedies for chosen anxiety level

interface Props {
  remediesSingleLevel: string[];
}

function Remedies({ remediesSingleLevel }: Props) {
  return (
    <div>
      <h2>Anxiety is normal. Try these to reduce it: </h2>

      {/* map through remedies and display */}
      {remediesSingleLevel.map((remedy, index) => (
        <div key={index}> {remedy} </div>
      ))}
    </div>
  );
}

export default Remedies;
