# React Selectr

Simple selector for React components.

Useful when using state managers such as [unstated](https://github.com/jamiebuilds/unstated).

Using this library you can pass your components only the props they need to render, instead of the whole state. This will avoid unnecessary re-renders and therefore improve performance.

## Install

```sh
npm install --save react-selectr
```

## Usage

```ts
import selectr from 'react-selectr';
import MyComponent from './my_component';

function propsSelector ( props ) {
  return {
    foo: props.foo,
    bar: props.getBar ()
  };
}

// Pure components
// MyComponent will only receive the selected props, and if they don't change it won't be re-rendered

selectr ( propsSelector )( MyComponent );

// Unpure components
// MyComponent will only receive the selected props, but even if they don't change it will always re-render

selectr ( propsSelector, { pure: false } )( MyComponent );
```

## Related

- **[react-log-updates](https://github.com/fabiospampinato/react-log-updates)**: Log the number of updates occurring, broken down by components.
- **[react-should-component-update](https://github.com/fabiospampinato/react-should-component-update)**: Higher-Order Component for adding `shouldComponentUpdate` to components. It supports easy to set shortcuts.

## License

MIT © Fabio Spampinato
