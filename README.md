# react-pure-function
When you want to improve the performance of your React application the first thing you do is replace React.Component with React.PureComponent. The problem is that sometimes you have a stateless functional component instead of a class extension, so you have to transform your stateless functional component to React class component. With this simple library you can have the benefit of a PureComponent without changing the code structure of your component.
#### Installation

```shell
npm install --save react-pure-function
```

#### Getting started

import:
```javascript
import { PurifyFunction } from "react-pure-function";
```

Now this:
```javascript
const MyComponent = PurifyFunction( () => (
  <div>
    hello world.
  </div>
) );
```
is equivalent to this
```javascript
class MyComponent extends React.PureComponent {
  render() {
    return (
      <div>
        hello world.
      </div>
    )
  }
}
```
Now the behavior of MyComponent is like the React.PureComponent.