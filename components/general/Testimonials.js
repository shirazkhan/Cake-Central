import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: #f1ece2;
    width: 100%;
    padding: 25px 0;
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.75em;
    flex-direction: column;
    text-align: center;
`;

const ReviewScrollContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 35px 0;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;

    &:after {
        content: '';
        padding-right: 5%;
      }
`;

const ReviewContainer = styled.div`
    background: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 90%;
    min-width: 90%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 5%;
    scroll-snap-align: center;

    &:last-child {
        margin-right: 0;
    }
`;

const ProfileContainer = styled.div`
    display: flex;
    align-content: center;
    width: 85%;
    height: 100px;
`;

const ProfileTitle = styled.div`
    font-size: 0.75em;
    text-align: start;
`;

const ProfileSubTitle = styled.div`
    font-size: 0.5em;
    color: #8c6900;
    font-family: futura-pt, sans-serif;
    font-weight: 500;
    font-style: normal;
    text-align: start;
`;

const ProfileImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50px;
`;

const ReviewText = styled.p`
    font-size: 0.6em;
    width: 85%;
    text-align: start;
    margin: 0;
`;

const Border = styled.span`
    height: 3px;
    width: 40%;
    border-top: 3px solid #8c6900;
`;

const Text = styled.h2`
    line-height: 1.25em;
    font-family: futura-pt,sans-serif;
    font-weight: 400;
    margin: 0;
    padding-bottom: 10px;
`;

const Mandala = styled.img`
    max-width: 100px;
`;

export default function Testimonials() {
    return (
        <>
            <Container>
                <Text>What our clients say about us</Text>
                <Border />
                <ReviewScrollContainer>
                    <ReviewContainer>
                        <ProfileContainer>
                            <ProfileImage src="https://modelsfashionpk.com/mfp-images/mfp_profile_thumb/Komal-Meer-Actress-Model-457.jpg" />
                            <span style = {{marginLeft: "20px"}}>
                                <ProfileTitle>Hareem Farooq</ProfileTitle>
                                <ProfileSubTitle>Our Bridal Customer</ProfileSubTitle>
                            </span>
                        </ProfileContainer>
                        <ReviewText>
                                Maecenas sit amet tincidunt elit. Pellentesque habitant morbi tristique senectus habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nulla facilisi dolor.
                        </ReviewText>
                    </ReviewContainer>
                    <ReviewContainer>
                        <ProfileContainer>
                            <ProfileImage src="https://modelsfashionpk.com/mfp-images/mfp_profile_thumb/Komal-Meer-Actress-Model-457.jpg" />
                            <span style = {{marginLeft: "20px"}}>
                                <ProfileTitle>Hareem Farooq</ProfileTitle>
                                <ProfileSubTitle>Our Bridal Customer</ProfileSubTitle>
                            </span>
                        </ProfileContainer>
                        <ReviewText>
                                Maecenas sit amet tincidunt elit. Pellentesque habitant morbi tristique senectus habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nulla facilisi dolor.
                        </ReviewText>
                    </ReviewContainer>
                    <ReviewContainer>
                        <ProfileContainer>
                            <ProfileImage src="https://modelsfashionpk.com/mfp-images/mfp_profile_thumb/Komal-Meer-Actress-Model-457.jpg" />
                            <span style = {{marginLeft: "20px"}}>
                                <ProfileTitle>Hareem Farooq</ProfileTitle>
                                <ProfileSubTitle>Our Bridal Customer</ProfileSubTitle>
                            </span>
                        </ProfileContainer>
                        <ReviewText>
                                Maecenas sit amet tincidunt elit. Pellentesque habitant morbi tristique senectus habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nulla facilisi dolor.
                        </ReviewText>
                    </ReviewContainer>
                    <ReviewContainer>
                        <ProfileContainer>
                            <ProfileImage src="https://modelsfashionpk.com/mfp-images/mfp_profile_thumb/Komal-Meer-Actress-Model-457.jpg" />
                            <span style = {{marginLeft: "20px"}}>
                                <ProfileTitle>Hareem Farooq</ProfileTitle>
                                <ProfileSubTitle>Our Bridal Customer</ProfileSubTitle>
                            </span>
                        </ProfileContainer>
                        <ReviewText>
                                Maecenas sit amet tincidunt elit. Pellentesque habitant morbi tristique senectus habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nulla facilisi dolor.
                        </ReviewText>
                    </ReviewContainer>
                    <ReviewContainer>
                        <ProfileContainer>
                            <ProfileImage src="https://modelsfashionpk.com/mfp-images/mfp_profile_thumb/Komal-Meer-Actress-Model-457.jpg" />
                            <span style = {{marginLeft: "20px"}}>
                                <ProfileTitle>Hareem Farooq</ProfileTitle>
                                <ProfileSubTitle>Our Bridal Customer</ProfileSubTitle>
                            </span>
                        </ProfileContainer>
                        <ReviewText>
                                Maecenas sit amet tincidunt elit. Pellentesque habitant morbi tristique senectus habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nulla facilisi dolor.
                        </ReviewText>
                    </ReviewContainer>
                    <ReviewContainer>
                        <ProfileContainer>
                            <ProfileImage src="https://modelsfashionpk.com/mfp-images/mfp_profile_thumb/Komal-Meer-Actress-Model-457.jpg" />
                            <span style = {{marginLeft: "20px"}}>
                                <ProfileTitle>Hareem Farooq</ProfileTitle>
                                <ProfileSubTitle>Our Bridal Customer</ProfileSubTitle>
                            </span>
                        </ProfileContainer>
                        <ReviewText>
                                Maecenas sit amet tincidunt elit. Pellentesque habitant morbi tristique senectus habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas nulla facilisi dolor.
                        </ReviewText>
                    </ReviewContainer>
                </ReviewScrollContainer>
            </Container>
        </>
    )
}
