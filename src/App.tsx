import React from "react";

import Layout from "./components/Layout";
import SearchBox from "./components/SearchForm";

interface AppProps {}

const App: React.FC<AppProps> = (props: AppProps) => {
  const handleSearch = (text: string) => {
    console.log(text);
  };

  return (
    <Layout>
      <SearchBox onSearch={handleSearch} />
    </Layout>
  );
};

export default App;
