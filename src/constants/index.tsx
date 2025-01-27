
import { options } from '@/types/constants';

export default class constants {
  static monacoLanguages: options = [
    { "label": "Assembly", "value": "45" },
    { "label": "Bash", "value": "46" },
    { "label": "Basic", "value": "47" },
    { "label": "C", "value": "75" },
    { "label": "C++", "value": "76" },
    { "label": "C", "value": "48" },
    { "label": "C++", "value": "52" },
    { "label": "C", "value": "49" },
    { "label": "C++", "value": "53" },
    { "label": "C", "value": "50" },
    { "label": "C++", "value": "54" },
    { "label": "Clojure", "value": "86" },
    { "label": "C#", "value": "51" },
    { "label": "COBOL", "value": "77" },
    { "label": "Common Lisp", "value": "55" },
    { "label": "D", "value": "56" },
    { "label": "Elixir", "value": "57" },
    { "label": "Erlang", "value": "58" },
    { "label": "Go", "value": "60" },
    { "label": "Groovy", "value": "88" },
    { "label": "Java", "value": "62" },
    { "label": "JavaScript", "value": "63" },
    { "label": "Kotlin", "value": "78" },
    { "label": "Lua", "value": "64" },
    { "label": "Objective-C", "value": "79" },
    { "label": "PHP", "value": "68" },
    { "label": "Python", "value": "70" },
    { "label": "Python", "value": "71" },
    { "label": "R", "value": "80" },
    { "label": "Ruby", "value": "72" },
    { "label": "Rust", "value": "73" },
    { "label": "Scala", "value": "81" },
    { "label": "SQL", "value": "82" },
    { "label": "Swift", "value": "83" },
    { "label": "TypeScript", "value": "74" },
  ]


  //icons for online payments in footer.tsx
  static paymentIcons = [
    { src: "/static/icons/phonepe.svg", alt: "phonepe", height: 35, width: 40 },
    { src: "/static/icons/razorpay.svg", alt: "razorpay", height: 35, width: 85 },
    { src: "/static/icons/upi.svg", alt: "upi", height: 35, width: 85 }
  ];

  // these constants used in footer 
  static contest = [
    { id: 1, name: "1 vs 1 contest", link: "#" },
    { id: 2, name: "2 vs 2 contest", link: "#" },
    { id: 3, name: "Group contest", link: "#" },
    { id: 4, name: "Pool contest", link: "#" }
  ]
  static blogs = [
    { id: 1, name: "CodeClash Tech", link: "#" },
    { id: 2, name: "CodeClash Blocs", link: "#" }
  ]
  static policies = [
    { id: 1, name: "Fairplay Policy", link: "#" },
    { id: 2, name: "Privacy&Policy", link: "#" }
  ]
  static aboutus = [
    { id: 1, name: "Help & Support", link: "#" },
    { id: 2, name: "Careers", link: "#" },
    { id: 3, name: "Team", link: "#" }
  ]


  //these are the constanst for footer.tsx for social media icons
  static youtube = () => {
    window.open("https://www.youtube.com", "_blank");
  };
  static instagram = () => {
    window.open("https://www.instagram.com", "_blank");
  };
  static twitter = () => {
    window.open("https://www.twitter.com", "_blank");
  };
  static facebook = () => {
    window.open("https://www.facebook.com", "_blank");
  };
  static socialMediaData = [
    { image: "/static/icons/youtube.svg", onClick: this.youtube, height: 40, width: 40, margin: 8 },
    { image: "/static/icons/instagram.svg", onClick: this.instagram, height: 40, width: 40, margin: 8 },
    { image: "/static/icons/twitter.svg", onClick: this.twitter, height: 40, width: 40, margin: 8 },
    { image: "/static/icons/facebook.svg", onClick: this.facebook, height: 40, width: 40, margin: 8 }
  ];


  // link support and legal documents in footer.tsx
  static links = [
    { href: "#", label: "Contact Us" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
    { href: "#", label: "Refund/Cancellation Policy" }
  ];

  //dashboard contests
  static dashboardContests = [
    {
      title: "1 vs 1 contest", context: "Battle live with your opponent on a common problem statement and win 2x Prize money", link: "#",
      backgroundImage: "/static/images/dashboard/contest/contest1.svg"
    },
    {
      title: "2 vs 2 contest", context: "Battle live with your opponent on a common problem statement and win 2x Prize money", link: "#",

      backgroundImage: "/static/images/dashboard/contest/contest2.svg"
    },
    {
      title: "Group contest", context: "Battle live with your opponent on a common problem statement and win 2x Prize money", link: "#",

      backgroundImage: "/static/images/dashboard/contest/contest3.svg"
    },
  ]

  static typesOfMatches = ["1v1", "2v2", "Group", "Pool"];

}