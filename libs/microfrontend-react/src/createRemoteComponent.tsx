import * as React from 'react';

export const createRemoteComponent: <T>(
  microfrontendName: string,
  module: string,
  component: string | undefined
) => React.FC<T> = (microfrontendName, module, component) => {
  const Component = React.lazy(async () => {
    try {
      // @ts-ignore
      await __webpack_init_sharing__('default');
      // @ts-ignore
      const defaultScope = __webpack_share_scopes__.default;
      let container;
      for (let i = 0; i < 50; i++) {
        container = (window as any)[`microfrontend_${microfrontendName}`];
        if (!container) {
          await sleep(100);
        } else {
          break;
        }
      }
      await container.init(defaultScope);
      const factory = await container.get(module);
      const jsModule = factory();
      return { default: component ? jsModule[component] : jsModule };
    } catch (e) {
      console.error(e);
      return { default: () => <div style={{ color: 'red' }}>Failed to load Component!</div> };
    }
  });

  return (props) => (
    <React.Suspense fallback="Loading Remote Component">
      <div className={`remote-component ${microfrontendName}`}>
        <Component {...props} />
      </div>
    </React.Suspense>
  );
};

const sleep = (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, timeout);
  });
