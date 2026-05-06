export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <span className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-green-600" />
    </div>
  );
}