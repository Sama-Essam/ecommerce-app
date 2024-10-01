import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBrands = async () => {
  const { data } = await axios.get(`{{BaseUrl}}/api/v1/brands`);
  return data;
};

export default function useBrands() {
  return useQuery(["brands"], fetchBrands, {
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
