import { DogsittersApiData } from "../../interface/AuthApiData";
import { FetchOptions } from "../../interface/FetchOptions";

const fetchDogsitters = async (): Promise<DogsittersApiData> => {
  const fetchOptions: FetchOptions = {
    method: "GET",
    credentials: "include",
  };

  return await fetch(`${process.env.REACT_APP_BACKEND}/dogsitters`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again." },
    }));
};

export default fetchDogsitters