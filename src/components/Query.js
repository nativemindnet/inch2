import { gql } from '@apollo/client';

export const GET_POOL_DATA = gql`
  query GetPoolData($poolId: ID!) {
    pool(id: $poolId) {
      id
      token0 {
        id
        symbol
      }
      token1 {
        id
        symbol
      }
      totalValueLockedUSD
      volumeUSD
    }
  }
`;