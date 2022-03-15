import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const FeedPage = () => {
    useUnprotectedPage();

    return (
        <>
        <h1>Feed</h1>
        </>
    );
};
export default FeedPage;