import { html } from "../../core/Spaf.js";
import Button from "./test-sub-component.js";

const HomePage = () => {
  //logic here
  return html`
    <main role="main" class="home">
      <section class="hero">
        <div class="hero-banner">
          <h1 class="hero-text">GMBDragon</h1>
        </div>
      </section>


      <section class="programs">
        <h2 class="main-text">What we do</h2>
            <p class="sub-text">
            GMBDragon is a Digital Marketing Agency focused on delivering Google My Business search results optimization (i.e., getting into the 3 results for local businesses which always shows at the top of the organic local search result page).
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
              <button class="btn learn-more">Learn More</button>
            </div>
          </div>

          <div class="program-item">
            <img src="/img/cititions.jpg" alt="Citations and Backlink packages"/>
            <div class="program-content">
              <h3 class="program-name">Citations and Backlink packages </h3>
              <p class="program-brief">
              Backlinks for Local SEO. Similar to citations, backlinks are off-site signals that Google use to assess ...  </p>
              <button class="btn learn-more">Learn More</button>
            </div>
          </div>

          <div class="program-item">
          <img src="/img/reviews.jpg" alt="Customer reviews generation"/>
          <div class="program-content">
            <h3 class="program-name">Customer reviews generation</h3>
            <p class="program-brief">
            Backlinks for Local SEO. Similar to citations, backlinks are off-site signals that Google use ...              </p>
            <button class="btn learn-more">Learn More</button>
          </div>
        </div>

        <div class="program-item">
        <img src="/img/content.jpg" alt="Listing content creation"/>
        <div class="program-content">
          <h3 class="program-name">Listing content creation</h3>
          <p class="program-brief">
          Backlinks for Local SEO. Similar to citations, backlinks are off-site signals that Google use ...              </p>
          <button class="btn learn-more">Learn More</button>
        </div>
      </div>


      <div class="program-item">
      <img src="/img/photographer.jpg" alt="Trusted Google photographer"/>
      <div class="program-content">
        <h3 class="program-name">Trusted Google photographer</h3>
        <p class="program-brief">
        Backlinks for Local SEO. Similar to citations, backlinks are off-site signals that Google use ...              </p>
        <button class="btn learn-more">Learn More</button>
      </div>
    </div>

    <div class="program-item">
      <img src="/img/seo.jpg" alt="Keyword Research and SEO"/>
      <div class="program-content">
        <h3 class="program-name">Keyword Research and SEO</h3>
        <p class="program-brief">
        Backlinks for Local SEO. Similar to citations, backlinks are off-site signals that Google use ...              </p>
        <button class="btn learn-more">Learn More</button>
      </div>
    </div>
 </div>
</section>

<section class="hero-banner">
<span class="about-home-title">ABOUT US</span>
</br>
<span>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa alias
  voluptas, dolore aliquam laboriosam amet quaerat eum distinctio est at
  fugit voluptatibus nesciunt ducimus adipisci iure, dolores illum
  necessitatibus totam!
</span>
</section>
</main>

  `;
};

export default HomePage;
