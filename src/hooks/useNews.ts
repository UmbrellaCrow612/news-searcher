import useSWR from "swr";

export type News = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export type Article = {
  title: string;
  author: string | null;
  source: Source;
  publishedAt: string;
  url: string;
};

export type Source = {
  Id: ID | null;
  Name: string;
};

export type ID =
  | "wired"
  | "google-news"
  | "business-insider"
  | "bbc-news"
  | "abc-news"
  | "bloomberg";

interface UseNewsResult {
  data: News | undefined;
  isLoading: boolean;
  isError: Error | undefined;
}

const useNews = ({ searchQuery }: { searchQuery: string }): UseNewsResult => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR<News>(
    `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=715bdbc7832b4791b9ef7d1be0b356eb`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useNews;
