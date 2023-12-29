import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return <StyledMainLayout>{children}</StyledMainLayout>;
};

const StyledMainLayout = styled.main`
    background-color: ${({ theme }) => theme.PRIMARY};
`;

export default MainLayout;
