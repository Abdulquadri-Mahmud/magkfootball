import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function CancelOrder() {
  const [orderId, setOrderId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCancelOrder = async () => {
    try {
      setLoading(true);

      const url = `https://fake-api-one-rust.vercel.app/api/order/cancel_orders/${orderId}`; // Replace with your API endpoint

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        const errorDetails = await res.text();
        toast.error(`Failed to cancel order: ${errorDetails}`);
        return;
      }

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || 'Failed to cancel order');
        return;
      }

      toast.success('Order canceled successfully!');
      setShowModal(false); // Close the modal
    } catch (error) {
      toast.error(`Error: ${error.message || 'Failed to cancel order'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmCancel = () => {
    if (!orderId) {
      toast.error('Please enter a valid Order ID');
      return;
    }
    setShowModal(true); // Show confirmation modal
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-lg font-medium mb-4">Cancel Order</h2>
        <div className="mb-4">
          <label htmlFor="orderId" className="block text-sm font-medium mb-2">
            Order ID
          </label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter Order ID"
          />
        </div>
        <button
          onClick={handleConfirmCancel}
          className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
        >
          Cancel Order
        </button>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Confirm Cancellation</h3>
            <p className="text-sm mb-4">
              Are you sure you want to cancel the order with ID <strong>{orderId}</strong>? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="py-2 px-4 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                No, Keep Order
              </button>
              <button
                onClick={handleCancelOrder}
                className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-500"
              >
                {loading ? 'Canceling...' : 'Yes, Cancel'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
