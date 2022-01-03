import { useState, ChangeEvent } from "react";

export default function useAvailability () {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [monChecked, setMonChecked] = useState<boolean>(false);
  const [tuesChecked, setTuesChecked] = useState<boolean>(false);
  const [wedChecked, setWedChecked] = useState<boolean>(false);
  const [thursChecked, setThursChecked] = useState<boolean>(false);
  const [friChecked, setFriChecked] = useState<boolean>(false);
  const [satChecked, setSatChecked] = useState<boolean>(false);
  const [sunChecked, setSunChecked] = useState<boolean>(false);

  const handleChangeAvailability = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAvailable(event.target.checked);
  };

  const monChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMonChecked(event.target.checked);
  };

  const tuesChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTuesChecked(event.target.checked);
  };

  const wedChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setWedChecked(event.target.checked);
  };

  const thursChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setThursChecked(event.target.checked);
  };

  const friChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFriChecked(event.target.checked);
  };

  const satChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSatChecked(event.target.checked);
  };

  const sunChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSunChecked(event.target.checked);
  };

  return {
    isAvailable,
    handleChangeAvailability,
    monChecked,
    monChangeHandler,
    tuesChecked,
    tuesChangeHandler,
    wedChecked,
    wedChangeHandler,
    thursChecked,
    thursChangeHandler,
    friChecked,
    friChangeHandler,
    satChecked,
    satChangeHandler,
    sunChecked, 
    sunChangeHandler
  }
}