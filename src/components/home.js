import { html } from "../../core/Spaf.js";
import Button from "./test-sub-component.js";

const HomePage = () => {
  //logic here
  return html`
    <main role="main" class="home">
      <section class="hero">
        <div class="hero-banner">
        
          <h1 class="hero-text">
           <img src="/img/logo_150.png" alt="GMBDragon">
            GMBDragon</h1>
        </div>
      </section>


      <section class="programs">
        <h2 class="main-text">What we do</h2>
            <p class="sub-text">
            GMBDragon is a Digital Marketing Agency focused on delivering Google My Business search results optimization (i.e., getting into the 3 results for local businesses which always shows at the top of the organic local search result page).  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa alias
            voluptas, dolore aliquam laboriosam amet quaerat eum distinctio est at
            fugit voluptatibus nesciunt ducimus adipisci iure, dolores illum
            necessitatibus totam!  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa alias
            voluptas, dolore aliquam laboriosam amet quaerat eum distinctio est at
            fugit voluptatibus nesciunt ducimus adipisci iure, dolores illum
            necessitatibus totam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa alias
            voluptas, dolore aliquam laboriosam amet quaerat eum distinctio est at
            fugit voluptatibus nesciunt ducimus adipisci iure, dolores illum
            necessitatibus totam!  Lorem ipsum, dolor
            </p>
        <div class="program-grid">


          <div class="program-item">
            <img src="/img/location.jpg" alt="Location Verification" />
            <div class="program-content">
              <h3 class="program-name">Location Verification</h3>
                <p class="program-brief">
                If you have multiple locations, open the location you'd like to manage. ... Drag the pin to your business location, using the + and - buttons...
                </p>
              <a href="/serviceLocations" class="btn learn-more">Learn More</a>
            </div>
          </div>


          <div class="program-item">
          <img src="/img/listing.jpg" alt="Listing Optimization" />
          <div class="program-content">
            <h3 class="program-name">Listing Optimization</h3>
              <p class="program-brief">
              Listing optimization is the process of upgrading product pages to improve their search visibility, click-through rate (CTR) ... </p>
              </p>
              <a href="/serviceListings" class="btn learn-more">Learn More</a>
          </div>
        </div>


          <div class="program-item">
            <img src="/img/photo.jpg" alt="Photo Optimization"/>
            <div class="program-content">
              <h3 class="program-name">Photo Optimization</h3>
              <p class="program-brief">
              It's about image SEO. That is, getting your product images and decorative images to rank     ...           </p>
              <a href="/servicePhotos" class="btn learn-more">Learn More</a>
            </div>
          </div>

          <div class="program-item">
            <img src="/img/cititions.jpg" alt="Citations and Backlink packages"/>
            <div class="program-content">
              <h3 class="program-name">Citations and Backlink packages </h3>
              <p class="program-brief">
              Backlinks for Local SEO. Similar to citations, backlinks are off-site signals that Google use to assess ...  </p>
              <a href="/serviceCitations" class="btn learn-more">Learn More</a>
            </div>
          </div>

          <div class="program-item">
          <img src="/img/reviews.jpg" alt="Customer reviews generation"/>
          <div class="program-content">
            <h3 class="program-name">Customer reviews generation</h3>
            <p class="program-brief">
            Backlinks for Local SEO. Similar to citations, backlinks are off-site signals that Google use ...              </p>
            <a href="/serviceReviews" class="btn learn-more">Learn More</a>
          </div>
        </div>

        <div class="program-item">
        <img src="/img/content.jpg" alt="Listing content creation"/>
        <div class="program-content">
          <h3 class="program-name">Listing content creation</h3>
          <p class="program-brief">
          Backlinks for Local SEO. Similar to citations, backlinks are off-site signals that Google use ...              </p>
          <a href="/serviceContent" class="btn learn-more">Learn More</a>
                  </div>
      </div>


      <div class="program-item">
      <img src="/img/photographer.jpg" alt="Trusted Google photographer"/>
      <div class="program-content">
        <h3 class="program-name">Trusted Google photographer</h3>
        <p class="program-brief">
        Backlinks for Local SEO. Similar to citations, backlinks are off-site signals that Google use ...              </p>
        <a href="/servicePhotographer" class="btn learn-more">Learn More</a>
      </div>
    </div>

    <div class="program-item">
      <img src="/img/seo.jpg" alt="Keyword Research and SEO"/>
      <div class="program-content">
        <h3 class="program-name">Keyword Research and SEO</h3>
        <p class="program-brief">
        Backlinks for Local SEO. Similar to citations, backlinks are off-site signals that Google use ...              </p>
        <a href="/serviceSEO" class="btn learn-more">Learn More</a>      
        </div>
    </div>
 </div>
</section>

<section class="about-banner">
<span class="about-home-title">ABOUT US</span>
</br>
<span class="about-text">
<div></div>
<div>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa alias
  voluptas, dolore aliquam laboriosam amet quaerat eum distinctio est at
  fugit voluptatibus nesciunt ducimus adipisci iure, dolores illum
  necessitatibus totam!
  <br>
  <br>

  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa alias
  voluptas, dolore aliquam laboriosam amet quaerat eum distinctio est at
  fugit voluptatibus nesciunt ducimus adipisci iure, dolores illum
  necessitatibus totam!  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa alias
  voluptas, dolore aliquam laboriosam amet quaerat eum distinctio est at
  fugit voluptatibus nesciunt ducimus adipisci iure, dolores illum
  necessitatibus totam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa alias
  voluptas, dolore aliquam laboriosam amet quaerat eum distinctio est at
  fugit voluptatibus nesciunt ducimus adipisci iure, dolores illum
  necessitatibus totam!  Lorem ipsum, dolor
  <br>
  <br>
  
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa alias
  voluptas, dolore aliquam laboriosam amet quaerat eum distinctio est at
  fugit voluptatibus nesciunt ducimus adipisci iure, dolores illum
  necessitatibus totam!  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa alias
  voluptas, dolore aliquam laboriosam amet quaerat eum distinctio est at
  fugit voluptatibus nesciunt ducimus adipisci iure, dolores illum
  necessitatibus totam!
  </div>
  </div>
  </div>
</span>
</section>

<section>
<div class="price-grid">
  <div class="program-item">
    <img src="/img/1.png" alt="Basic Optimization package " />
    <div class="price-content">
      <h3 class="program-name">Basic Optimization package </h3>
        <p class="program-brief">
        Self-service: <br> A free 3-5-minute assessment of the client situation will be provided by GMBDragon.
        This is online tutorial for the business owners to perform self-check of the current business status and make simple do-it-yourself steps to improve their visibility.
                </p>
    </div>
  </div>


  <div class="program-item">
  <img src="/img/2.png" alt="Basic Optimization package " />
  <div class="price-content">
    <h3 class="program-name">Basic Optimization package </h3>
      <p class="program-brief">
      Managed Service: <br>Basic Optimization Package, but outsourced to GMBDragon rather than self serve      </p>
  </div>
</div>


  <div class="program-item">
    <img src="/img/3.png" alt="Advanced Optimization Package"/>
    <div class="price-content">
      <h3 class="program-name">Advanced Optimization Package</h3>
      <p class="program-brief">
Basic optimization sevice +Content creation (Google Trusted Photographer images for GMB listing, website articles, video content), Review campaign with present and past customers,  White-hat backlinks     </div>
  </div>

  <div class="program-item">
    <img src="/img/4.png" alt="Maintenance Package"/>
    <div class="price-content">
      <h3 class="program-name">Maintenance Package</h3>
      <p class="program-brief">
      For customers which finish the 3 month subscription, a low cost monthly maintenance to help keep the listing high:
      Content (2-3 image, 1article) creation, Citations (25 per month), Backlinks (1-5 per month), Review campaign
          </div>
  </div>

  <div class="program-item">
    <img src="/img/5.png" alt="Customized package"/>
    <div class="price-content">
      <h3 class="program-name">Customized package</h3>
      <p class="program-brief">
      Customized package could include all or any combination of the following: web site redesign, content creation, location verification, listing and photo optimization, keyword research and SEO    </div>
  </div>




</div>
</section>


</main>

  `;
};

export default HomePage;
