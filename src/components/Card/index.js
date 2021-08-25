export default function Card({ title, subTitle, children }) {
  return (
    <div className="card mt-3">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <h5 className="card-title">{subTitle}</h5>
        <hr />
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
}
