import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import Layout from "./components/Layout";
import SearchBox from "./components/SearchForm";
import { Photo } from "./interfaces/Photo";
import { formatPhotos } from "./utils/photo";

interface AppProps {}

const baseUrl = "https://api.unsplash.com";

interface ParamProps {
  query: string;
  page: number;
  per_page: number;
  order_by: "latest" | "oldest" | "popular";
}

const photosPerPage = 30;
const orderBy = "latest";
let currentPage = 1;

const headers = {
  "Accept-Version": "v1",
  Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY}`,
};

const App: React.FC<AppProps> = (props: AppProps) => {
  // const currentPage = useRef<number>(1);
  const totalPages = useRef<number>(1000);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    console.log(photos);
  }, [photos]);

  useEffect(() => {
    const tempFn = async () => {
      try {
        const url = `${baseUrl}/photos`;
        const params = {
          page: currentPage,
          per_page: photosPerPage,
          order_by: orderBy,
        };
        const response = await axios.get(url, { headers, params });

        if (response.status === 200 && response.data) {
          console.log(response.data);
          setPhotos(formatPhotos(response.data));
          currentPage++;
        }
      } catch (error: unknown) {
        console.error(error);
      }
    };
    tempFn();
  }, []);

  const handleSearch = async (text: string): Promise<void> => {
    try {
      if (currentPage > totalPages?.current) return;
      const url = `${baseUrl}/search/photos`;
      const params: ParamProps = {
        query: text,
        page: currentPage,
        per_page: photosPerPage,
        order_by: orderBy,
      };
      const response = await axios.get(url, { headers, params });

      if (response.status === 200 && response.data) {
        const { total_pages, results } = response.data;
        totalPages.current = total_pages;
        setPhotos(formatPhotos(results));
        currentPage++;
        console.log(response.data);
      }
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <SearchBox onSearch={handleSearch} />
    </Layout>
  );
};

export default App;
