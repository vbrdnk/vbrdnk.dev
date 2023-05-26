/**
 * This module re-exports all of React Testing Library, but overrides its render
 * functions. The enhances exported render function comes pre-wrapped in *all* of the
 * context providers in the UI.
 */
import type { ReactElement, FC, PropsWithChildren } from 'react';

import { render as rtlRender } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

type RenderResult = ReturnType<typeof rtlRender>;
type RenderLifeCycles = {
  afterRender?: (result: RenderResult) => void;
};
type ReactTestingLibraryRenderOptions = Parameters<typeof rtlRender>[1];
type ReactTestingLibraryRenderUi = Parameters<typeof rtlRender>[0];

export type RenderOptions =
  RenderLifeCycles &
  ReactTestingLibraryRenderOptions;

export type Render = (
  ui: ReactTestingLibraryRenderUi,
  options?: RenderOptions,
) => RenderResult;

const queryClient = new QueryClient();

function getWrapper(): FC {
  const Wrapper: FC = ({ children }: PropsWithChildren): ReactElement => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return Wrapper;
}

const render: Render = (
  ui,
  {
    container,
    baseElement,
    hydrate,
    afterRender = (): void => {
    },
  } = {},
): RenderResult => {

  const Wrapper = getWrapper();

  const renderResult = rtlRender(ui, {
    wrapper: Wrapper,
    container,
    baseElement,
    hydrate,
  });
  afterRender(renderResult);

  return {
    ...renderResult,
  };
};

export const getRender =
  (defaultOptions: RenderOptions = {}): Render =>
    (ui, options = {}): ReturnType<Render> =>
      render(ui, { ...defaultOptions, ...options });

