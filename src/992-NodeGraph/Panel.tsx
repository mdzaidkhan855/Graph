export default function Panel({ leafLabel }) {
  return (
    <div>
      <h3> ORM Input: {leafLabel}</h3>
      <input className="panelItem" type="text" placeholder="input from ORM" />
      <br />
      <input className="panelItem" type="text" placeholder="input from ORM" />
      <br />
      <input className="panelItem" type="text" placeholder="input from ORM" />
      <br />
      <input className="panelItem" type="text" placeholder="input from ORM" />
    </div>
  );
}
