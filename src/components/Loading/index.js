export default function Loading({ isLoading = true }) {
  if (!isLoading) return null;
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Carregando</span>
      </div>
    </div>
  );
}
