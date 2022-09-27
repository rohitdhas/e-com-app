import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState, useEffect } from "react";

const CLIENT_URL = process.env.CLIENT_URL;

export const apolloClient = new ApolloClient({
  uri: `${CLIENT_URL}/api/graphql/`,
  cache: new InMemoryCache(),
});

export const useFetch = (fetcher: any, params: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetchData(params);
  }, [])

  async function fetchData(params: any) {
    setIsLoading(true);
    const res = await fetcher(params);
    const { data } = await res;
    setData(data);
    setIsLoading(false);
  }

  return { isLoading, data, fetchData };
}

export const productsQuery = async (filters: any = {}) => {

  const { data } = await apolloClient.query({
    query: gql`
      query GetProducts {
        products(filters: {}) {
          _id
          title
          description
          images
          currentPrice
          originalPrice
          rating
          stock
          category
          exclusive
          tags
          specifications {
            key
            value
          }
          color
        }
      }
    `,
  });
  return { data }
}