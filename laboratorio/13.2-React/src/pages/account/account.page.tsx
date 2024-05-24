import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./account.pages.module.css";
import { AccountAddComponent } from "./components/account-add.component";

export const AccountPage: React.FC = () => {
  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Cuenta bancaria</h1>
        </div>
          <AccountAddComponent />
      </div>
    </AppLayout>
  );
};
