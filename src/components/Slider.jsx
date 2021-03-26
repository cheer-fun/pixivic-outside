import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import useDataApi from '@utils/useData';
import { getRequestURL } from '@utils/index';
import Card from '@components/Card/Card';
import Artist from '@components/Artist';
import Tag from '@components/Tag';
import classes from './Card/card.css';

export default function SimpleSlider() {
  // eslint-disable-next-line no-unused-vars
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    getRequestURL,
    { data: [] },
  );
  const [on, setOn] = useState(false);
  const [picData, setPicData] = useState({ title: undefined });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (event) => {
      setPicData(data.data[event]);
    },
  };

  return isLoading
      ? <span>loading</span>
        : (
        // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          <div
            className={classes.slickWarp}
            onMouseOver={() => { setOn(true); }}
            onMouseOut={() => { setOn(false); }}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Slider {...settings} className={classes.sliderWarp}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              {data.data.map((d) => (
                <Card key={d.id} imagesUrl={d?.imageUrls[0]?.medium} />))}
            </Slider>

            <div
              className={classes.cardHeader}
              style={{ opacity: on ? 100 : 0 }}>
              <span
                onClick={() => { window.open(`https://sharemoe.net/illusts/${picData.id}`); }}
                style={{ cursor: 'pointer' }}>
                {picData && picData.title}
              </span>
            </div>
            <div
              className={classes.cardFooter}
              style={{ opacity: on ? 100 : 0 }}>
              <Artist
                id={picData?.artistPreView?.id}
                name={picData?.artistPreView?.name}
                avatar={picData?.artistPreView?.avatar} />
              <ul className={classes.tagList}>
                {picData?.tags?.map((item) => (item?.translatedName ? (<li className={classes.middle} key={item.id}><Tag name={item.translatedName} /></li>) : null))}
              </ul>
            </div>
          </div>
);
}
