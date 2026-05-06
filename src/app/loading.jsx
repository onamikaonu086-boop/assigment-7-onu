export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <span className="loading loading-spinner text-success" />
    </div>
  );
}