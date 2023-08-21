import HideOnScroll from '@/layout/hide-on-scroll';
import AppHeader from '@/layout/app-header';
import { Container, Toolbar } from '@mui/material';
import BackToTopButton from '@/layout/back-to-top-button';

type AppLayoutProps = React.PropsWithChildren;

function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <HideOnScroll>
        <AppHeader />
      </HideOnScroll>
      <Toolbar />
      <BackToTopButton />
      <Container maxWidth="lg" component="main" sx={{ p: 2 }}>
        {children}
      </Container>
    </>
  );
}

export default AppLayout;
