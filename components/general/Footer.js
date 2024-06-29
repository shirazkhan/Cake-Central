import React from 'react';
import styled from 'styled-components';
import { DESKTOP_VIEW, PRIMARY_THEME_COLOR, WEBSITE_WIDTH } from '../../GlobalVariables';
import Link from 'next/link';
import { FaFacebook, FaSquareInstagram, FaSquareXTwitter, FaTiktok, FaYoutube } from 'react-icons/fa6';

const Container = styled.div`
    width: 100%;
    background: ${PRIMARY_THEME_COLOR};
    color: black;
    padding: 0 0 50px 0;
    ${DESKTOP_VIEW}{
        padding: 25px 0;
    }
`;

const InnerContainer = styled.div`
    width: 100%;
    max-width: calc(${WEBSITE_WIDTH} - 50px);
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(2, 2fr);
    ${DESKTOP_VIEW}{
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: none;
        width: calc(100% - 50px);
        grid-column-gap: 0;

    }
`;

const SocialAndPaymentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    grid-column: span 2;
    margin-top: 20px;
    ${DESKTOP_VIEW}{
        flex-direction: column;
        grid-column: auto;
        margin-top: none;
    }
`;

const SocialAndPaymentTitle = styled.h4`
    margin: 10px 0;
`;

const SocialIcons = styled.div`
    display: flex;
    flex-direction: row;
    svg {
        padding: 0 3px;
    }
`;

const PaymentIcons = styled.div`
    display: flex;
    flex-direction: row;
    svg {
        width: 52px;
        height: 36px;
        padding: 0 3px;
        fill: none;
        border-radius: 5px;
        filter: drop-shadow( 4px 4px 5px rgba(0, 0, 0, 0.4));
    }
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1em;
    line-height: 1.6em;
    font-weight: 600;
    grid-row: 1;
    ${DESKTOP_VIEW}{
        grid-row: auto;
    }
`;

const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    font-size: 0.9em;
    line-height: 1.6em;
    font-weight: 500;
    text-align: center;
    & span {
        width: 100%;
        text-align: center;
    }
`;

const ContactTitle = styled.h4`
    font-size: 1.2em;
    line-height: 2em;
    font-weight: 600;
    margin: 0;
    width: 100%;
    text-align: center;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    ${DESKTOP_VIEW}{
        flex-direction: column;
        padding: 0 20px;
        gap: 20px;
    }

`

const HygieneRating = styled.img`
    max-width: 140px;
    filter: drop-shadow( 4px 4px 14px rgba(0, 0, 0, 0.7));
`;

const CompanyLogo = styled.img`
    max-width: 140px;
    filter: drop-shadow( 1px 1px 2px rgba(255, 255, 255, 0.2));
`;

const BottomContainer = styled.div`
    width: 100%;
    height: 60px;
    background: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BottomContent = styled.div`
    width: calc(100% - 50px);
    max-width: calc(${WEBSITE_WIDTH} - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: center;
    font-size: 0.7em;
    font-weight: 500;

    ${DESKTOP_VIEW}{
        flex-direction: row-reverse;
        font-size: 1em;
        font-weight: 400;
        justify-content: space-between;
    }
`;

const HygieneLink = styled.a`
    max-width: 140px;
    width: 100%;
`;

export default function Footer(props) {
    

    return (
        <>
            <Container>
                <InnerContainer>
                    <LogoContainer>
                        <CompanyLogo src='/logos/svg/CakeCentral-Logo-Black-Full.svg' />
                        <HygieneLink target="_blank" href='https://ratings.food.gov.uk/business/1726795/cake-central-ltd'>
                            <HygieneRating src='/hygiene.svg' />
                        </HygieneLink>
                    </LogoContainer>
                    <ContactContainer>
                        <span>Cake Central Ltd,</span>
                        <span>Uplands Drive,</span>
                        <span>Grantham,</span>
                        <span>NG31 9NZ</span>
                        <span>info@cakecentral.co.uk</span>
                        <span>Tel: 07908821919</span>
                    </ContactContainer>
                    <LinksContainer>
                        <Link href='/our-story'>Our Story</Link>
                        <Link href='/serving-guide'>Serving Guide</Link>
                        <Link href='/return-policy'>Returns / Refunds</Link>
                        <Link href='/delivery-policy'>Delivery</Link>
                        <Link href='/faqs'>FAQ's</Link>
                    </LinksContainer>
                    <LinksContainer>
                        <Link href='/wholesale'>Wholesale</Link>
                        <Link href='/corporate'>Corporate</Link>
                        <Link href='/press'>Press Enquiries</Link>
                        <Link href='/terms-and-conditions'>Terms & Conditions</Link>
                        <Link href='/privacy-policy'>Privacy Policy</Link>
                    </LinksContainer>
                    <SocialAndPaymentContainer>
                        <SocialAndPaymentTitle>Follow us</SocialAndPaymentTitle>
                        <SocialIcons>
                        <a target="_blank" href='https://www.facebook.com/cakecentraluk'><FaFacebook size='31' color='black' /></a>
                        <a target="_blank" href='https://www.instagram.com/cakecentraluk'><FaSquareInstagram size='31' color='black' /></a>
                        <a target="_blank" href='https://www.tiktok.com/@cakecentraluk'><FaTiktok size='31' color='black' /></a>
                        <a target="_blank" href='https://www.x.com/cakecentraluk'><FaSquareXTwitter size='31' color='black' /></a>
                        <a target="_blank" href='https://www.youtube.com/@cakecentraluk'><FaYoutube size='31' color='black' /></a>
                        </SocialIcons>
                        <SocialAndPaymentTitle>Accepted payment methods</SocialAndPaymentTitle>
                        <PaymentIcons>
                        <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
                            <rect width="120" height="80" rx="4" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M86.6666 44.9375L90.3238 35.0625L92.3809 44.9375H86.6666ZM100.952 52.8375L95.8086 27.1625H88.7383C86.3525 27.1625 85.7723 29.0759 85.7723 29.0759L76.1904 52.8375H82.8868L84.2269 49.0244H92.3947L93.148 52.8375H100.952Z" fill="#182E66"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M77.1866 33.5711L78.0952 28.244C78.0952 28.244 75.2896 27.1625 72.3648 27.1625C69.2031 27.1625 61.6955 28.5638 61.6955 35.3738C61.6955 41.7825 70.5071 41.8621 70.5071 45.2266C70.5071 48.5912 62.6034 47.9901 59.9955 45.8676L59.0476 51.4362C59.0476 51.4362 61.8919 52.8375 66.2397 52.8375C70.5869 52.8375 77.1467 50.5544 77.1467 44.3455C77.1467 37.8964 68.2552 37.296 68.2552 34.4921C68.2552 31.6882 74.4602 32.0484 77.1866 33.5711Z" fill="#182E66"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M54.6517 52.8375H47.6191L52.0144 27.1625H59.0477L54.6517 52.8375Z" fill="#182E66"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M42.3113 27.1625L35.9217 44.8213L35.1663 41.0185L35.167 41.0199L32.9114 29.4749C32.9114 29.4749 32.6394 27.1625 29.7324 27.1625H19.1709L19.0476 27.5966C19.0476 27.5966 22.2782 28.2669 26.057 30.5326L31.8793 52.8375H38.8617L49.5238 27.1625H42.3113Z" fill="#182E66"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2857 40.9875L32.1534 29.4695C32.1534 29.4695 31.8963 27.1625 29.1482 27.1625H19.1641L19.0476 27.5955C19.0476 27.5955 23.8467 28.6432 28.4504 32.5652C32.8505 36.3145 34.2857 40.9875 34.2857 40.9875Z" fill="#182E66"/>
                        </svg>
                        <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
                        <rect width="120" height="80" rx="4" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M97.5288 54.6562V53.7384H97.289L97.0137 54.3698L96.7378 53.7384H96.498V54.6562H96.6675V53.9637L96.9257 54.5609H97.1011L97.36 53.9624V54.6562H97.5288ZM96.0111 54.6562V53.8947H96.318V53.7397H95.5361V53.8947H95.843V54.6562H96.0111Z" fill="#F79E1B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M49.6521 58.595H70.3479V21.4044H49.6521V58.595Z" fill="#FF5F00"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M98.2675 40.0003C98.2675 53.063 87.6791 63.652 74.6171 63.652C69.0996 63.652 64.0229 61.7624 60 58.5956C65.5011 54.2646 69.0339 47.5448 69.0339 40.0003C69.0339 32.4552 65.5011 25.7354 60 21.4044C64.0229 18.2376 69.0996 16.348 74.6171 16.348C87.6791 16.348 98.2675 26.937 98.2675 40.0003Z" fill="#F79E1B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M50.966 40.0003C50.966 32.4552 54.4988 25.7354 59.9999 21.4044C55.977 18.2376 50.9003 16.348 45.3828 16.348C32.3208 16.348 21.7324 26.937 21.7324 40.0003C21.7324 53.063 32.3208 63.652 45.3828 63.652C50.9003 63.652 55.977 61.7624 59.9999 58.5956C54.4988 54.2646 50.966 47.5448 50.966 40.0003Z" fill="#EB001B"/>
                        </svg>
                        <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_823_247)">
                        <rect x="1.375" y="1.375" width="117.25" height="77.25" rx="6.625" fill="white"/>
                        <path d="M55.5533 22.9046C61.103 22.9046 64.9675 26.7301 64.9675 32.2997C64.9675 37.8892 61.0235 41.7345 55.4142 41.7345H49.2696V51.5062H44.8301V22.9046L55.5533 22.9046ZM49.2695 38.0081H54.3635C58.2288 38.0081 60.4286 35.9271 60.4286 32.3196C60.4286 28.7124 58.2288 26.6509 54.3834 26.6509H49.2695V38.0081Z" fill="black"/>
                        <path d="M66.1274 45.5799C66.1274 41.9326 68.9222 39.6929 73.8778 39.4154L79.5858 39.0786V37.4732C79.5858 35.1541 78.0198 33.7666 75.404 33.7666C72.9258 33.7666 71.3797 34.9556 71.0035 36.8191H66.9601C67.1979 33.0528 70.4086 30.278 75.5623 30.278C80.6165 30.278 83.8471 32.9538 83.8471 37.136V51.5062H79.7441V48.0772H79.6454C78.4365 50.3963 75.8001 51.8629 73.065 51.8629C68.9818 51.8629 66.1274 49.3258 66.1274 45.5799ZM79.5858 43.697V42.0518L74.452 42.3688C71.8951 42.5473 70.4484 43.6771 70.4484 45.461C70.4484 47.2842 71.9547 48.4736 74.254 48.4736C77.2468 48.4736 79.5858 46.4122 79.5858 43.697Z" fill="black"/>
                        <path d="M87.7206 59.177V55.7082C88.0372 55.7874 88.7506 55.7874 89.1077 55.7874C91.0896 55.7874 92.1601 54.9551 92.8139 52.8145C92.8139 52.7747 93.1908 51.5459 93.1908 51.5261L85.6592 30.6546H90.2967L95.5696 47.6214H95.6484L100.921 30.6546H105.44L97.6303 52.5962C95.8472 57.6508 93.7857 59.276 89.4648 59.276C89.1077 59.276 88.0372 59.2363 87.7206 59.177Z" fill="black"/>
                        <path d="M31.7358 25.6955C32.8058 24.3572 33.5319 22.5603 33.3404 20.724C31.7741 20.8019 29.8627 21.7573 28.7562 23.0967C27.7626 24.2436 26.8832 26.1158 27.1124 27.8751C28.8707 28.0276 30.6273 26.9962 31.7358 25.6955Z" fill="black"/>
                        <path d="M33.3204 28.2186C30.7671 28.0665 28.5961 29.6678 27.3767 29.6678C26.1567 29.6678 24.2894 28.2952 22.2698 28.3322C19.6412 28.3708 17.2022 29.8571 15.8682 32.2209C13.1246 36.9497 15.1442 43.9642 17.8122 47.8155C19.1079 49.7209 20.6694 51.8189 22.7269 51.7435C24.6709 51.6672 25.4328 50.4847 27.7958 50.4847C30.1571 50.4847 30.8435 51.7435 32.9013 51.7054C35.0353 51.6672 36.3695 49.799 37.6651 47.8918C39.1515 45.7198 39.7599 43.6225 39.7982 43.5073C39.7599 43.4692 35.6832 41.9053 35.6454 37.2158C35.6069 33.2892 38.8461 31.4215 38.9985 31.3057C37.1694 28.6003 34.3113 28.2952 33.3204 28.2186Z" fill="black"/>
                        <rect x="1.375" y="1.375" width="117.25" height="77.25" rx="6.625" stroke="black" stroke-width="2.75"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_823_247">
                        <rect width="120" height="80" rx="4" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
                        <rect width="120" height="80" rx="4" fill="white"/>
                        <path d="M57.5437 26.997V35.9796H63.0833C64.4033 35.9796 65.4945 35.5352 66.3569 34.6486C67.2435 33.7642 67.6879 32.7082 67.6879 31.4872C67.6879 30.2904 67.2435 29.2476 66.3569 28.3588C65.4945 27.4502 64.4033 26.9948 63.0833 26.9948H57.5437V26.997ZM57.5437 39.141V49.5602H54.2349V23.8356H63.0129C65.2415 23.8356 67.1335 24.577 68.6933 26.062C70.2773 27.547 71.0693 29.3554 71.0693 31.4872C71.0693 33.6674 70.2773 35.489 68.6933 36.9476C67.1599 38.4106 65.2635 39.1388 63.0107 39.1388H57.5437V39.141ZM74.4133 44.1724C74.4133 45.0348 74.7785 45.752 75.5111 46.3284C76.2415 46.9004 77.0995 47.1886 78.0807 47.1886C79.4733 47.1886 80.7119 46.6738 81.8031 45.6464C82.8965 44.6146 83.4399 43.4046 83.4399 42.0164C82.4081 41.2024 80.9693 40.7954 79.1235 40.7954C77.7815 40.7954 76.6595 41.121 75.7619 41.7678C74.8621 42.4146 74.4133 43.2132 74.4133 44.1724ZM78.6945 31.3794C81.1409 31.3794 83.0703 32.0328 84.4871 33.3374C85.8995 34.6442 86.6079 36.435 86.6079 38.7098V49.5602H83.4421V47.1182H83.2991C81.9307 49.129 80.1091 50.1366 77.8299 50.1366C75.8895 50.1366 74.2637 49.5602 72.9569 48.4118C71.6501 47.2612 70.9967 45.8246 70.9967 44.0998C70.9967 42.2782 71.6853 40.8306 73.0647 39.7526C74.4441 38.6746 76.2833 38.1356 78.5867 38.1356C80.5491 38.1356 82.1705 38.4942 83.4399 39.2136V38.4568C83.4399 37.3084 82.9845 36.3316 82.0737 35.5308C81.1961 34.7411 80.0531 34.3114 78.8727 34.3274C77.0247 34.3274 75.5639 35.104 74.4837 36.6638L71.5709 34.829C73.1769 32.53 75.5529 31.3794 78.6945 31.3794ZM104.771 31.9558L93.7271 57.3218H90.3105L94.4113 48.447L87.1469 31.9558H90.7439L95.9953 44.6036H96.0657L101.174 31.9536L104.771 31.9558Z" fill="#3C4043"/>
                        <path d="M44.1722 36.8948C44.1722 35.8542 44.0842 34.8488 43.917 33.8896H29.9602V39.5832H37.955C37.6239 41.4215 36.5557 43.0445 34.9982 44.0756V47.7716H39.77C42.564 45.1976 44.1722 41.3916 44.1722 36.8948Z" fill="#4285F4"/>
                        <path d="M29.9603 51.34C33.9555 51.34 37.3171 50.031 39.7701 47.7738L34.9983 44.0756C33.6717 44.9688 31.9623 45.4902 29.9603 45.4902C26.1015 45.4902 22.8235 42.8898 21.6531 39.3874H16.7383V43.1956C19.2527 48.1909 24.3678 51.3425 29.9603 51.3422" fill="#34A853"/>
                        <path d="M21.6529 39.3874C21.0355 37.5518 21.0355 35.5646 21.6529 33.729V29.9208H16.7381C15.6991 31.9782 15.1587 34.2512 15.1606 36.556C15.1606 38.943 15.7327 41.198 16.7381 43.1934L21.6529 39.3852V39.3874Z" fill="#FABB05"/>
                        <path d="M29.96 27.6262C32.1424 27.6262 34.096 28.3742 35.636 29.8438V29.846L39.86 25.6264C37.2992 23.2416 33.9552 21.7764 29.9622 21.7764C24.3703 21.7757 19.2553 24.9264 16.7402 29.9208L21.655 33.729C22.8254 30.2266 26.1034 27.6262 29.9622 27.6262" fill="#E94235"/>
                        </svg>
                        <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
                        <rect width="120" height="80" rx="4" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M76.2315 34.67C75.8559 37.1343 73.9727 37.1343 72.1505 37.1343H71.1141L71.8414 32.5332C71.8848 32.2553 72.1248 32.0508 72.4065 32.0508H72.8822C74.1224 32.0508 75.2934 32.0508 75.8975 32.7563C76.2589 33.1785 76.3679 33.8052 76.2315 34.67ZM75.4387 28.2401H68.5683C68.0979 28.2401 67.6984 28.5818 67.6249 29.0456L64.847 46.6499C64.7921 46.9969 65.0613 47.3112 65.4121 47.3112H68.9377C69.2663 47.3112 69.5462 47.0722 69.5976 46.7482L70.386 41.7567C70.4586 41.2929 70.859 40.9512 71.3285 40.9512H73.5023C78.0279 40.9512 80.6402 38.7631 81.3223 34.4248C81.6297 32.5288 81.3347 31.0382 80.4462 29.9945C79.4692 28.8474 77.7374 28.2401 75.4387 28.2401Z" fill="#009CDE"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.2281 34.67C26.8525 37.1343 24.9693 37.1343 23.1471 37.1343H22.1107L22.838 32.5332C22.8814 32.2553 23.1214 32.0508 23.4031 32.0508H23.8788C25.119 32.0508 26.29 32.0508 26.8941 32.7563C27.2556 33.1785 27.3645 33.8052 27.2281 34.67ZM26.4353 28.2401H19.5649C19.0945 28.2401 18.695 28.5818 18.6215 29.0456L15.8436 46.6499C15.7887 46.9969 16.0571 47.3112 16.4087 47.3112H19.6898C20.1593 47.3112 20.5588 46.9695 20.6323 46.5065L21.3826 41.7567C21.4552 41.2929 21.8556 40.9512 22.3251 40.9512H24.4989C29.0245 40.9512 31.6368 38.7631 32.3189 34.4248C32.6263 32.5288 32.3313 31.0382 31.4428 29.9945C30.4658 28.8474 28.734 28.2401 26.4353 28.2401Z" fill="#003087"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.3858 40.9899C42.0678 42.8683 40.5761 44.1296 38.6724 44.1296C37.7184 44.1296 36.954 43.8225 36.4632 43.2418C35.9769 42.6665 35.7935 41.8459 35.9477 40.9333C36.2435 39.0709 37.7601 37.7697 39.6344 37.7697C40.569 37.7697 41.3272 38.0795 41.8277 38.6655C42.3317 39.2559 42.5302 40.0809 42.3858 40.9899ZM46.9708 34.591H43.6808C43.3992 34.591 43.1591 34.7955 43.1148 35.0743L42.9704 35.9931L42.741 35.6603C42.0279 34.6273 40.4396 34.2812 38.854 34.2812C35.2195 34.2812 32.1147 37.0341 31.5106 40.8943C31.1961 42.8205 31.6426 44.6607 32.7357 45.9451C33.7393 47.1251 35.1717 47.6163 36.8787 47.6163C39.8089 47.6163 41.4335 45.7362 41.4335 45.7362L41.2865 46.6497C41.2316 46.9967 41.5 47.311 41.8525 47.311H44.8147C45.2851 47.311 45.6846 46.9702 45.7581 46.5063L47.5368 35.2523C47.5917 34.9053 47.3224 34.591 46.9708 34.591Z" fill="#003087"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M91.3887 40.9899C91.0707 42.8683 89.579 44.1296 87.6754 44.1296C86.7213 44.1296 85.9569 43.8225 85.4661 43.2418C84.9789 42.6665 84.7965 41.8459 84.9506 40.9333C85.2465 39.0709 86.763 37.7697 88.6374 37.7697C89.5719 37.7697 90.3302 38.0795 90.8306 38.6655C91.3347 39.2559 91.5331 40.0809 91.3887 40.9899ZM95.9737 34.591H92.6838C92.4021 34.591 92.162 34.7955 92.1177 35.0743L91.9734 35.9931L91.743 35.6603C91.0308 34.6273 89.4426 34.2812 87.857 34.2812C84.2225 34.2812 81.1177 37.0341 80.5135 40.8943C80.1991 42.8205 80.6455 44.6607 81.7386 45.9451C82.7423 47.1251 84.1746 47.6163 85.8816 47.6163C88.8119 47.6163 90.4365 45.7362 90.4365 45.7362L90.2894 46.6497C90.2345 46.9967 90.5029 47.311 90.8555 47.311H93.8176C94.288 47.311 94.6875 46.9702 94.761 46.5063L96.5397 35.2523C96.5947 34.9053 96.3254 34.591 95.9737 34.591Z" fill="#009CDE"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M64.4927 34.5911H61.186C60.8697 34.5911 60.5739 34.7478 60.3967 35.0098L55.8347 41.7229L53.9019 35.2718C53.7805 34.8682 53.4085 34.5911 52.9868 34.5911H49.7368C49.3444 34.5911 49.068 34.977 49.1947 35.3479L52.8354 46.0284L49.4108 50.857C49.1424 51.2359 49.4135 51.7599 49.8785 51.7599H53.1817C53.4944 51.7599 53.7876 51.6068 53.9665 51.3501L64.9631 35.4896C65.2262 35.1098 64.9551 34.5911 64.4927 34.5911Z" fill="#003087"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M99.8516 28.7239L97.0321 46.6504C96.9771 46.9973 97.2455 47.3116 97.5972 47.3116H100.434C100.903 47.3116 101.303 46.9699 101.376 46.5061L104.157 28.9018C104.212 28.5548 103.943 28.2406 103.591 28.2406H100.418C100.135 28.2406 99.895 28.445 99.8516 28.7239Z" fill="#009CDE"/>
                        </svg>
                        </PaymentIcons>
                    </SocialAndPaymentContainer>
                </InnerContainer>
            </Container>
                <BottomContainer>
                    <BottomContent>
                        <div>
                            <Link href='/terms-and-conditions'>Terms & Conditions</Link> | <Link href='/privacy-policy'>Privacy Policy</Link>
                        </div>
                        <span>© 2024 Cake Central Ltd 15718529. All Rights Reserved.</span>
                    </BottomContent>
                </BottomContainer>
        </>
    )
}
