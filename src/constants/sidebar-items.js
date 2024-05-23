import { HomeIcon, CalendarIcon } from '@heroicons/react/20/solid';
import { LockClosedIcon, SpeakerXMarkIcon } from '@heroicons/react/20/solid';

export const SubmenuItems = [
  { text: "Dashboard", icon: HomeIcon, link: "/" },
  { text: "Projects", icon: HomeIcon, link: "/projects" },
  { text: "Calendar", icon: CalendarIcon, link: "/calendar" },
  {
    text: "Password",
    icon: LockClosedIcon,
    link: "/password-manager",
  },
  {
    text: "Finance",
    icon: SpeakerXMarkIcon,
    subLinks: [
      {
        text: "Expenses",
        icon: SpeakerXMarkIcon,
        link: "/expenses",
      },
      {
        text: "Income",
        icon: SpeakerXMarkIcon,
        link: "/income",
      },
      {
        text: "Liabilities",
        icon: SpeakerXMarkIcon,
        link: "/liabilities",
      },
    ],
  },
];
