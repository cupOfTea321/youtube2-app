import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {Box} from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
    const  { id } = useParams()
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const fetchResults = async () => {
            const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

            setChannelDetail(data?.items[0]);

            const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

            setVideos(videosData?.items);
        };

        fetchResults();
    }, [id]);
    return (
        <Box minHeight={'95vh'}>
            <Box>
                <div style={{
                    height:'300px',
                    background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                    zIndex: 10,
                }}/>
                <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
            </Box>
            <Box display={'flex'} p={2}>
                <Box sx={{mr: {sm: '100px'}}}/>
                    <Videos videos={videos}/>
            </Box>
        </Box>
    );
};

export default ChannelDetail;