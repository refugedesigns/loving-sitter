import { useCallback, useState } from "react";
import { FetchOptions } from "../../interface/FetchOptions";
import { AuthApiData } from "../../interface/AuthApiData";
import { useAppDispatch } from "../../store/hooks";
import { addUser } from "../../store/usersSlice";

const loginWithCookies = async (): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: "GET",
    credentials: "include",
  };

  return await fetch(`${process.env.REACT_APP_BACKEND}/auth/user`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again." },
    }));
};

export function useCookiesLogin(): {
  cookiesLogin: () => Promise<void>;
  error: string | null;
  isLoading: boolean;
} {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const cookiesLogin = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    const data = await loginWithCookies();

    if (data.error) {
      setError(data.error.message);
      setIsLoading(false);
    }

    if (data.success) {
      console.log(data.success);
      if (!data.success.user.isDogsitter) {
        dispatch(
          addUser({
            _id: data.success.user._id,
            name: data.success.user.name,
            email: data.success.user.email,
            profilePhoto: data.success.user.profilePhoto,
            isDogsitter: data.success.user.isDogsitter,
            imageGallery: data.success.user.imageGallery,
            payments: data.success.user.payments,
          })
        );
      } else {
        dispatch(
          addUser({
            _id: data.success.user._id,
            name: data.success.user.name,
            email: data.success.user.email,
            isDogsitter: data.success.user.isDogsitter,
            isAvailable: data.success.user.isAvailable,
            availability: data.success.user.availability,
            profilePhoto: data.success.user.profilePhoto,
            price: data.success.user.price,
          })
        );
      }
      setIsLoading(false);
      setError(null);
    }
  }, [dispatch]);

  return { cookiesLogin, error, isLoading };
}
