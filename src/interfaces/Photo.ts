export interface Photo {
  id: string;
  alignTo: "height" | "width";
  blurhash: string;
  color: string;
  description: string;
  height: number;
  urls: {
    raw: string;
    small: string;
    thumb: string;
  };
  width: number;
}
