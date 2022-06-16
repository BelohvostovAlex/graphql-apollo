import { gql } from '@apollo/client';

export const TEMPERATURE_FRAGMENT = gql`
  fragment TemperatureFragment on Temperature {
    actual
    feelsLike
  }
`;
