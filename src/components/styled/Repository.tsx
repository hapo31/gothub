import React, { SFC } from "react";
import styled from "styled-components";

const Box = styled.div`
  padding: 16px;
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  margin-bottom: 5px;
`;

const Title = styled.a`
  display: block;
  font-weight: 600;
  line-height: 1.25;
  color: #24292e;
`;

const Description = styled.p``;

type Props = {
  author: string;
  name: string;
  description: string;
  url: string;
};

const Repository: SFC<Props> = ({ name, description, url }) => (
  <Box>
    <Title target="_blank" href={url}>
      {name}
    </Title>
    <Description>{description}</Description>
  </Box>
);

export default Repository;
