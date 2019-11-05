import React from 'react';

// project
import StyleProvider from './StyleProvider';

type Props = {
  children: React.ReactChild;
};

const Providers: React.FC<Props> = ({ children }: Props) => {
  return <StyleProvider>{children}</StyleProvider>;
};

export default Providers;
