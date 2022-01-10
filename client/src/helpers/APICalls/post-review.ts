import { FetchOptions } from "../../interface/FetchOptions"
import { ReviewApiData } from "../../interface/Review";

const postReview = async(rating: number, review: string, id: string): Promise<ReviewApiData> => {
    const fetchOptions: FetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating, message: review }),
      credentials: "include",
    };

    return await fetch(`${process.env.REACT_APP_BACKEND}/dogsitters/${id}/review`, fetchOptions).then(res => res.json()).catch(() => ({
        error: {
            message: "Unable to connect to server please try again."
        }
    }));
}

export default postReview