const split3 = (arr) => {
  const inc = Math.ceil(arr.length / 3);
  const inc2 = inc * 2;
  return [arr.slice(0, inc), arr.slice(inc, inc2), arr.slice(inc2)];
};

const Results = ({ res }) => {
  const cols = split3(res).map((col, i) => {
    return (
      <div key={i} className="col-12 col-md-6 col-lg-4">
        <ul className="list-unstyled">
          {col.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    );
  });

  return <div className="row">{cols}</div>;
};

export default Results;
