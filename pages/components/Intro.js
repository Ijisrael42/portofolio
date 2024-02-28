const Intro = () => {
  return (
    <section class="home" id="home">
        <div class="home-content">
            <h1>Hi, It's <span>Judah</span></h1>
            <h3 class="text-animation">I'm a <span></span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae numquam dolores dolorem adipisci recusandae, ex 
                nesciunt. Voluptatum voluptates quasi tempora hic facilis 
                veritatis consequuntur doloribus dolor provident,
                eligendi nam? Modi?
            </p>
            <div class="social-icons">
                <a href="#"><i class='bx bxl-linkedin' ></i></a>
                <a href="#"><i class='bx bxl-github' ></i></a>
                <a href="#"><i class='bx bxl-instagram-alt' ></i></a>
                <a href="#"><i class='bx bxl-twitter' ></i></a>
            </div>

            <div class="btn-group">
                <a href="#" class="btn">Hire</a>
                <a href="#contact" class="btn">Contact</a>
            </div>

        </div>
        <div class="home-img">
            <img src="/image.jpg"  alt=""/>
        </div>
    </section>
  )
}

export default Intro;