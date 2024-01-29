import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POOL_DATA } from './Query';

const PoolData = ({ poolId }) => {
  const { loading, error, data } = useQuery(GET_POOL_DATA, {
    variables: { poolId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return {total:data.pool.totalValueLockedUSD,
      volume:data.pool.volumeUSD}
  ;
};

export default PoolData;