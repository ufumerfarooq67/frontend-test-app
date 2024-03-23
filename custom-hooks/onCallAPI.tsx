import { onCallAPI } from "@/utils/functions";
import { IRequestProp } from "@/utils/interfaces";
import { useEffect, useState } from "react";

const useAPICall = (props: IRequestProp) => {
  const { pagination } = props;

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
      const response = await onCallAPI("", { pagination });

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
