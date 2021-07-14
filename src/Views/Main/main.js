import React, { Component, Suspense } from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TitleCanvas from './Components/TitleCanvas/TitleCanvas';
import SimpleDescription from './Components/SimpleDescription/SimpleDescription';
import Navbar from './Components/Navbar/Navbar';
export class Main extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* Suspense should be on a superior container like App or Root, but it doeasens seem to get along with React-Particles */}
        <Suspense fallback="loading">
          <TitleCanvas />
          <Container>
            <SimpleDescription />
            <Box my={2}>
              {[...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join('\n')}
            </Box>
          </Container>
        </Suspense>
      </>
    );
  }
}

export default Main;
