import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import SearchFeed from "./components/SearchFeed";

function App() {

  alert('привет, пользователь!')

  return (
      <HashRouter basename={'/'}>
        <Box sx={{backgroundColor: '#000'}}>
            <Routes>
              <Route path={'/'} exact element={<Feed/>}/>
              <Route path={'/video/:id'} exact element={<VideoDetail/>}/>
              <Route path={'/channel/:id'} exact element={<ChannelDetail/>}/>
              <Route path={'/search/:searchTerm'} exact element={<SearchFeed/>}/>
            </Routes>
        </Box>
      </HashRouter>

  );
}

export default App;
