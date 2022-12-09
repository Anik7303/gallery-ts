import axios, { AxiosInstance } from "axios";
import { Photo } from "../interfaces/Photo";
import { formatPhotos } from "../utils/photo";

type OrderBy = "latest" | "oldest" | "popular";

interface SearchPhotosDto {
  photos: Photo[];
  pages: number;
}

export class UnsplashAPI {
  private static _instance: AxiosInstance;

  private constructor() {}

  static get instance(): AxiosInstance {
    if (!UnsplashAPI._instance) {
      UnsplashAPI._instance = axios.create({
        baseURL: "https://api.unsplash.com",
        headers: {
          "Accept-Version": "v1",
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY}`,
        },
      });
    }
    return UnsplashAPI._instance;
  }

  static async getPhotos(
    page: number = 1,
    perPage: number = 30,
    orderBy: OrderBy = "latest"
  ): Promise<Photo[]> {
    const response = await UnsplashAPI.instance.get("/photos", {
      params: {
        page,
        per_page: perPage,
        order_by: orderBy,
      },
    });
    return formatPhotos(response.data);
  }

  /**
   * Search photos with unsplash API
   * @param query search query
   * @param page page number
   * @param perPage photos per page
   * @param orderBy photos sort order ('latest' | 'oldest' | 'popular')
   * @returns {{photos, pages}} Object containing photos array and number of pages
   */
  static async searchPhotos(
    query: string,
    page: number = 1,
    perPage: number = 30,
    orderBy: OrderBy = "latest"
  ): Promise<SearchPhotosDto> {
    const response = await UnsplashAPI.instance.get("/search/photos", {
      params: {
        query,
        page,
        per_page: perPage,
        order_by: orderBy,
      },
    });
    const photos = formatPhotos(response.data.results);
    return {
      photos,
      pages: response.data.total_pages,
    };
  }
}
