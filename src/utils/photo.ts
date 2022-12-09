import { Photo } from "../interfaces/Photo";

export function formatPhotos(photos: any[]): Photo[] {
  return photos.map((photo) => {
    const {
      id,
      alt_description,
      blur_hash,
      color,
      description,
      height,
      urls: { raw, small, thumb },
      width,
    } = photo;

    return {
      id,
      alignTo: height > width ? "width" : "height",
      blurhash: blur_hash,
      color,
      description: alt_description || description || "",
      height,
      urls: { raw, small, thumb },
      width,
    };
  });
}
