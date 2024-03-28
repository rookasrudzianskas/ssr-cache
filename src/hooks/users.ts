import useSWR from "swr";
import {fetcher} from "@/src/utils/fetcher";

export const useUser = (id: number) => {
  const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/users/${id}`, fetcher,
    {
      dedupingInterval: 0,
    })
  return {
    user: data,
    error,
    isLoading
  }
}
