import React from 'react';

import { HeaderComponent } from "./HeaderComponent";

export default {
  title: 'Example/HeaderComponent',
  component: HeaderComponent,
};

const Template = (args) => <HeaderComponent {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
