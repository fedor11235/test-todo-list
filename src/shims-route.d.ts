import Router from '@/router';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $route: Router;
  }
}