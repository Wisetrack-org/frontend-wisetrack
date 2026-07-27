export function Dialog({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
          <div>{children}</div>
          <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    );
  }
  
  export function DialogContent({ children }) {
    return <div className="p-4">{children}</div>;
  }
  
  export function DialogTitle({ children }) {
    return <h2 className="text-xl font-semibold">{children}</h2>;
  }
  