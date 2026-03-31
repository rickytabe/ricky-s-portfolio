// components/FullScreenLoader.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-[9999]">
      {/* Spinner SVG */}
      <img src="/bars.svg" alt="Loading"  />
    </div>
  );
}
