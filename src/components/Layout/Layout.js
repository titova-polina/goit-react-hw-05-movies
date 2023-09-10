import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { HeaderSection, Section } from './Layout.styled';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';

const Layout = () => {
  return (
    <>
      <Section>
        <HeaderSection>
          <Header />
        </HeaderSection>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};
export default Layout;
