import { useEffect, useState } from "react";
import { socket } from "../socket";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URI || "http://localhost:5000";

export const useLiveStats = () => {
  const [stats, setStats] = useState({
    totalKnown: 0,
    totalUnknown: 0,
  });

  useEffect(() => {
    // Initial fetch
    axios.get(`${API_URL}/api/stats/current`).then((res) => {
      setStats({
        totalKnown: res.data.totalKnown,
        totalUnknown: res.data.totalUnknown,
      });
    });

    // Realtime updates
    socket.on("stats:update", (data) => {
      setStats(data);
    });

    return () => {
      socket.off("stats:update");
    };
  }, []);

  return stats;
};