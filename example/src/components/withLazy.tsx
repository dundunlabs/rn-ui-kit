import { Suspense, lazy } from "react";
import type { PropsWithoutRef, RefAttributes, Component, PropsWithRef } from "react";

type LazyProps<P> = JSX.IntrinsicAttributes & ((PropsWithoutRef<P> & RefAttributes<Component<P>>) | PropsWithRef<P>)

export default function withLazy<P>(factory: () => Promise<{ default: React.ComponentType<P>; }>) {
  const Component = lazy(factory)

  return function LazyComponent(props: LazyProps<P>) {
    return (
      <Suspense>
        <Component {...props} />
      </Suspense>
    )
  }
}