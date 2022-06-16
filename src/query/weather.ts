import { gql } from '@apollo/client';

import { allFragments } from './gqlFragments';

const { TEMPERATURE_FRAGMENT, WIND_FRAGMENT } = allFragments;

export const GET_WEATHER = gql`
  query getCityByName($name: String!, $config: ConfigInput) {
    getCityByName(name: $name, config: $config) {
      name
      weather {
        temperature {
          ...TemperatureFragment
        }
        wind {
          ...WindFragment
        }
        clouds {
          all
        }
        summary {
          description
        }
      }
    }
  }
  ${TEMPERATURE_FRAGMENT}
  ${WIND_FRAGMENT}
`;
