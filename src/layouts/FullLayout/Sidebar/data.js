import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const Menuitems = [
  {
    title: "Dashboard",
    icon: DashboardOutlinedIcon,
    href: "/app/dashboards/dashboard1",
  },
  {
    title: "My Billing",
    icon: AccountBalanceIcon,
    href: "/app/my-billing",
  },
  {
    title: "Usage",
    icon: CreditScoreIcon,
    href: "/app/usage",
  },
  {
    title: "Settings",
    icon: SettingsIcon,
    href: "/app/settings",
  },
];

export default Menuitems;
