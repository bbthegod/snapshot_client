/**
 *
 * PrivateRoute
 *
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute(props) {
  const { component: InnerComponent, layout: Layout, ...rest } = props;
  const { location } = props;
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return (
            <>
              <Layout />
              <InnerComponent {...props} />
            </>
          );
        }
        return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
      }}
    />
  );
}
