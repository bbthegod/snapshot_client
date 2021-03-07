import { LoginPageState } from 'app/pages/LoginPage/slice/types';
import { SignupPageState } from 'app/pages/SignupPage/slice/types';
import { ProfilePageState } from 'app/pages/ProfilePage/slice/types';
import { NavigatorState } from 'app/pages/Navigator/slice/types';
import { FeedPageState } from 'app/pages/FeedPage/slice/types';
import { PostDetailState } from 'app/pages/PostDetail/slice/types';
import { SuggestionPageState } from 'app/pages/SuggestionPage/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

export interface RootState {
  loginPage?: LoginPageState;
  signupPage?: SignupPageState;
  profilePage?: ProfilePageState;
  navigator?: NavigatorState;
  feedPage?: FeedPageState;
  postDetail?: PostDetailState;
  suggestionPage?: SuggestionPageState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
