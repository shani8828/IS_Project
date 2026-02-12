import { useEffect, useState } from "react";
import { socket } from "../../socket";

export default function EventFeed() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    socket.on("eventUpdate", (data) => {
      setEvents((prev) => [data, ...prev.slice(0, 9)]);
    });

    return () => {
      socket.off("eventUpdate");
    };
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-xl mb-4">Recent Events</h2>
      <ul>
        {events.map((e, index) => (
          <li key={index} className="mb-2">
            {e.is_known ? "Known" : "Unknown"} → {e.person_id}
          </li>
        ))}
      </ul>
    </div>
  );
}