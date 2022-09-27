import { useEffect, useState } from "react";

const useLoadStocks = (link) => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch(link)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[link]);
    return [products, setProducts];
};

export default useLoadStocks;