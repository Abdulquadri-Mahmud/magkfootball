import React, { useState } from "react";

const Checkout = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [orderDetails, setOrderDetails] = useState("");
  const ownerEmail = "owner@example.com";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleOrderChange = (e) => {
    setOrderDetails(e.target.value);
  };

  const handleSendOrder = () => {
    const subject = `New Order from ${userDetails.name}`;
    const body = `
      Customer Details:
      Name: ${userDetails.name}
      Email: ${userDetails.email}
      Phone: ${userDetails.phone}

      Order Details:
      ${orderDetails}
    `;

    const mailtoLink = `mailto:${ownerEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* User Details Form */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={userDetails.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Order Details */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mt-6">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        <textarea
          value={orderDetails}
          onChange={handleOrderChange}
          placeholder="Enter your order details here..."
          className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        ></textarea>
      </div>

      {/* Send Order Button */}
      <button
        onClick={handleSendOrder}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md mt-6 hover:bg-blue-600"
      >
        Send Order
      </button>
    </div>
  );
};

export default Checkout;
