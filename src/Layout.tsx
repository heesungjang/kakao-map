//STYLE
import styled from "styled-components";

interface ILayout {
    scrollRef?: React.ReactNode | null;
    renderHeader?: React.ReactElement | JSX.Element;
    children: React.ReactNode | React.ReactElement | null;
    renderFooter?: React.ReactElement | JSX.Element;
    onScroll?: () => any;
}

const Layout: React.FC<ILayout> = ({
    renderHeader,
    children,
    onScroll,
    renderFooter,
    scrollRef,
}) => {
    return (
        <Container hasHeader={renderHeader ? true : false}>
            {renderHeader && <HeaderWrap>{renderHeader}</HeaderWrap>}
            <ContentWrap onScroll={onScroll && onScroll} ref={scrollRef}>
                {children}
            </ContentWrap>
            {renderFooter && <FooterWrap>{renderFooter}</FooterWrap>}
        </Container>
    );
};

const Container = styled.section<{ hasHeader: boolean }>`
    background-color: #fff;
    position: relative;
    height: 100%;
    padding-top: ${({ hasHeader }) => hasHeader && "56px"};
    display: flex;
    flex: 1;
    flex-flow: column nowrap;
`;

const HeaderWrap = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
`;
const ContentWrap = styled.div<{ ref: any | undefined }>`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`;

const FooterWrap = styled.div`
    margin-top: auto;
    width: 100%;
`;
export default Layout;
