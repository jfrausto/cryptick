import { useState, useEffect } from "react";

interface CryptoNames {
    id: string,
    name: string
};

const Pagination = () => {
    const [posts, setPosts] = useState< CryptoNames[] | null >(null);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect( () => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await fetch("https://api.pro.coinbase.com/currencies");
            const data = await res.json();
            const namesArray: CryptoNames[] = [];
            data.forEach((element: { id: string; name: string; }) => namesArray.push({
                id: element.id,
                name: element.name
            }));
            setPosts(namesArray);
            setLoading(false);
        }

        fetchPosts();
    }, []);
console.log(posts);

    return (
           <h1>
        Hi Mom
    </h1>
    )
}

export default Pagination;