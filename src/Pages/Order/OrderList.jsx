import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchOrders } from '../../Utility/Api';

export default function OrderList() {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const { data } = await fetchOrders();
    setOrders(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      await deleteOrder(id);
      setOrders((prev) => prev.filter((order) => order._id !== id));
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <Link to="/create-order">Create New Order</Link>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Total Payment</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.phone}</td>
              <td>{new Date(order.date).toLocaleDateString()}</td>
              <td>{order.totalPayment}</td>
              <td>{order.status}</td>
              <td>
                <Link to={`/edit-order/${order._id}`}>Edit</Link>
                <button onClick={() => handleDelete(order._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
