import React, { useState } from 'react';
import api from '../../api/api';
import toast from 'react-hot-toast';
import { UserPlus, Image as ImageIcon, Trash2, ShieldCheck } from 'lucide-react';

export default function AddPersonForm() {
  const [formData, setFormData] = useState({ name: '', position: 'Staff' });
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (images.length < 10) {
      return toast.error(`Please add at least ${10 - images.length} more images for better recognition.`);
    }

    const personPromise = api.post('/people/add', { ...formData, images });

    toast.promise(personPromise, {
      loading: 'Processing embeddings and saving...',
      success: () => {
        setFormData({ name: '', position: 'Staff' });
        setImages([]);
        return "Person registered successfully!";
      },
      error: (err) => err.response?.data?.error || "Registration failed",
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 rounded-3xl bg-gradient-to-br from-indigo-50 via-purple-50 to-sky-50 backdrop-blur-xl border border-gray-200/30 shadow-2xl animate-fade-in">
      
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-indigo-700 tracking-tight">Add Known Person</h2>
          <p className="text-gray-500 text-sm italic">Facial Recognition Enrollment</p>
        </div>
        <div className={`px-4 py-2 rounded-2xl font-bold text-xs ${images.length >= 10 ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
          {images.length}/10 Images
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-200 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all"
              placeholder="e.g., Shani Maurya"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          {/* Position Selector */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Position</label>
            <select
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-200 outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all"
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            >
              <option value="Owner">Owner</option>
              <option value="Manager">Manager</option>
              <option value="Staff">Staff</option>
              <option value="Student">Student</option>
            </select>
          </div>
        </div>

        {/* Image Upload Grid */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
            <ImageIcon size={16} /> Dataset Collection (Min. 10 Images)
          </label>
          
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 p-4 bg-white/40 rounded-2xl border border-dashed border-gray-300">
            {images.map((img, index) => (
              <div key={index} className="group relative aspect-square rounded-lg overflow-hidden border-2 border-white shadow-sm">
                <img src={img} alt="face" className="w-full h-full object-cover" />
                <button 
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={18} className="text-white" />
                </button>
              </div>
            ))}
            
            <label className="flex flex-col items-center justify-center aspect-square bg-white/80 rounded-lg cursor-pointer hover:bg-indigo-50 border-2 border-dashed border-indigo-200 text-indigo-500 transition-all">
              <UserPlus size={24} />
              <input type="file" multiple className="hidden" accept="image/*" onChange={handleImageChange} />
            </label>
          </div>
        </div>

        <button 
          type="submit"
          disabled={images.length < 10}
          className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 ${
            images.length >= 10 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200 active:scale-95' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShieldCheck size={22} />
          Finalize Enrollment
        </button>
      </form>

      <p className="mt-6 text-[11px] text-gray-400 text-center leading-relaxed">
        * Please ensure images cover <b>front profile, side profiles, and varied lighting</b>. <br/>
        The system requires at least 10 high-quality samples to generate a reliable face embedding.
      </p>
    </div>
  );
}