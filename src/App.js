import { gql, useQuery } from "@apollo/client";
import React from "react";

const QUERY = gql`
  query {
    authors {
      name
    }
  }
`;

const App = () => {
  const { loading, data } = useQuery(QUERY);
  return <>Happy Hacking !</>;
};

export default App;
