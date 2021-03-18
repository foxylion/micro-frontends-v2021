import * as React from "react";

const loadMicroFrontendComponent = (microFrontend: string, module: string) => {
  return async () => {
    // @ts-ignore
    await __webpack_init_sharing__("default");
    // @ts-ignore
    const defaultScope = __webpack_share_scopes__.default;

    const container = (window as any)[microFrontend];
    await container.init();
    const factory = await container.get(module);
    const Module = factory();
    return Module;
  };
};

const RemoteComponent: React.FC<{ microFronted: string; module: string }> = (props) => {
  const Component = React.lazy(loadMicroFrontendComponent(props.microFronted, props.module));

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  );
};

const App: React.FC = () => (
  <div>
    <h1>Root!</h1>
    <RemoteComponent microFronted="product" module="Details" />
  </div>
);

export default App;
