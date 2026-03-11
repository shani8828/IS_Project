import { io } from "socket.io-client";
import { useEffect } from "react";

useEffect(() => {
  const socket = io("http://localhost:5000");

  socket.on("countUpdate", (data) => {
    console.log("Live count:", data);
  });

  return () => socket.disconnect();
}, []);