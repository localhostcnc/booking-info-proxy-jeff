import React from 'react';
import ReactDOM from 'react-dom';
import Booking from '../booking-info-service-jeff/dist/components/app.jsx';
import ReviewSection from '../reviewList-ak/client/src/index.jsx';
import App from '../calendar-component-kt/client/src/index.jsx';
import ListingInfo from '../listinginfo/dist/index.jsx';

ReactDOM.render(<Booking />, document.getElementById('booking'));
ReactDOM.render(<ReviewSection />, document.getElementById('reviews'));
ReactDOM.render(<App />, document.getElementById('calendar'));
ReactDOM.render(<ListingInfo />, document.getElementById('listingInfo'));