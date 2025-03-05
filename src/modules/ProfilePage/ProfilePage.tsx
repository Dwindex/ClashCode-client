import React from "react";
import NavBar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Styles from "./ProfilePage.module.css"
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ProfileStats from "./components/ProfileStats/ProfileStats";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import ChartLine from "./components/ChartLineLinear/ChartLineLinear";
import RecentContests from "./components/RecentContests/RecentContests";  

const stats = {
  contestsWon: 56,
  contestsLost: 20,
  winRate: '71.2%',
  totalContests: 76,
  mostUsedLanguage: 'C++',
};

const friends = [
  {
    id: 1,
    name: 'Sadiq',
    rating: 2987,
    profilePic: '/static/images/ProfilePage/sadiqprofile.jpg',
  },
  {
    id: 2,
    name: 'Harshavardhan',
    rating: 4860,
    profilePic: '/static/images/ProfilePage/harshaprofile.jpg',
  },
];

const profile = {
  email: 'shemanth.kgp@gmail.com',
  location: 'India',
  birthday: '05-06-2003',
  profession: 'Software Engineer',
};

const ProfilePage: React.FC = () => {
  return (
    <div className={Styles.ProfilePage}>
      <NavBar />
      <div className={Styles.profile}>
        <div className={Styles.k}>
          <div className={Styles.profiles}>
            <ProfileCard />
            <div className="bg-[#1b2934] m-10 min-h-screen flex items-center justify-center">
              <ChartLine />
            </div>
            <ProfileStats />
            <RecentContests />
          </div>
          <div>
          <ProfileInfo stats={stats} friends={friends} profile={profile} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
