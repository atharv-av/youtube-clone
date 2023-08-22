import { createAsyncThunk } from "@reduxjs/toolkit";
import { rootState } from "..";
import { YOUTUBE_API_URL } from "../../utils/constants";
import axios from "axios";
import { SearchPageVideos } from "../../Types";
import { parseData } from "../../utils";
import { API_KEY } from "../../utils/constants";

export const getSearchPageVideos = createAsyncThunk(
  "youtubeApp/searchPageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos, searchTerm },
    } = getState() as rootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}`:""}`
    );
    const parsedData: SearchPageVideos[] = await parseData(items)
    return {parsedData: [...videos, ...parsedData], nextPageToken}
  }
);
