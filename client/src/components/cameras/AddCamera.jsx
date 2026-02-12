import React, { useState } from 'react';
import api from '../../api/api'; 
import toast from 'react-hot-toast';

const AddCamera = () => {
  const [formData, setFormData] = useState({ name: '', ipAddress: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the promise for the API call
    const cameraPromise = api.post('/cameras/add', formData);

    // toast.promise handles all three states automatically
    toast.promise(cameraPromise, {
      loading: 'Registering camera...',
      success: (res) => {
        setFormData({ name: '', ipAddress: '' }); // Clear form on success
        return `Camera "${formData.name}" added successfully!`;
      },
      error: (err) => {
        const errorMsg = err.response?.data?.error || 'Failed to connect to server';
        return <b>{errorMsg}</b>;
      },
    }, {
      // Style options
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-xl rounded-2xl mt-10 border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">New Camera</h2>
        <p className="text-gray-500 text-sm mt-2">Connect a new IP stream to your dashboard</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Display Name</label>
          <input
            type="text"
            placeholder="e.g. Main Laboratory"
            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Stream Endpoint (IP)</label>
          <input
            type="text"
            placeholder="http://10.145.8.95:5000/video"
            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            value={formData.ipAddress}
            onChange={(e) => setFormData({ ...formData, ipAddress: e.target.value })}
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-95"
        >
          Add to Network
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-xs text-center text-gray-400">
          Ensure the camera is on the same local subnet as this server.
        </p>
      </div>
    </div>
  );
};

export default AddCamera;