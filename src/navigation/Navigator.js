import * as React from 'react';
//-----------Navigation-----------//
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//----------Bottom Navigation----------//
import BottomNavigation from '../navigation/BottomNavigation';
//----------Auth Screens----------//
import Splash from '../screens/auth_Screens/Splash';
import Login_With_SocialMedia from '../screens/auth_Screens/Login_With_SocailMedia';
import Home from '../screens/home_screens/Home';
import SignUp_With_Number from '../screens/auth_Screens/SignUp_With_Number';
// import Recommendations from '../screens/home_screens/Recommendations';
import EventSchedule from '../screens/stream_Screen/EventSchedule';
//----------Stream Screens----------//
import Stream from '../screens/stream_Screen/Streams';
import Stream_Popular from '../screens/stream_Screen/Stream_Popular';
import Stream_Fresher from '../screens/stream_Screen/Stream_Fresher';
import Stream_Events from '../screens/stream_Screen/Stream_Events';
import Record from '../screens/stream_Screen/Record';
import Reels from '../screens/home_screens/Reels';
import {useSelector} from 'react-redux';
import Auth from './AuthNavigation';
import Reels1 from '../screens/home_screens/Reels1';
import Reels2 from '../screens/home_screens/Reels2';
import Call from '../screens/home_screens/Call';
import Event from '../screens/EventScreens/Event';
import Eventrule from '../screens/EventScreens/Eventrule';
import Settings from '../screens/home_screens/Settings';
import BlockedList from '../screens/home_screens/BlockedList';
import Security from '../screens/home_screens/Security';
import Inbox from '../screens/home_screens/Inbox';
import Privacy from '../screens/home_screens/Privacy';
import Room_Effects from '../screens/home_screens/Room_Effects';
import Language from '../screens/home_screens/Language';
import Faq from '../screens/home_screens/Faq';
import ConnectWithUs from '../screens/home_screens/ConnectWithUs';
import AboutUs from '../screens/home_screens/AboutUs';
import PeopleLive from '../screens/home_screens/PeopleLive';
import Store from '../screens/Store/Store';
import OtherUserProfile from '../screens/home_screens/OtherUserProfile';
import MyTasksMain from '../screens/myTasks/MyTasksMain';
import TalentLevelExplaination from '../screens/levelExplanation/TalentLevelExplanation';
import Apply_Form from '../screens/home_screens/Apply_Form';
import MyBadgeMain from '../screens/myBadge/MyBadgeMain';
import ComingSoon from '../screens/reuseable_Component/ComingSoon';
import AgencyID from '../screens/home_screens/AgencyID';
import AudioCall from '../screens/home_screens/AudioCall';
import MyBagMain from '../screens/myBag/MyBagMain';
import MyInvites from '../screens/myInvites/MyInvitesMain';
import Followers from '../screens/home_screens/Followers';
import Follow from '../screens/home_screens/Follow';
import AudioCallHost from '../screens/home_screens/AudioCallHost';
import AudioCallUsers from '../screens/home_screens/AudioCallUsers';
import LuckyDraw from '../screens/home_screens/LuckyDraw';
import UserProfile from '../screens/home_screens/UserProfile';
import Terms from '../screens/home_screens/Terms';
import ProfileModalStyle from '../screens/reuseable_Component/ProfileModalStyle';
import RecordsMain from '../screens/records/RecordsMain';
import Topup from '../screens/home_screens/Topup';
import TopUsers from '../screens/records/TopUsersView';
import TopupAgent from '../screens/TopupScreens/TopupAgent';
import TopupDetails from '../screens/TopupScreens/TopupDetails';
import TopTalent from '../screens/records/TopTalentsView';
import WeeklyStar from '../screens/records/WeeklyStarView';
import Combo from '../screens/records/ComboView';
import BanoReelsMain from '../screens/banoReels/BanoReelsMain';
import Stream_PK_Videos from '../screens/stream_Screen/Stream_PK_Videos';
import Pk from '../screens/home_screens/Pk';
import Recomendations from '../screens/home_screens/Recommendations';
import Stream_Reels from '../screens/stream_Screen/Stream_Reels';
import LuckDraw from '../screens//home_screens/LuckyDraw';
import InamGhar from '../screens/myTasks/InamGhar';
import SearchView from '../screens/reuseable_Component/SearchView';
import WealthLevelExplaination from '../screens/levelExplanation/WealthLevelExplanation';
// import HomePage from '../screens/Agora/HomePage';
// import HostPage from '../screens/Agora/HostPage';
// import AudiencePage from '../screens/Agora/AudiencePage';
import WithdrawBind2 from '../screens/home_screens/WithDrawBind2';
import WithdrawBind from '../screens/home_screens/WithdrawBind';
import Exchange from '../screens/withdrawScreens/Exchange';
import Mylevel from '../screens/home_screens/Mylevel';
import Pending from '../screens/home_screens/Pending';
import Help from '../screens/reuseable_Component/Help';
import ChatTest from '../screens/extraWork/ChatTest';
// import Rules from '../screens/FruitLoopGame/Components/rules';
// import DeepAr from '../screens/Agora/DeepAR';
const Stack = createNativeStackNavigator();

function HomeNavigations() {
  const token = useSelector(state => state.auth.userToken);
  return (
    <Stack.Navigator
      initialRouteName={token ? 'BottomNavigation' : 'Auth'}
      screenOptions={{
        headerShown: false,
        // animation: 'slide_from_bottom',
      }}>
      <Stack.Screen name="Recomend" component={Recomendations} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="StreamShow" component={Reels2} />
      <Stack.Screen name="CallScreen" component={Call} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Exchange" component={Exchange} />
      <Stack.Screen name="BlockedList" component={BlockedList} />
      <Stack.Screen name="Pending" component={Pending} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="Inbox" component={Inbox} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Room_Effects" component={Room_Effects} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Faq" component={Faq} />
      <Stack.Screen name="Topup" component={Topup} />
      <Stack.Screen name="EventInfo" component={Event} />
      <Stack.Screen name="Reels" component={Reels} />
      <Stack.Screen name="ConnectWithUs" component={ConnectWithUs} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="PeopleLive" component={PeopleLive} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="AudioCall" component={AudioCall} />
      <Stack.Screen name="MyTask" component={MyTasksMain} />
      <Stack.Screen name="MyBagMain" component={MyBagMain} />
      <Stack.Screen name="MyInvites" component={MyInvites} />
      <Stack.Screen name="MyBadgeMain" component={MyBadgeMain} />
      <Stack.Screen name="ComingSoon" component={ComingSoon} />
      <Stack.Screen name="GoLive" component={Reels1} />
      <Stack.Screen name="Followers" component={Followers} />
      <Stack.Screen name="Follow" component={Follow} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="OtherUserProfile" component={OtherUserProfile} />
      <Stack.Screen name="ProfileModalStyle" component={ProfileModalStyle} />
      {/* <Stack.Screen name="Homepage" component={HomePage} /> */}
      <Stack.Screen name="WithdrawBind2" component={WithdrawBind2} />
      <Stack.Screen name="WithdrawBind" component={WithdrawBind} />
      <Stack.Screen name="MyLevel" component={Mylevel} />
      <Stack.Screen name="Help" component={Help} />
      {/* <Stack.Screen name="DeepAr" component={DeepAr} /> */}


      {/* <Stack.Screen
        options={{headerShown: false}}
        name="HostPage"
        component={HostPage}
      /> */}
      {/* <Stack.Screen
        options={{headerShown: false}}
        name="AudiencePage"
        component={AudiencePage}
      /> */}



      {/* <Stack.Screen
        name="TalentLevelExplaination"
        component={TalentLevelExplaination}
      /> */}
      <Stack.Screen
        name="TalentLevelExplaination"
        component={TalentLevelExplaination}
      />
      <Stack.Screen
        name="WealthLevelExplaination"
        component={WealthLevelExplaination}
      />
      {/* <Stack.Screen name="WealthLevelExplaination" component={LuckyDraw} /> */}
      <Stack.Screen name="AudioCallHost" component={AudioCallHost} />
      <Stack.Screen name="AudioCallUsers" component={AudioCallUsers} />
      <Stack.Screen name="LuckyDraw" component={LuckyDraw} />
      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="RecordsMain" component={RecordsMain} />
      <Stack.Screen name="TopTalent" component={TopTalent} />
      <Stack.Screen name="WeeklyStar" component={WeeklyStar} />
      <Stack.Screen name="Combo" component={Combo} />
      <Stack.Screen name="TopUsers" component={TopUsers} />
      <Stack.Screen name="Apply_Form" component={Apply_Form} />
      <Stack.Screen name="BanoReels" component={BanoReelsMain} />
      <Stack.Screen name="AgencyID" component={AgencyID} />
      <Stack.Screen name="Pk" component={Pk} />
      <Stack.Screen name="Stream_Reels" component={Stream_Reels} />
      <Stack.Screen name="InamGhar" component={InamGhar} />
      <Stack.Screen name="EventSchedule" component={EventSchedule} />
      <Stack.Screen name="SearchUser" component={SearchView} />

      <Stack.Screen name="Event" component={Event} />
      <Stack.Screen name="Eventrule" component={Eventrule} />
      <Stack.Screen name="TopupDetails" component={TopupDetails} />
      <Stack.Screen name="TopupAgent" component={TopupAgent} />
      <Stack.Screen name = "ChatTest" component={ChatTest}/>
      {/* <Stack.Screen name = "rules" component={Rules}/> */}
      {/* Auth Screen */}
    </Stack.Navigator>
  );
}

export default HomeNavigations;
