import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PatternContainer = ({ clickCatgoriesSection, getCategory, categories, searchTerm, setsearchTerm, CurrentIndex, setCurrentIndex }) => {
  const handleSwiperChange = (swiper) => {
    const newIndex = swiper.activeIndex;
    setCurrentIndex(newIndex); // Update the current index on swipe
  };

  return (
    <div
      className="patternContainer"
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        overflow: 'auto',
        overflowX: 'hidden',
      }}
    >
      <div
        style={{
          height: '20em',
          background: 'linear-gradient(to bottom,  #1A1A1A 9%,  #383838 36%,  #4D4D4D 55%, #4D4D4D 84%)',
          padding: '20px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ fontSize: '22px', fontWeight: '600', color: 'white' }}>Categories</span>
        </div>

        {/* Swiper Integration */}
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          onSlideChange={handleSwiperChange}
          navigation
          pagination={{ clickable: true }}
          className="swiper-container"
          style={{ marginTop: '1em' }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => clickCatgoriesSection(index)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  gap: '10px',
                  cursor: 'pointer',
                }}
              >
                <img src={category.img} alt={category.name} style={{ width: '7em', height: '4em' }} />
                <span style={{ color: 'white' }}>{category.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Search Input */}
        <div
          style={{
            position: 'relative',
            bottom: '5em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              backgroundColor: 'white',
              width: '60%',
              gap: '40px',
              borderRadius: '8px',
              padding: '12px 10px',
            }}
          >
            
            <input
              type="text"
              className="searchInputText"
              placeholder="Search Patterns"
              value={searchTerm}
              onChange={(e) => setsearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternContainer;
