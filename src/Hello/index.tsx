import React, { ReactNode } from 'react';

const Index = ({
  children,
  style,
}: {
  children: string | ReactNode;
  style?: Object;
}) => {
  return <div style={style}>{children}</div>;
};

export default Index;
