import { User } from "../../interface/User"
import { AuthApiData } from "../../interface/AuthApiData";
import { FetchOptions } from "../../interface/FetchOptions";

const fetchDogsitter = async (id: string): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: "GET",
    credentials: "include",
  };

  return await fetch(
    `${process.env.REACT_APP_BACKEND}/dogsitters/${id}`,
    fetchOptions
  )
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again." },
    }));
};

export default fetchDogsitter;
