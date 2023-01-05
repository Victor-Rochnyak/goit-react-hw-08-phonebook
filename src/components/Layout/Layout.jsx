import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import React from 'react';

import { SectionDiv, Div1,Div2 } from './Layout.styled';

export const Layout = () => {
  return (
    <SectionDiv>
      <Div1></Div1>
      <Div2 ></Div2>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </SectionDiv>
  );
};
