
import Slider from "react-slick";

const MainSlider=()=>{
   
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };

    return(<>
        
        <Slider {...settings}>
          <div>
            <h3>Shop And Earn</h3>
          </div>
          <div>
            <h3>Todays Deals</h3>
          </div>
          <div>
            <h3>Refer And Earn</h3>
          </div>

          <div>
            <h3>Shop And Earn</h3>
          </div>
          <div>
            <h3>Todays Deals</h3>
          </div>
          <div>
            <h3>Refer And Earn</h3>
          </div>
         
        </Slider>
        </>)
}
export default MainSlider;