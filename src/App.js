import "./App.css";

function App({ data }) {
  return (
    <>
      <h2> Kalvium Gallery </h2>
      <div id="grid">
        {data.map((e) => {
          return <img className="image" src={e.img} id={e.id} />;
        })}
      </div>
    </>
  );
}

export default App;
