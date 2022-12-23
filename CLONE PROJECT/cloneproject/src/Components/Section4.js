import React from "react";
import {
    Information,
    Slogan4,
    Slogan5,
    BigBox,
    PopDivs,
} from "../styles/styled.js"
import BtnActive from "../Components/BtnActiveComponent";
import img1to3 from '../img/1to3.png'
import img4to8 from '../img/4to8.png'
import img9to13 from '../img/9to13.png'
import designPng from "../img/design.png"
import img14to17 from '../img/14to17.png'
import useScrollFadeIn from "../hooks/useScrollFadeIn";

function Section4(){

    const animatedRightItem = useScrollFadeIn('right', 0.65, 0.1);

    return(
        <>
            <Information>
                <Slogan4>디프만의 팀은 어떻게 구성되어 있을까요?</Slogan4>
                <BtnActive/>
                <div style={{display: "grid", placeItems:"center", gridTemplateColumns: "repeat(1,1fr)" }}>
                    <PopDivs>
                        <img className="teamPng" alt="designPng" src={designPng}/>
                        <div style={{textAlign:"left"}}>
                            <h3>서비스 디자인의 모든 것을 담당하는<br/>UIUX 디자이너</h3>
                            <p style={{fontSize:"20px"}}>서비스 기획부터 UX/UI, 브랜딩, 마케팅까지 -<br/>서비스 런칭에 필요한 메인 업무를 담당하게 되어요.</p>                            
                        </div>
 
                    </PopDivs>
                </div>
            </Information>
            <Information {...animatedRightItem}>
                <Slogan4>디프만 12기는 다음과 같이 진행될 예정이에요!</Slogan4>
                <Slogan5>디프만 12기는 매주 토요일, 총 17주간 진행됩니다.</Slogan5>
                <div className="boxPut">
                    <BigBox>
                        <div>
                        <div className="textsmall">1~3주차</div>
                        <div className="textMedium" >12기를 함께할 멤버들을 만날 수 있는 OT와 멋진<br/>서비스를 위한 아이디에이션, MVP 설정을 진행해요.</div>              
                        </div>
                        <img style={{marginLeft: "188px"}} alt="img1to3" src={img1to3}/>
                    </BigBox>
                    <BigBox>
                        <div>
                        <div className="textsmall">4~8주차</div>
                        <div className="textMedium">연사들의 강연을 들으며<br/>서비스 기획을 구체화하고, UT와 중간 공유로 유의미한 피드백을 받아요.</div>              
                        </div>
                        <img style={{marginLeft: "13px"}} alt="img4to8" src={img4to8}/>
                    </BigBox>
                    <BigBox>
                        <div>
                        <div className="textsmall">9~13주차</div>
                        <div className="textMedium">론칭을 위해 열심히 팀 활동을 수행해요.</div>              
                        </div>
                        <img style={{marginLeft: "307px"}} alt="img9to13" src={img9to13}/>
                    </BigBox>
                    <BigBox>
                        <div>
                        <div className="textsmall">14~17주차</div>
                        <div className="textMedium">드디어 최종 발표! 함께 모여 열심히 만든 서비스를<br/>공유하고 우승팀을 선정해요.</div>              
                        </div>
                        <img style={{marginLeft: "215.3px"}} alt="img14to17" src={img14to17}/>
                    </BigBox>
                </div>
      </Information>
        </>
    )
}

export default Section4;