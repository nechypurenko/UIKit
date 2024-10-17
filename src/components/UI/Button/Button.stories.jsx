import React from 'react';
import { SimpleButton } from './Button';
import { IconButton } from './IconButton';
import primaryButtonIcon from '../../../assets/primaryButtonIcon.svg';
import secondaryButtonIcon from '../../../assets/secondaryButtonIcon.svg';

export default {
  title: 'Components/Button',
  component: SimpleButton,
};

const Template = (args) => <SimpleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  variant: 'primary',
};

export const PrimaryWithIcon = IconTemplate.bind({});
PrimaryWithIcon.args = {
  label: 'Button',
  icon: {primaryButtonIcon},
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  variant: 'secondary',
};

export const SecondaryWithIcon = IconTemplate.bind({});
SecondaryWithIcon.args = {
  label: 'Button',
  icon: {secondaryButtonIcon},
  variant: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  variant: 'primary',
  disabled: true,
};

export const Pressed = Template.bind({});
Pressed.args = {
  label: 'Button',
  variant: 'primary',
  className: 'pressed',
};
