<template>
    <div class="m-8">
        <app-headline />
        <div class="rankingList">
            <app-ranking
                :title="'FLSM'"
                :featured="featured"
                :list="list"
                :look="'one'"
            />
            <app-ranking
                :title="'مدیران تیم ها'"
                :featured="featured"
                :list="list"
                :look="'two'"
            />
            <app-ranking
                :title="'کارشناسان فروش'"
                :featured="featured"
                :list="list"
                :look="'three'"
            />
        </div>
    </div>
</template>

<script>
import HeadLine from '~organisms/headline/headline.vue';
import ranking from '~layouts/Ranking/Ranking.vue';

export default {
  name: 'dashboard',
  data() {
    return {
      featured: [
        {
          fullName: 'میلاد میرزایی', jobtitle: 'کارشناس فروش', position: 'انکولوژی شیمیایی', rank: 1, score: 1300, progress: 2,
        },
        {
          fullName: 'ساسان محمدی', jobtitle: 'کارشناس فروش', position: 'ژنریک', rank: 2, score: 1300, progress: 0,
        },
        {
          fullName: 'ارسلان دشتی', jobtitle: 'کارشناس فروش', position: 'روماتولوژی', rank: 3, score: 1300, progress: -4,
        },
      ],
      list: [
        {
          fullName: 'نیما بدری', jobtitle: 'کارشناس فروش', position: 'انکولوژی شیمیایی', rank: 4, score: 1300, progress: -2,
        },
        {
          fullName: 'نیما بدری', jobtitle: 'کارشناس فروش', position: 'انکولوژی شیمیایی', rank: 5, score: 1300, progress: -3,
        },
        {
          fullName: 'نیما بدری', jobtitle: 'کارشناس فروش', position: 'انکولوژی شیمیایی', rank: 6, score: 1300, progress: 1,
        },
        {
          fullName: 'نیما بدری', jobtitle: 'کارشناس فروش', position: 'انکولوژی شیمیایی', rank: 7, score: 1300, progress: -2,
        },
        {
          fullName: 'نیما بدری', jobtitle: 'کارشناس فروش', position: 'انکولوژی شیمیایی', rank: 8, score: 1300, progress: -2,
        },
        {
          fullName: 'نیما بدری', jobtitle: 'کارشناس فروش', position: 'انکولوژی شیمیایی', rank: 9, score: 1300, progress: 5,
        },
        {
          fullName: 'نیما بدری', jobtitle: 'کارشناس فروش', position: 'انکولوژی شیمیایی', rank: 10, score: 1300, progress: 2,
        },
      ],
    };
  },
  components: {
    'app-headline': HeadLine,
    'app-ranking': ranking,
  },
};
</script>

<style scoped>
.rankingList{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
    text-align: center;
    grid-gap:1rem
}
</style>
