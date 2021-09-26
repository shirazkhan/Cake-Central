import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { GET_SLUGS_BY_COLLECTION_HANDLE } from '../graphql/queries';


export default function TestComponent() {

  const { data, loading, error } = useQuery(GET_SLUGS_BY_COLLECTION_HANDLE('latest-stuff'))

  return (
    <div>
        TEST COMPONENT

    </div>
  )
}
