import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import client from "@/app/lib/client"; // Update the path

const GET_TAGS = gql`
  {
    tags {
      id
      title
    }
  }
`;

const GET_BRANDS = gql`
  {
    brands(query: {
      take: 10
      skip: 0
      orderBy: [
        {
          name: "asc"
        },
        {
          deletedAt: "desc"
        }
      ]
    }) {
      id
      name
      slug
      logo
      coverImage
      isActive
      type {
        id
        name
      }
    }
  }
`;

// Fetch and export the data variables
export const useTagsData = () => {
  const { loading, error, data } = useQuery(GET_TAGS, { client });

  if (loading) return { loading: true };
  if (error) return { error: error.message };

  const tags = data.tags;
  return { tags };
};

export const useBrandsData = () => {
  const { loading, error, data } = useQuery(GET_BRANDS, { client });

  if (loading) return { loading: true };
  if (error) return { error: error.message };
   
  const brandsData = data.brands;

  return { brandsData , loading };
};
