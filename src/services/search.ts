import { apiRoutes, baseUrl } from "@/config/api-routes";
import axios, { isAxiosError, AxiosResponse } from "axios";
import { ApiResponse } from "@/types/api";

export const SearchService = {
  searchGithubUsers: async (query: string, type: string): Promise<any> => {
    try {
      if (type === "org") {
        const response: AxiosResponse<any> = await axios.get<ApiResponse>(
          `${baseUrl}${apiRoutes.search_organization(query)}`
        );
        console.log({ response });
        return response.data.items;
      } else {
        const response: AxiosResponse<any> = await axios.get<ApiResponse>(
          `${baseUrl}${apiRoutes.search_users(query)}`
        );
        console.log({ response });
        return response.data.items;
      }
    } catch (error: any) {
      if (isAxiosError(error)) {
        return null;
      } else {
        return null;
      }
    }
  },
};
