import Button from '~atoms/Button/index';
import { action, actions } from '@storybook/addon-actions';

export default {
    title: 'Button',
};

export const normalButton = () => ({
    components: { Button },
    template: '<Button @click="log">Normal Button</Button>',
    methods:{log:action('log1')},
});
normalButton.storyName = 'Normal';

export const primaryButton = () => ({
    components: { Button },
    template: '<Button color="primary" @click="click" @doubleclick="doubleclick">Normal Button</Button>',
    methods:actions({click:'clicked',doubleclick:'double clicked'}),
});
primaryButton.storyName = 'Primary';