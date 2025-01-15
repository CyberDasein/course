export const internalPaths = {
    home: '/',
    detail: '/detail',
    category: (alias: string): string => `/category/${alias}`,
};
