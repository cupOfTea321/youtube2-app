import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import ReactPlayer from "react-player";
import {Link, useParams} from "react-router-dom";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {CheckCircle} from "@mui/icons-material";
import Videos from "./Videos";

const VideoDetail = () => {
    const [videos, setVideos] = useState(null)
    const [videoDetail, setVideoDetail] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]))
        fetchFromAPI(`search?part=snippet&relatedTovideoId=${id}&type=video`)
            .then((data) => setVideos(data.items))
    }, [id])

    if (!videoDetail?.snippet) return 'Loading...'
    const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail
    return (
        <Box minHeight='95vh'>
            <Stack direction={{xs: 'column', md: 'row'}}>
                <Box flex={1}>
                    <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
                        <ReactPlayer
                            className={'react-player'}
                            url={`https://www.youtube.com/watch?v=${id}`}
                            controls
                        />
                        <Typography color={'white'} variant={'h5'} fontWeight={'bold'}
                        p={2}>
                            {title}
                        </Typography>
                        <Stack direction={'row'} justifyContent={'space-between'} sx={{
                            color: 'white'}} py={1} px={2}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{sm: 'subtitle1', md: 'h6'}}
                                color={'white'}>
                                    {channelTitle}
                                    <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                                </Typography>
                            </Link>
                            <Stack gap={'20px'} alignItems={'center'} direction={'row'}>
                                <Typography variant={'body1'} sx={{ opacity: 0.7}}  >
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant={'body2'}  sx={{ opacity: 0.7}}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{md: 1, xs: 5}} justifyContent={'center'} alignItems={'center'}>
                    <Videos videos={videos} direction={'column'}/>
                </Box>
            </Stack>


        </Box>
    );
};

export default VideoDetail;