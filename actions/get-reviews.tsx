import { Review } from "@/types"; 

const URL = `${process.env.NEXT_PUBLIC_API_URL}/reviews`;

const getReviews = async (): Promise<Review[]> => {
    const res = await fetch(URL);

    return res.json();
};

export default getReviews;