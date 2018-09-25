
/* IMPORT */

import * as React from 'react';
import * as isShallowEqual from 'shallowequal';

/* SELECTR */

function selectr ( selector: Function, options = { pure: true } ) {

  return function wrapper ( WrappedComponent ) {

    return class SelectorComponent extends React.Component<any, any> {

      selectedProps = selector ( this.props );

      shouldComponentUpdate ( nextProps ) {

        const nextSelectedProps = selector ( nextProps );

        if ( options.pure && isShallowEqual ( this.selectedProps, nextSelectedProps ) ) return false;

        this.selectedProps = nextSelectedProps;

        return true;

      }

      render () {

        return <WrappedComponent {...this.selectedProps} />;

      }

    } as any;

  };

}

/* EXPORT */

export default selectr;
