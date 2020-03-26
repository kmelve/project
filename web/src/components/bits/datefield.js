import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import en from 'date-fns/locale/en-GB';
// registerLocale('en', en)

import ArrowBlue from '../../assets/arrow-blue.svg';
import ArrowWhite from '../../assets/arrow-white.svg';

const DateField = props => {
  const lightText = props.lightText;
  const topText = props.topText;
  const placeholderText = props.placeholderText;
  const arrow = props.arrow;
  const date = props.date;
  var textColor = lightText ? '#FFF' : '#090039';

  const [startDate, setStartDate] = useState(new Date());
  const handleSetStartDate = (date) => {
    setStartDate(date);
    props.onChange(date);
  }
  return (

    <div className="datefield" style={{color:textColor}}>
      <div className="datefield__toptext">
        <span>{topText}</span>
      </div>
      <div className="datefield__content">
        <form>
          <label className="datefield__container">
            <DatePicker
                selected={startDate}
                onChange={handleSetStartDate}
                className="datefield__textinput"
                // shouldCloseOnSelect={true}
                locale={en}
                placeholderText="dd/mm/yy"
              />
            {/* <span className="datefield__textfield"></span> */}
          </label>
        </form>
        {arrow === true ? <img className="datefield__arrow" src={
          lightText === true ? ArrowWhite: ArrowBlue} alt="->"/>
          : null
        }

      </div>
      {lightText ? <div className="datefield__line" style={{backgroundColor:'#E1E1EF'}}/> : <div className="datefield__line"/>}

    </div>
  );
};

export default DateField;

// <div className="formfield">
//   <div className="formfield__toptext">
//     <span>{topText}</span>
//   </div>
//   <div className="formfield__content">
//     <span>{placeholderText}</span>
//     {arrow === true ? <img className="formfield__arrow" src={lightText === true ? ArrowWhite: ArrowBlue} alt="->"/> : null}
//   </div>
//   <div className="formfield__line"/>
// </div>

        // <input type="submit" value="Submit" />
