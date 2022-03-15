import { CircularProgress, Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import header, { mainHeader } from "../../constants/headers";
import { baseUrl } from "../../constants/urls";
import useRequest from "../../hooks/useRequest";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const FeedPage = () => {
    useUnprotectedPage();
    const [requestData, isLoading] = useRequest();
    const [viewFeed, setViewFeed] = useState([]);
    const [ search, setSearch ] = useState('');

	const onSearch = (e) => {
		setSearch(e.target.value)
	}

    const getFeed = async () => {
            const feed = await requestData(`${baseUrl}restaurants`, 'get', mainHeader);
            setViewFeed(feed.restaurants)
    };

    useEffect(() => {
        getFeed();
    }, [])

    return (
        <>
        <h1>Feed</h1>
        <Input placeholder="Filtre por nome e categoria" value={search} onChange={onSearch}/>

        {viewFeed ? viewFeed.filter((info) => {
            return info.name.toLowerCase().includes(search.toLowerCase()) ||
            info.category.toLowerCase().includes(search.toLowerCase())
        })
        .map((info) => {
            return <div key={info.id}>
            <img src={info.logoUrl} alt="Imagem da foto" />
            <div>
                <p>{info.name}</p>
                <p>{info.deliveryTime} min</p>
            </div>
            <div>
                <p>Frete R${info.deliveryTime},00</p>
            </div>
        </div>
        }) : <p>Carregando</p>}
        </>
    );
};
export default FeedPage;