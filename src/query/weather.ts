import { gql } from "@apollo/client";

export const GET_WEATHER = gql`
  query getCityByName($name: String!, $config: ConfigInput) {
    getCityByName(name: $name, config: $config) {
      name
      weather {
        temperature {
          actual,
          feelsLike
        }
        wind {
          speed
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
`