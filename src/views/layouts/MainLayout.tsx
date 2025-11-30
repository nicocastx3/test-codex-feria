import type { PropsWithChildren } from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/PageFooter';

function MainLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <NavigationBar />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 20px 64px' }}>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
