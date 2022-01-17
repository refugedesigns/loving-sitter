import { Review } from "../interface/Review"
const sumRating = (reviews?: Review[]) => {
    const ratings =
      reviews && reviews?.length > 0
        ? reviews?.map((review) => ((review.rating as number) * 100) / 5)
        : [];
    const finalRating =
      ratings.length > 0 &&
      Math.floor(
        (ratings as number[])?.reduce((curNum, prevNum) => curNum + prevNum) /
          ratings!.length
      );
      return finalRating
}

export default sumRating