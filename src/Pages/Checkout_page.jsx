import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateFailure, updateStart, updateSuccess } from "../store/user/userReducer";

export default function Checkout_page() {
  const id = useParams();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        address: "",
        city: "",
        state: "",
      });

      const {currentUser} = useSelector((state) => state.user);

      const name = `${currentUser.firstname} ${currentUser.lastname}`;
      const address = currentUser.address;
      const city = currentUser.city;
      const state = currentUser.city;

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          dispatch(updateStart());

          const updateuser_api = `https://fake-api-one-rust.vercel.app/api/user/auth/update_user/${id}`;
  
          const res = await fetch(updateuser_api, {
              method : 'PATCH',
              headers : {'Content-Type' : 'application/json'},
              body : JSON.stringify(formData),
          });
  
          const data = await res.json();
  
          if (data.success === false) {
              dispatch(updateFailure(data.message));
              console.log(data.message);
              
              return;
          }
          
          dispatch(updateSuccess(data));

      } catch (error) {
          dispatch(updateFailure(error));
      }
      };
    
      return (
        <div className="bg-zinc-100 py-6">
          <div className="md:py-10 py-5 bg-white rounded-md px-5 2xl:max-w-[80%] xl:max-w-[70%] lg:max-w-[100%] max-w-[97%] mx-auto ">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">Billing Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    required
                    defaultValue={name}
                    className="w-full p-2 border font-medium border-gray-300 rounded mt-1 outline-none"
                    placeholder="John Doe"
                   />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Email</label>
                  <input type="email" name="email" onChange={handleChange} required defaultValue={currentUser.email}
                    className="w-full p-2 border border-gray-300 rounded font-medium mt-1 outline-none"
                    placeholder="johndoe@example.com" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-600">Address</label>
                  <input
                    type="text"
                    name="address"
                    onChange={handleChange}
                    defaultValue={currentUser.address}
                    required
                    className="w-full p-2 border font-medium border-gray-300 rounded mt-1 outline-none"
                    placeholder="123 Main St"
                   />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1 outline-none"
                    placeholder="New York"
                   />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1 outline-none"
                    placeholder="NY"
                   />
                </div>
                {/* <div>
                  <label className="block text-sm font-medium text-gray-600">ZIP</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1 outline-none"
                    placeholder="10001"
                   />
                </div> */}
              </div>
    
              {/* <h2 className="text-lg font-semibold text-gray-700">Payment Information</h2>
              <div>
                <label className="block text-sm font-medium text-gray-600">Name on Card</label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded mt-1 outline-none"
                  placeholder="John Doe"
                 />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded mt-1 outline-none"
                  placeholder="1234 5678 9101 1121"
                 />
              </div> */}
              {/* <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Expiry Date</label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1 outline-none"
                    placeholder="MM/YY"
                   />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1 outline-none"
                    placeholder="123"
                   />
                </div>
              </div> */}
    
              <button
                type="submit"
                className="w-full font-medium bg-blue-600  text-white p-2 rounded shadow hover:bg-blue-700 transition"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
    );
}
