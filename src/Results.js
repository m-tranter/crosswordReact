import { splitN } from "./splitN";

const Results = ({ res }) => {
  const cols = splitN(res, 3).map((col, i) => {
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

  return <div className="row gy-0">{cols}</div>;
};

export default Results;
