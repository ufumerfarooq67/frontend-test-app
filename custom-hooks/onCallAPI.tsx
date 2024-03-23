import { onCallAPI } from "@/utils/functions";
import { IRequestProp } from "@/utils/interfaces";
import { useEffect, useState } from "react";

// Hook to handle API calls

const useAPICall = (props: IRequestProp) => {
  const { url = "", pagination } = props;

  // States
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  // API

  const onRequest = async () => {
    setLoading(true);
    setError("");

    try {
      // Make the API call to authenticate
      const response = await onCallAPI(url, pagination);
      console.log({ response });

      // Check the response and set the authentication status
      if (response?.results?.length > 0) {
        setData(response?.results);
        setLoading(false);
        return true;
      } else {
        setData([]);
        setError(response?.error ?? "Data fetch failed.");
        setLoading(false);
      }
    } catch (error) {
      setData([]);
      setError("An error occurred during authentication.");
    }

    setLoading(false);
  };

  useEffect(() => {
    onRequest();
  }, [pagination.page, pagination.results]);

  return { isLoading, error, data, onRequest };
};

export default useAPICall;
