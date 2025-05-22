export function AnimalList() {
  const animalInfos = [
    { type: "Malayan Tiger", count: 787 },
    { type: "Mountain Gorilla", count: 212 },
    { type: "Fin Whale", count: 28 },
  ];
  return (
    <div className="animal-list">
      <h2>Rare Animals</h2>
      <table>
        <tbody>
          {animalInfos.map((animal, idx) => (
            <tr key={animal + idx}>
              <th>{animal.type}</th>
              <th>{animal.count}</th>
              <th>
                <a href={`https://www.google.com/search?q= ${animal.type}`}>
                  Search
                </a>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
