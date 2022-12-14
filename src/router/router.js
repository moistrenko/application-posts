import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage';
import PostsPage from '@/pages/PostsPage';
import PostsPageV2 from '@/pages/PostsPageV2';
import AboutPage from '@/pages/AboutPage';
import PostDetailPage from '@/pages/PostDetailPage';
import StorePage from '@/pages/StorePage';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/posts',
    component: PostsPage,
  },
  {
    path: '/postsV2',
    component: PostsPageV2,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/post/:id',
    component: PostDetailPage,
  },
  {
    path: '/store',
    component: StorePage,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
