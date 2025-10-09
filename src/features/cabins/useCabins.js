import { useQuery } from "@tanstack/react-query";
import { getCabibns } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabibns,
  });

  return { isLoading, error, cabins };
}
