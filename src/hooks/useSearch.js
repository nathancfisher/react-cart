import { useSearchParams } from "react-router-dom";

export default function useSearch() {
  const [params] = useSearchParams();
  return params.get("search");
}
