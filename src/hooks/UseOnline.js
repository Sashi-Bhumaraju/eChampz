import  { useState, useEffect } from "react";

function useOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const onlineHandler = () => {
      setIsOnline(true);
      console.log(" inside online event")
    };

    const offlineHandler = () => {
      setIsOnline(false);
      console.log(" inside offline event")
    };

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  return isOnline;
}

export default useOnline;
