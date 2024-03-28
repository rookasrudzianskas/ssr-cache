import useSWR from "swr";
import {fetcher} from "@/src/utils/fetcher";

export const usePosts = () => {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  return {
    posts: data,
    error,
    isLoading
  }
}
