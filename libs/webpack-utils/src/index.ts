export const createShare = (dependency: string, dependencies: { [key: string]: string }) => ({
  [dependency]: {
    requiredVersion: dependencies[dependency],
    import: dependency,
    shareKey: dependency,
    shareScope: 'default',
    singleton: true,
  },
});
