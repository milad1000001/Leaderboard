import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addons-actions';
import { linkTo } from '@storybook/addons-links';

import Avatar from '~atoms/Avatar/Avatar.vue';


storiesOf('Avatar',module)
    .add('active',() => ({
        components: { Avatar },
        data:() => {
            return{
                
            };
        },
        template:'<Avatar :varitation="top"/>'
    }));