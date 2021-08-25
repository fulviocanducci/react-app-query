export default function Error({ message = "Error" }) {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show mt-3"
      role="alert"
    >
      <strong>Atenção: </strong> {message}
    </div>
  );
}
