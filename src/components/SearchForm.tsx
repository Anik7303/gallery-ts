import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  left: 0;
`;

const Input = styled.input.attrs({ type: "text" })`
  flex: 1;
  background: ${(p) => p.theme.color.white};
  color: ${(p) => p.theme.color.black};
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.8rem 1.2rem;
  border: 2px solid ${(p) => p.theme.color.grey};
  border-right: none;
  border-radius: 2rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.color.primary};
  }
`;

const Button = styled.button`
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  background: ${(p) => p.theme.color.primary};
  color: ${(p) => p.theme.color.white};
  border: 2px solid ${(p) => p.theme.color.primary};
  border-radius: 2rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0.8rem 1.2rem;
`;

interface SearchBoxProps {
  onSearch: (text: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    inputRef?.current?.focus();

    return () => {
      if (inputRef && inputRef.current) {
        inputRef.current = null;
      }
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchText === "") return;
    onSearch(searchText);
    // setSearchText("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button>Search</Button>
    </Form>
  );
};

export default SearchBox;
