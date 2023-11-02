import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

type Props = {
  title: string;
};

const Home: NextPage<Props> = (props) => {
  return <h1>Hello: {props.title}</h1>;
};

export function getServerSideProps(ctx: NextPageContext) {
  const title = ctx.query?.title || null;
  return { props: { title } };
}

export default Home;
