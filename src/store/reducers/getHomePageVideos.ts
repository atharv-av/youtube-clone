import { createAsyncThunk } from "@reduxjs/toolkit";
import { rootState } from "..";
import { YOUTUBE_API_URL } from "../../utils/constants";
import axios from "axios";
import { HomePageVideos } from "../../Types";
import { parseData } from "../../utils";

export const API_KEY = "AIzaSyBHEJSNaE6eY0F__JHV7A7DBj7iWYRh5iQ";

export const getHomePageVideos = createAsyncThunk(
  "youtubeApp/homePageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as rootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video`
    );
    const parsedData: HomePageVideos[] = await parseData(items)
    return {parsedData: [...videos, ...parsedData], nextPageToken}
  }
);
