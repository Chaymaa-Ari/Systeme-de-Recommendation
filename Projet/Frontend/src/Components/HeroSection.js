import "./HeroSection.css";
function HeroSection() {
  return (
   
    <section id="hero" class="d-flex align-items-center justify-content-center">
      <div class="container" data-aos="fade-up">
    
        <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <div class="col-xl-6 col-lg-8">
            <br></br>
            <h1>Get The Right Job <br></br>You Deserve</h1>
            <h2><span></span></h2>
          </div>
        </div>
    
        <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
          <div class="col-xl-2 col-md-4">
            <div class="icon-box">
              <i class="ri-store-line"></i>
              <h3><a href="/">Simplicity</a></h3>
            </div>
          </div>
          <div class="col-xl-2 col-md-4">
            <div class="icon-box">
              <i class="ri-bar-chart-box-line"></i>
              <h3><a href="/">Speed</a></h3>
            </div>
          </div>
          <div class="col-xl-2 col-md-4">
            <div class="icon-box">
              <i class="ri-calendar-todo-line"></i>
              <h3><a href="/">National</a></h3>
            </div>
          </div>
          <div class="col-xl-2 col-md-4">
            <div class="icon-box">
              <i class="ri-paint-brush-line"></i>
              <h3><a href="/">Professional</a></h3>
            </div>
          </div>
        </div>
    
      </div>
    </section>
   
  );
}

export default HeroSection;
