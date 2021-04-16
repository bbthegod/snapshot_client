/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { FeedPage } from './pages/FeedPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ProfilePage } from './pages/ProfilePage';
import { PostDetail } from './pages/PostDetail';
import { SuggestionPage } from './pages/SuggestionPage';
import { AccountPage } from './pages/AccountPage';
import PrivateRoutes from './components/PrivateRoutes';
import Navigator from './pages/Navigator';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import ChatPage from './pages/ChatPage';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - SnapShot" defaultTitle="SnapShot">
        <meta name="description" content="SnapShot" />
      </Helmet>

      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <PrivateRoutes exact path="/" component={FeedPage} layout={Navigator} />
        <PrivateRoutes path="/p/:post" component={PostDetail} layout={Navigator} />
        <PrivateRoutes path="/u/:username" component={ProfilePage} layout={Navigator} />
        <PrivateRoutes path="/suggest" component={SuggestionPage} layout={Navigator} />
        <PrivateRoutes path="/account/:index" component={AccountPage} layout={Navigator} />
        <PrivateRoutes path="/direct" component={ChatPage} layout={Navigator} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <CssBaseline />
    </BrowserRouter>
  );
}
