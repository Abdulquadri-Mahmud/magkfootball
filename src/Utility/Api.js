// src/api.js
const baseUrl = 'https://fake-api-one-rust.vercel.app/api/order'; // Replace with your backend base URL

export const fetchOrders = async () => {
  const response = await fetch(`${baseUrl}/all_orders`);
  if (!response.ok) {
    throw new Error('Failed to fetch orders');
  }
  return response.json();
};

export const fetchOrderById = async (id) => {
  const response = await fetch(`${baseUrl}/orders/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch order by ID');
  }
  return response.json();
};

export const createOrder = async (orderData) => {
  const response = await fetch(`${baseUrl}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) {
    throw new Error('Failed to create order');
  }
  return response.json();
};

export const updateOrder = async (id, orderData) => {
  const response = await fetch(`${baseUrl}/orders/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) {
    throw new Error('Failed to update order');
  }
  return response.json();
};

export const deleteOrder = async (id) => {
  const response = await fetch(`${baseUrl}/orders/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete order');
  }
};
