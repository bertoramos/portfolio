
import { useRef, useState } from 'react';
import { IonApp, IonSegment, IonSegmentButton } from '@ionic/react';

// Import Swiper styles
import 'swiper/css';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

// register Swiper custom elements
register();

import './Portfolio.css'

import Profile from './Profile';
import About from './About';
import { Virtuoso } from 'react-virtuoso';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';

const Portfolio = () => {

    const tabs = [
      {id: "about", elem: <About />},
      {id: "experience", elem: <Experience />},
      {id: "education", elem: <Education />},
      {id: "projects", elem: <Projects />}
    ]
  
    const segmentRef = useRef<HTMLIonSegmentElement>(null);
    const [swiper, setSwiper] = useState<any>(null);
  
    const onSlideChange = (event: any) => {
      const selectedId = tabs[event.realIndex].id
      if (segmentRef.current) {
        segmentRef.current.value = selectedId;
      }
    }
  
    const segmentChange = (event: any) => {
      const index = tabs.findIndex(t => t.id === event.detail.value);
  
      if (swiper) {
        swiper.slideTo(index);
      }
    }
  
    return (
      <IonApp>
        <Virtuoso
          style={{ height: '100%' }}
          totalCount={1}
          itemContent={(index) => {
            return (
              <div className='feed'>
  
                <Profile />
  
                <IonSegment ref={segmentRef} value={tabs[0].id} color="light" scrollable={true} onIonChange={segmentChange}>
                  {
                    tabs.map((t, idx) => {
                      return (
                        <IonSegmentButton key={idx} className="menuSegmentButton" value={t.id}>
                          {t.id}
                        </IonSegmentButton>
                      );
                    })
                  }
  
                </IonSegment>
  
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={onSlideChange}
                  onSwiper={setSwiper}
                  loop={false}
                >
                  {
                    tabs.map((t, idx) => {
                      return <SwiperSlide key={idx}>{t.elem}</SwiperSlide>
                    })
                  }
                </Swiper>
  
              </div>);
          }}
        ></Virtuoso>
      </IonApp>
    );
  };

export default Portfolio;