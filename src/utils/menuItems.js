import {
  DashboardRounded,
  PaidRounded,
  ReceiptRounded,
  AttachMoneyRounded,
  TrendingUpRounded,
  CreditCardRounded,
  ExitToAppRounded,
} from "@mui/icons-material";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <DashboardRounded />,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "View Transactions",
    icon: <ReceiptRounded />,
    link: "/transactions",
  },
  {
    id: 3,
    title: "Incomes",
    icon: <AttachMoneyRounded />,
    link: "/incomes",
  },
  {
    id: 4,
    title: "Expenses",
    icon: <PaidRounded />,
    link: "/dashboard",
  },
  {
    id: 5,
    title: "Budget",
    icon: <CreditCardRounded />,
    link: "/budget",
  },
  {
    id: 6,
    title: "Investments",
    icon: <TrendingUpRounded />,
    link: "/investments",
  },
  // {
  //   id: 7,
  //   title: "Sign Out",
  //   icon: <ExitToAppRounded />,
  //   link: "/signout",
  // },
];
