import { useHttp } from "../hooks/http.hook";

const useCoffeeService = () => {
    const request = useHttp();

    const getBestCoffee = async () => {
        const res = await request(`http://localhost:3001/best-coffee`);
        return res;
    }

    const getCoffee = async () => {
        const res = await request(`http://localhost:3001/coffee`);
        return res;
    }

    const getCoffeeItem = async (id) => {
        const res = await request(`http://localhost:3001/coffee/${id}`);
        return res;
    }

    return {getBestCoffee, getCoffee, getCoffeeItem};
}

export default useCoffeeService;