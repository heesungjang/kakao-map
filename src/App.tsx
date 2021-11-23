import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Layout from "./Layout";
import Map from "./Map";
import Tag from "./Tag";

function App() {
    return (
        <Layout renderHeader={<Header title="배송지 입력" />}>
            <MainContainer>
                <Map />
                <InfoContainer>
                    <Tag type="야간진료" />
                    <HospitalName>연세곰돌이소아청소년과의원</HospitalName>
                    <HospitalAddress>
                        서울특별시 서초구 방배로 226, 넥센강남타워 3층
                    </HospitalAddress>
                    <InfoWrap>
                        <DetailTitle>운영시간</DetailTitle>
                        <DetailInfo>월-금 18:00 ~ 23:00 / 토,일,공휴일 09:00 - 19:00</DetailInfo>
                    </InfoWrap>
                    <InfoWrap>
                        <DetailTitle>진료과목</DetailTitle>
                        <DetailInfo>가정의학과, 내과, 비뇨의학과, 사아청소년과</DetailInfo>
                        <DetailTitle>의료지원</DetailTitle>
                        <DetailInfo>X-RAY</DetailInfo>
                    </InfoWrap>
                </InfoContainer>
            </MainContainer>
        </Layout>
    );
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 20px 0 20px;
`;

const HospitalName = styled.span`
    font-size: 20px;
    font-weight: 700;
    padding-top: 10px;
`;

const HospitalAddress = styled.span`
    padding: 15px 0 20px 0;
`;

const InfoWrap = styled.div`
    padding: 15px 15px;
    display: flex;
    margin-bottom: 10px;
    border-radius: 15px;
    flex-direction: column;
    background: #f9f9f9;
`;

const DetailTitle = styled.span`
    color: gray;
    font-size: 16px;
    font-weight: 500;
`;

const DetailInfo = styled.span`
    font-size: 14px;
`;

export default App;
