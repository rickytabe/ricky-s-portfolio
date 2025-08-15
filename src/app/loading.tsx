
export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black  z-[9999] text-purple-500">
      {/* Spinner SVG */}
     <img src='/bars.svg' width={150} height={100}  />
    </div>
  );
}
