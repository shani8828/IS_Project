import React, { useState, useEffect } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import CameraCard from "../components/cameras/CameraCard";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import api from "../api/api"; // Path to your axios instance
import toast from "react-hot-toast";
import CameraGrid from "../components/dashboard/CameraGrid";

export default function Cameras() {
  const [cameras, setCameras] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch cameras from backend on component mount
  useEffect(() => {
    const fetchCameras = async () => {
      try {
        setLoading(true);
        const response = await api.get("/cameras/all");
        // Assuming your backend returns an array of camera objects
        setCameras(response.data);
      } catch (err) {
        console.error("Error fetching cameras:", err);
        toast.error("Failed to load cameras. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchCameras();
  }, []);

  const handleClick = () => {
    navigate("/add-camera");
  };

  return (
    <PageWrapper>
      {/* Page header */}
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 tracking-wide">
            Cameras
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Real-time camera overview
          </p>
        </div>
      </header>

      {/* Cameras grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : cameras.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cameras.map((cam) => (
            // Ensure CameraCard uses cam._id (MongoDB) or cam.id
            <CameraCard key={cam._id || cam.id} camera={cam} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 text-lg">
            No cameras found. Add your first one!
          </p>
        </div>
      )}
      <CameraGrid />
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 shadow-2xl rounded-full">
        <Button label="Add a new Camera" onClick={handleClick} />
      </div>
    </PageWrapper>
  );
}
