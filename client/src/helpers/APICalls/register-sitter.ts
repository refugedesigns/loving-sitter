import { FetchOptions } from "../../interface/FetchOptions";
import { AuthApiData } from "../../interface/AuthApiData";
import { Availability } from "../../interface/Availability";

const registerSitter = async (
  isAvailable: boolean,
  availability: Availability,
  price: number
): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isAvailable, availability, price }),
    credentials: "include",
  };

  return await fetch(
    `${process.env.REACT_APP_BACKEND}/auth/register-dogsitter`,
    fetchOptions
  )
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server, please try again." },
    }));
};

export default registerSitter;
