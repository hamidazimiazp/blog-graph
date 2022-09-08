import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";

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
