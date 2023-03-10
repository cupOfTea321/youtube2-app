import React from 'react';
import {Stack} from "@mui/material";
import {categories} from "../utils/constants";


// const selectedCategory = "New";
const Sidebar = ({selectedCategory, setSelectedCategory}) => {
    return (
        <Stack direction={'row'}
        sx={{
            overflowY: 'auto',
            height: {sx: 'auto', md: '95%'},
            flexDirection: {md: 'column'}
        }}>
            {categories.map((category) => (
                <button
                    onClick={() => setSelectedCategory(category.name)}
                    className={'category-btn'} key={category.name}
                        style={{
                    color: 'white',
                    background: category.name === selectedCategory
                    && '#FC1503'
                }}>
                    <span  style={{marginRight: 15,
                    color: category.name === selectedCategory ?
                    'white' : 'red'}}>{category.icon}</span>
                    <span style={{opacity: category.name ===
                    selectedCategory ? '1' : '0.8'}}>{category.name}</span>
                </button>
            ))}
        </Stack>
    );
};

export default Sidebar;