import React, { useEffect, useRef, useState } from "react";

import Layout from "./components/Layout";
import SearchBox from "./components/SearchForm";
import { Photo } from "./interfaces/Photo";
import Gallery from "./components/Gallery";
import useScrollPosition from "./hooks/useScrollPosition";
import { UnsplashAPI } from "./services/unsplash";

let currentPage = 1;

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const totalPages = useRef<number>(1000);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [scrollPosition] = useScrollPosition();

  useEffect(() => {
    console.log(scrollPosition);
    if (scrollPosition > window.innerHeight / 2) {
      console.log("half reached");
    }
  }, [scrollPosition]);

  useEffect(() => {
    const tempFn = async () => {
      try {
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
      if (currentPage > totalPages?.current) return;
      const data = await UnsplashAPI.searchPhotos(text, currentPage);
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
    </Layout>
  );
};

export default App;
