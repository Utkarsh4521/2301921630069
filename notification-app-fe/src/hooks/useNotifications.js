import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
  try {
    const data = await fetchNotifications();

    setNotifications(data.notifications ?? []);
    setTotal(data.notifications?.length ?? 0);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

load();
  }, []);

  const totalPages = Math.ceil(total / 10);

  return { notifications,total,totalPages,loading,error};
}
