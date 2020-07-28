import React from 'react';
import styled from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: 48px 5%;
`;

function TemplateBase(props) {
  return (
    <>
        <Menu />
            <Main>
                { props.children }
            </Main>
        <Footer />
    </>
  );
}

export default TemplateBase;