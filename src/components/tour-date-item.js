import React from 'react';

const TourDateItem = ({tourDate}) => {
  const USAShow = "United States";
  const DateInfo = new Date(tourDate.datetime);
  const MonthNames =  ["Jan", "Febr", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const TicketUrl = tourDate.url;
  const Venue = tourDate.venue.name;
  const Region = tourDate.venue.country === USAShow ? (tourDate.venue.region) : (tourDate.venue.country);
  const City = tourDate.venue.city;
  const DayofWeek = Days[DateInfo.getDay()];
  const Month = MonthNames[DateInfo.getMonth()];
  const DateNumber = DateInfo.getDate();
  const OutOfStock = tourDate.offers.length > 0 ? tourDate.offers[0].status === "sold out" : false;
  const SoldOutClass = OutOfStock ? "bitw-custom-sold-out bitw-custom-buy-tickets" : "bitw-custom-buy-tickets";
  const TicketText = tourDate.offers.length === 0 ? "RSVP" : tourDate.offers[0].status === "sold out" ? "Sold Out" : "Buy Tickets";


  return (
    <tr>
      <td className="bitw-td bitw-td-date">
        <span className="bitw-custom-weekday">{DayofWeek}</span> <span className="bitw-custom-month">{Month}</span> <span className="bitw-custom-day">{DateNumber}</span>
      </td>
      <td className="bitw-td bitw-td-venue-and-location">
        <p>
          <span className="bitw-outer-venue">
            <span className="bitw-inner-venue">
              {Venue}
            </span>
          </span>
        </p>
        <p>
        <span className="bitw-outer-location">
          <span className="bitw-inner-location">
              {City}, {Region}
          </span>
        </span>
      </p>
      <p>
        <span className="bitw-outer-notes">
          <span className="bitw-inner-notes">

          </span>
        </span>
      </p>
    </td>
    <td className="bitw-td bitw-td-tickets">
    <span className="bitw-buy-tickets"><span className={{SoldOutClass}}><a href={TicketUrl} target="_blank">{TicketText}</a></span></span>
  </td>
    </tr>
  );
};

export default TourDateItem;
