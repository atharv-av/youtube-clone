import { createAsyncThunk } from "@reduxjs/toolkit";
import { rootState } from "..";
import { YOUTUBE_API_URL } from "../../utils/constants";
import axios from "axios";
import { HomePageVideos } from "../../Types";
import { parseData } from "../../utils";
import { API_KEY } from "../../utils/constants";

export const getHomePageVideos = createAsyncThunk(
  "youtubeApp/homePageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as rootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}`:""}`
    );
    const parsedData: HomePageVideos[] = await parseData(items)
    return {parsedData: [...videos, ...parsedData], nextPageToken}
  }
);
