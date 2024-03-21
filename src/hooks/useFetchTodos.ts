import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
export interface todoData {
  _id: string;
  title: string;
  type: string;
  course: string;
  topic: string;
  due: string;
  status: string;
}
interface ErrorResponse {
  message: string;
}
const useFetchTodos = () => {
  const [todos, setTodos] = useState<todoData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const announcementsURL =
    "https://dashboard-backend-b9ug.onrender.com/api/v1/todos/";
  const fetchData = async () => {
    try {
      const response = await axios.get(announcementsURL);
      setTodos(response.data);
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

  return { error, todos, loading, fetchData };
};

export default useFetchTodos;
