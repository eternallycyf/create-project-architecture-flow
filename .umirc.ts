import { defineConfig } from '@umijs/max';
import routerConfig from './src/routes';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: routerConfig,
  npmClient: 'pnpm',
});
