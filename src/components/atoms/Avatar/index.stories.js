import lorem from '~atoms/Lorem/index.vue';

export default { title:'Lorem' };

export const headline = () => ({
    components: { lorem },
    template : '<lorem :title="title"></lorem>',
    props:{
        title:{
            default:'this is Lorem with Title type'
        }
    }
});

export const subtitle = () => ({
    components: { lorem },
    template : '<lorem class="text-subtitle text-lg" :subtitle="subtitle"></lorem>',
    props:{
        subtitle:{
            default:'this is Lorem with subtitle type'
        }
    }
});