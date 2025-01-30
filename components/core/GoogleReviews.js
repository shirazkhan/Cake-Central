import React from 'react';
import { styled } from 'styled-components';
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const ReviewContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 50px 0;
`;

const featurableWidgetId = "3977e744-0eaa-4b1e-b932-5ae91e8273f0";


export default function GoogleReviews(props) {
    

    return (
        <ReviewContainer>
            <h2>See What People Are Saying</h2>
            <ReactGoogleReviews structuredData brandName='Cake Central' layout="carousel" featurableId={featurableWidgetId} />
        </ReviewContainer>
    )
}
