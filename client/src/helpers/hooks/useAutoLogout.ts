import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import { removeUser } from "../../store/usersSlice"

type expiryDate = string | number | Date;

export const useAutoLogout = () => {
  const dispatch = useAppDispatch();
  const expiryDate = localStorage.getItem("expiryDate") as expiryDate;

  const logout = useCallback(() => {
    if (new Date(expiryDate) <= new Date()) {
      dispatch(removeUser());
      return;
    }
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();

    const timer = setTimeout(() => {
      dispatch(removeUser());
    }, remainingMilliseconds);

    return () => {
      clearTimeout(timer);
    };
  }, [expiryDate, dispatch]);

  return { logout}
};
