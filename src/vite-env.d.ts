declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
  }

  interface ImportMeta {
    env: Record<string, unknown>;
  }