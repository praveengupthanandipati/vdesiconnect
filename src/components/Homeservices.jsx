import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import {
  MedicalIcon, ITIcon, FinanceIcon, RadioIcon, TutorIcon,
  PropertyIcon, RealEstateIcon, SummerIcon, VisaIcon,
  InsuranceIcon, EventIcon, CourierIcon,
} from './Icons';

const icons = {
  medical:    <MedicalIcon />,
  it:         <ITIcon />,
  finance:    <FinanceIcon />,
  radio:      <RadioIcon />,
  tutor:      <TutorIcon />,
  property:   <PropertyIcon />,
  realestate: <RealEstateIcon />,
  summer:     <SummerIcon />,
  visa:       <VisaIcon />,
  insurance:  <InsuranceIcon />,
  event:      <EventIcon />,
  courier:    <CourierIcon />,
};

const services = [
  { key: 'medical',     label: 'Medical Assistance',   path: '/medical-assistance',      bg: '#fff0f0', ring: '#ffd6d6' },
  { key: 'it',          label: 'IT Services',           path: '/it-services',             bg: '#f0f6ff', ring: '#c8e0ff' },
  { key: 'finance',     label: 'Finance & Tax',         path: '/finance-tax-services',    bg: '#f0fff5', ring: '#b8f0d0' },
  { key: 'radio',       label: 'Online Radio',          path: '/online-radio',            bg: '#faf0ff', ring: '#e0c8ff' },
  { key: 'tutor',       label: 'Online Tutor',          path: '/online-tutor',            bg: '#fff8f0', ring: '#ffd8a8' },
  { key: 'property',    label: 'Property Management',   path: '/property-management',     bg: '#f0f8ff', ring: '#b8d8f8' },
  { key: 'realestate',  label: 'Real Estate',           path: '/real-estate',             bg: '#f0fff8', ring: '#a8f0cc' },
  { key: 'summer',      label: 'Summer Enrichment',     path: '/summer-enrichment',       bg: '#fffbf0', ring: '#ffe8a0' },
  { key: 'visa',        label: 'Visa Support Services', path: '/visa-support-service',    bg: '#f0fffb', ring: '#a0f0e0' },
  { key: 'insurance',   label: 'Visitors Insurance',    path: '/visitors-insurance',      bg: '#f0f6ff', ring: '#b0d0f8' },
  { key: 'event',       label: 'Event Organization',    path: '/event-organisation',      bg: '#fff0f0', ring: '#ffb8b8' },
  { key: 'courier',     label: 'International Courier', path: '/international-courier',   bg: '#fff6f0', ring: '#ffd0a8' },
];

const Homeservices = () => (
  <section className="home-services">
    <div className="home-services__inner">
      <div className="home-services__row">

        {/* Left label */}
        <div className="home-services__label">
          <span>Essential</span>
          <span>Services</span>
        </div>

        {/* Vertical divider */}
        <div className="home-services__sep" />

        {/* Swiper — fills all remaining width */}
        <div className="home-services__slider">
          <Swiper
            modules={[FreeMode]}
            freeMode={{ enabled: true, momentum: true }}
            grabCursor
            breakpoints={{
              0:    { slidesPerView: 3, spaceBetween: 8  },
              480:  { slidesPerView: 4, spaceBetween: 10 },
              768:  { slidesPerView: 6, spaceBetween: 12 },
              992:  { slidesPerView: 8, spaceBetween: 14 },
              1200: { slidesPerView: 10, spaceBetween: 16 },
              1400: { slidesPerView: 12, spaceBetween: 16 },
            }}
          >
            {services.map((s) => (
              <SwiperSlide key={s.key}>
                <Link to={s.path} className="hs-card">
                  <div
                    className="hs-icon"
                    style={{ background: s.bg, borderColor: s.ring }}
                  >
                    {icons[s.key]}
                  </div>
                  <span className="hs-label">{s.label}</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  </section>
);

export default Homeservices;
