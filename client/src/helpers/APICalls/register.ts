import { FetchOptions } from "../../interface/FetchOptions"
import { AuthApiData } from "../../interface/AuthApiData"

const register = async(name: string, email: string, password: string): Promise<AuthApiData> => {
  const fetchOptions: FetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name, email, password}),
    credentials: "include"
  }
  
  return await fetch("/auth/signup", fetchOptions).then(res => res.json()).catch(() => ({
    error: {message: "Unable to connect to server, please try again."}
  }))
}

export default register