import React from 'react';
import './Sidebar.css';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SettingsIcon from '@material-ui/icons/Settings';
import ManageButton from './ManageTenants';

const useStyles = makeStyles({
  icon: {
    // Add your icon styles here
  },
  name: {
    // Add your name styles here
  },
});

function Sidebar() {
  const classes = useStyles();

  return (
    <div className="icons">
      <div className="icon-container">
        <HomeIcon className={classes.icon} />
        <span className={classes.name}>My Properties</span>
      </div>
      <div className="icon-container">
        <AddCircleIcon className={classes.icon} />
        <span className={classes.name}>Add Property</span>
      </div>
      <div className="icon-container">
        <AttachMoneyIcon className={classes.icon} />
        <span className={classes.name}>Tenant Finances</span>
      </div>
      <div className="icon-container">
        <PaymentIcon className={classes.icon} />
        <span className={classes.name}>Subscription Status</span>
      </div>
      <div className="icon-container">
        <AccountBalanceWalletIcon className={classes.icon} />
        <span className={classes.name}>My Money</span>
      </div>
      <div className="icon-container">
        <SettingsIcon className={classes.icon} />
        <span className={classes.name}>Account Settings</span>
      </div>

      <div>
      <ManageButton/>
      </div>
    </div>
  );
}

export default Sidebar;
