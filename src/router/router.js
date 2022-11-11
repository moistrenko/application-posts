import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage';
import PostsPage from '@/pages/PostsPage';
import AboutPage from '@/pages/AboutPage';
import PostDetailPage from '@/pages/PostDetailPage';

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
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/post/:id',
    component: PostDetailPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;