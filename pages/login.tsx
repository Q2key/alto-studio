import React from 'react';
import { NextPage, NextPageContext } from 'next';

const LoginForm: NextPage = () => (
  <form name="login-form">
    <fieldset>
      <legend>Login</legend>
      <label htmlFor="login">Login</label>
      <input name="login" type="text" placeholder="your user name or email" />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        placeholder={'enter your password'}
      />
    </fieldset>
  </form>
);

export function getServerSideProps(ctx: NextPageContext) {
  const title = ctx.query?.title || null;
  return { props: { title } };
}

export default LoginForm;
