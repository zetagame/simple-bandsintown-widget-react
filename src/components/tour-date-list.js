import React from 'react';
import TourDateItem from './tour-date-item';

const TourDateList = (props) => {
  const tourDateItems = props.tourDates.map((tourDate) => {
    return <TourDateItem
    tourDate = {tourDate}
    key= {tourDate.id} />
  });

  return(
    <div className= "bitw-container">
      <table className="bitw-custom-table">
        <tbody>
        {tourDateItems}
        </tbody>
      </table>
    </div>
  );
}

export default TourDateList
