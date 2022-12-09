import React, { useEffect, useRef, useState } from "react";

import Layout from "./components/Layout";
import SearchBox from "./components/SearchForm";
import { Photo } from "./interfaces/Photo";
import Gallery from "./components/Gallery";
import useScrollPosition from "./hooks/useScrollPosition";
import { UnsplashAPI } from "./services/unsplash";
import Spinner from "./components/Spinner";

let currentPage = 1;
let searchText = "";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const totalPages = useRef<number>(1000);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [scrollPosition] = useScrollPosition();

  useEffect(() => {
    if (!loading && document.body.clientHeight - scrollPosition < 1000) {
      currentPage++;
      setLoading(true);
      if (searchText !== "" && currentPage < totalPages?.current) {
        (async () => {
          const data = await UnsplashAPI.searchPhotos(searchText, currentPage);
          setPhotos((state) => [...state, ...data.photos]);
          totalPages.current = data.pages;
        })();
      } else {
        (async () => {
          const data = await UnsplashAPI.getPhotos(currentPage);
          setPhotos((state) => [...state, ...data]);
        })();
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [scrollPosition, loading, photos]);

  useEffect(() => {
    const tempFn = async () => {
      try {
        currentPage = 1;
        const data = await UnsplashAPI.getPhotos(currentPage);
        setPhotos(data);
      } catch (error: unknown) {
        console.error(error);
      }
    };
    tempFn();
  }, []);

  const handleSearch = async (text: string): Promise<void> => {
    try {
      currentPage = 1;
      searchText = text;
      const data = await UnsplashAPI.searchPhotos(searchText, currentPage);
      setPhotos(data.photos);
      totalPages.current = data.pages;
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <SearchBox onSearch={handleSearch} />
      <Gallery photos={photos} />
      {loading && <Spinner />}
    </Layout>
  );
};

export default App;
