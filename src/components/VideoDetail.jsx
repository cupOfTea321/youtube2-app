import React, {useEffect, useState} from 'react';
import {Box, Stack} from "@mui/material";
import ReactPlayer from "react-player";
import {useParams} from "react-router-dom";
import {fetchFromAPI} from "../utils/fetchFromAPI";

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        fetchFromAPI(`video?part=snippet,statistics&id-${id}`)
            .then((data) => setVideoDetail(data.items[0]))
    }, [id])
    return (
        <Box minHeight='95vh'>
            <Stack direction={{xs: 'column', md: 'row'}}>
                <Box flex={1}>
                    <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}/>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetail;