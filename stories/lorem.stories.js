import Lorem from '~atoms/Lorem/index.vue';

export default{
    title:'Lorem',
}

export const title = () => ({
    component: { Lorem },
    template: '<Lorem> This is lorem with variation Title </Lorem>'
})

export const subTitle = () => ({
    component: { Lorem },
    template: '<Lorem> This is lorem with variation Title </Lorem>'
})