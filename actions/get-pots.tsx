import { Pot } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/pots`;

const getPots = async (): Promise<Pot[]> => {
    const res = await fetch(URL);
    
    return res.json();
};

export default getPots;