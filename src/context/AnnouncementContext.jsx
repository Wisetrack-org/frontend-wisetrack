import { createContext, useContext, useState } from "react";

// Create context
const AnnouncementContext = createContext();

// Custom hook to use context
export const useAnnouncements = () => useContext(AnnouncementContext);

// Provider component
export const AnnouncementProvider = ({ children }) => {
  const [announcements, setAnnouncements] = useState([]);

  // Function to add a new announcement
  const addAnnouncement = (announcement) => {
    const updatedAnnouncements = [...announcements, announcement];
    setAnnouncements(updatedAnnouncements);
    localStorage.setItem("announcements", JSON.stringify(updatedAnnouncements)); // Persist in local storage
  };

  // Load announcements from local storage on mount
  useState(() => {
    const storedAnnouncements = JSON.parse(localStorage.getItem("announcements")) || [];
    setAnnouncements(storedAnnouncements);
  }, []);

  return (
    <AnnouncementContext.Provider value={{ announcements, addAnnouncement }}>
      {children}
    </AnnouncementContext.Provider>
  );
};
