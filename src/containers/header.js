import React from "react";
import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src="/images/" alt="netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
