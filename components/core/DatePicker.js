import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PRIMARY_BUTTON_COLOR } from "../../GlobalVariables";

const Container = styled.div`
  width: calc(100% - 20px);
  margin: 20px 10px;
`;

const Label = styled.label`
  display: block;
  font-size: 1.1em;
  font-weight: 500;
  margin-bottom: 10px;
`;

const CustomDatePicker = styled(DatePicker)`
    background-color: white;
    color: black;
    font-size: 1em;
    border: 1px solid ${PRIMARY_BUTTON_COLOR}50;
    padding: 8px 16px;
    width: 100px;
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
    background-color: ${PRIMARY_BUTTON_COLOR}20;
    }

    &:active {
    background-color: ${PRIMARY_BUTTON_COLOR}50;
    }

    &.selected {
    background-color: ${PRIMARY_BUTTON_COLOR};
    color: white;
    }
`;

const DisplayDate = styled.p`
  margin-top: 10px;
  font-size: 1em;
`;

const DatePickerWrapper = styled.div`
    margin-bottom: 5px;

    .react-datepicker {
        border-radius: 8px;
        border: 1px solid ${PRIMARY_BUTTON_COLOR}50;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        font-family: inherit;
    }

    .react-datepicker__header {
        background-color: ${PRIMARY_BUTTON_COLOR}20;
        border-bottom: 1px solid ${PRIMARY_BUTTON_COLOR}50;
    }

    .react-datepicker__day:hover {
        background-color: ${PRIMARY_BUTTON_COLOR}30;
        border-radius: 50%;
    }

    .react-datepicker__current-month {
        font-weight: 600;
    }

    .react-datepicker__day {
        border-radius: 50%;
        transition: background-color 0.2s;
    }

    .react-datepicker__day--selected{
        background-color: ${PRIMARY_BUTTON_COLOR};
    }

    .react-datepicker__day--selected:hover {
        background-color: ${PRIMARY_BUTTON_COLOR};
      }

    .react-datepicker__input-container input:not(:placeholder-shown){
    background-color: ${PRIMARY_BUTTON_COLOR};
    color: white;
    }

`;

const DateSelector = ({ date, setDate, advancedNotice }) => {
    // Helper function to get the minimum selectable date (2 days from today)
    const getMinDate = () => {
        const today = new Date();
        today.setDate(today.getDate() + (parseInt(advancedNotice) || 0));
        return today;
    };

  return (
    <DatePickerWrapper>
        <Container>
            <Label>Select Your Collection/Delivery Date:</Label>
            <CustomDatePicker
                selected={date}
                onChange={(newDate) => setDate(newDate)} // Store raw date object
                minDate={getMinDate()} // Prevent past dates
                dateFormat="dd/MM/yyyy" // Input format
                placeholderText="Select a date"
                withPortal
            />
        </Container>
    </DatePickerWrapper>
  );
};

export default DateSelector;
