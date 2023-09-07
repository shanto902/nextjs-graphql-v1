import React, { useState, useEffect } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import client from '@/app/lib/client'; // Update the path
import TagsInput from 'react-tagsinput';

const GET_TAGS = gql`
  {
    tags {
      id
      title
    }
  }
`;



const TagsFetcher = () => {
  const [tags, setTags] = useState([]);

  const handleTagChange = (newTags) => {
    setTags(newTags);
  };

  const { loading, error, data } = useQuery(GET_TAGS, { client });

  useEffect(() => {
    if (!loading && !error && data) {
      setTags(data.tags.map((tag) => tag.title));
    }
  }, [loading, error, data]);

  if (loading) return <p>Loading tags...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <TagsInput value={tags} onChange={handleTagChange} />
    </div>
  );
};



export { TagsFetcher};
