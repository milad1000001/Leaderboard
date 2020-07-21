import Vue from 'vue';
import Avatar from '~atoms/Lorem/Avatar.vue';

export default { title: 'Lorem' };

export const withText = () => '<Lorem>with text</Lorem>';

export const withEmoji = () => '<Lorem>😀 😎 👍 💯</Lorem>';

export const asAComponent = () => ({
  components: { Avatar },
  template: '<Lorem>rounded</Avatar>'
});
