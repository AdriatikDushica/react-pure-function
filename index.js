import { PureComponent } from 'react';

export const PurifyFunction = component => {
  return class extends PureComponent {
    render() {
      return component(this.props, this.context);
    }
  };
};