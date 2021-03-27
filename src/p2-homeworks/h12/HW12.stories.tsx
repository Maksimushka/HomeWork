import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import HW12 from './HW12';
import {Provider} from 'react-redux';
import store from '../h10/bll/store';

export default {
    title: 'HomeWork12',
    component: HW12,
} as Meta;

const Template: Story = (args) => {
    return (
        <Provider store={store}>
            <HW12 {...args} />
        </Provider>
    )
};

export const Primary = Template.bind({});