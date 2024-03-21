import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
export interface AnnouncementData {
  _id: number;
  name: string;
  subject: string;
  text: string;
  img: string;
}
interface ErrorResponse {
  message: string;
}
const useFetchAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<AnnouncementData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const announcementsURL =
    "https://dashboard-backend-b9ug.onrender.com/api/v1/announcements/";
  const fetchData = async () => {
    try {
      const response = await axios.get(announcementsURL);
      setAnnouncements(response.data);
      setLoading(false);
    } catch (error) {
      const errorResponse = error as AxiosError<ErrorResponse>;
      setError(
        errorResponse.response?.data?.message ||
          "An error occurred during Fetching Chats"
      );
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { error, announcements, loading, fetchData };
};

export default useFetchAnnouncements;
