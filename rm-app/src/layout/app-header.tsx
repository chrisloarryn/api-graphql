import { forwardRef, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import NextLink from '@/routing/next-link';
import BaseImage from '@/common/base-image';
import logo from '@/images/logo.png';

const StyledLink = styled(NextLink)({
  display: 'flex',
  alignItems: 'center',
});

const AppHeader = forwardRef<React.ComponentRef<typeof AppBar>>(
  function AppHeader(props, ref) {
    return (
      <>
        <AppBar ref={ref} position="fixed">
          <Toolbar>
            <StyledLink href="/">
              <BaseImage src={logo} alt="Rick and Morty" width={60} />
              <Typography variant="h5" component="div" color="textPrimary">
                RICKQL
              </Typography>
            </StyledLink>
            <Box flexGrow={1} />
            <IconButton
              aria-label="Check the source code on GitHub"
              href="https://github.com/chrisloarryn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton aria-label="Toggle menu" onClick={() => {}}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </>
    );
  },
);

export default AppHeader;
