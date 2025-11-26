// src/components/PrintButton.jsx
export default function PrintButton({ label = "PDF로 저장" }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="no-print inline-flex items-center rounded-lg border border-neutral-300 dark:border-neutral-700 px-3 py-1.5 text-xs font-medium hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 transition"
    >
      {label}
    </button>
  );
}
