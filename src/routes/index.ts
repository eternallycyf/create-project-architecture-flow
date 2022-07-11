import Routes from './routes';
const flatMap: any = (arr: any) =>
  Array.isArray(arr) ? arr.reduce((a, b) => [...a, ...flatMap(b)], []) : [arr];

const Router = [
  {
    name: '/',
    redirect: './home',
  },
  ...flatMap(Routes),
];

export default Router;
