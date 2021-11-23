import React, { useEffect, useState } from "react";

import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";

const Map = () => {
    const [state, setState] = useState<any>({
        center: {
            lat: 33.450701,
            lng: 126.570667,
        },
        errMsg: null,
        isLoading: true,
    });

    useEffect(() => {
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setState((prev: any) => ({
                        ...prev,
                        center: {
                            lat: position.coords.latitude, // 위도
                            lng: position.coords.longitude, // 경도
                        },
                        isLoading: false,
                    }));
                },
                (err) => {
                    setState((prev: any) => ({
                        ...prev,
                        errMsg: err.message,
                        isLoading: false,
                    }));
                }
            );
        } else {
            setState((prev: any) => ({
                ...prev,
                errMsg: "geolocation을 사용할수 없어요..",
                isLoading: false,
            }));
        }
    }, []);
    return (
        <>
            <KakaoMap
                center={state.center}
                style={{
                    // 지도의 크기
                    width: "100%",
                    height: "350px",
                }}
                level={3} // 지도의 확대 레벨
            >
                {!state.isLoading && (
                    <MapMarker position={state.center}>
                        <div style={{ padding: "5px", color: "#000" }}>
                            {state.errMsg ? state.errMsg : "여기가 젤리뷰 "}
                        </div>
                    </MapMarker>
                )}
            </KakaoMap>
            {console.log(state.errMsg)}
        </>
    );
};

export default Map;
