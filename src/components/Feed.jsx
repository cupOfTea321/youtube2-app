import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import {fetchFromAPI} from "../utils/fetchFromAPI";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory])
    return (
        <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>
            <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight:
            '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography className={'copyright'} sx={{mt: 1.5,
                color: 'white'}} variant={'body2'}>
                    Copyright 2023 Yout 2.0
                </Typography>
            </Box>

            <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
                <Typography variant={'h4'} fontWeight={'bold'} sx={{
                    color: 'white'
                }} mb={2}>
                    {selectedCategory} <span style={{color: '#F31503'}}>
                    videos
                </span>
                </Typography>
                <Videos videos={videos}/>
            </Box>
        </Stack>
    );
};

export default Feed;