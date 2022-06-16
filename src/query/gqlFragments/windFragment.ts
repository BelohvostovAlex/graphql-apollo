import { gql } from '@apollo/client';

export const WIND_FRAGMENT = gql`
  fragment WindFragment on Wind {
    speed
    deg
  }
`;
