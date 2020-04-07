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
            GMBDragon is a Digital Marketing Agency focused on delivering Google My Business search results optimization (i.e., getting into the 3 results for local businesses which always shows at the top of the organic local search result page).  
            
            </p>
        <div class="program-grid">


          <div class="program-item">
            <img src="/img/location.jpg" alt="Location Verification" />
            <div class="program-content">
              <h3 class="program-name">Location Verification</h3>
                <p class="program-brief">
                Verification helps ensure the accuracy of your business information across Google                </p>
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
              It's about image ranking. That is, getting your product images and decorative images to rank your  ...           </p>
              <a href="/servicePhotos" class="btn learn-more">Learn More</a>
            </div>
          </div>

          <div class="program-item">
            <img src="/img/cititions.jpg" alt="Citations and Backlink packages"/>
            <div class="program-content">
              <h3 class="program-name">Citations and Backlink packages </h3>
              <p class="program-brief">
              Citations and Backlinks are off-site signals that Google use to assess the integriry and credability of website </p>
              <a href="/serviceCitations" class="btn learn-more">Learn More</a>
            </div>
          </div>

          <div class="program-item">
          <img src="/img/reviews.jpg" alt="Customer reviews generation"/>
          <div class="program-content">
            <h3 class="program-name">Customer reviews generation</h3>
            <p class="program-brief">
            Review generation is the process of getting more customer reviews on your business online review pages, on sites like Google, Facebook and TripA...   </p>
            <a href="/serviceReviews" class="btn learn-more">Learn More</a>
          </div>
        </div>

        <div class="program-item">
        <img src="/img/content.jpg" alt="Listing content creation"/>
        <div class="program-content">
          <h3 class="program-name">Listing content creation</h3>
          <p class="program-brief">
          Content creation is the contribution of information to any media and most especially to digital media for specific contexts             </p>
          <a href="/serviceContent" class="btn learn-more">Learn More</a>
                  </div>
      </div>


      <div class="program-item">
      <img src="/img/photographer.jpg" alt="Trusted Google photographer"/>
      <div class="program-content">
        <h3 class="program-name">Trusted Google photographer</h3>
        <p class="program-brief">
       Hire photographer who is certified by Google to create virtual tours of private property.  </p>
        <a href="/servicePhotographer" class="btn learn-more">Learn More</a>
      </div>
    </div>

    <div class="program-item">
      <img src="/img/seo.jpg" alt="Keyword Research and SEO"/>
      <div class="program-content">
        <h3 class="program-name">Keyword Research and SEO</h3>
        <p class="program-brief">
        Keyword research provides you with specific search data that helps you answer questions like: What are people searching for?      </p>
        <a href="/serviceSEO" class="btn learn-more">Learn More</a>      
        </div>
    </div>
 </div>
</section>

<section class="about-banner">

</br>
<span class="about-text">
<div><span class="about-home-title">ABOUT US</span></div>
<div>
We are a team of two professionals who are super passionate about digital possibilities for small businesses. We believe that digital presence makes a huge 
diffrence and could be learnt by the business owner or... we can improve it. We are here to help you out!
  <br>
  <br>

  <div class="about-sub-text">
        <div>
        <img src="/img/Guy.jpg" alt="Guy" style="width:100px "  >
        </div>
  <div class="about-margin">

Guy has a rich experience creating a full data "stack": Creating the data and data flows (APIs, ETL's), querying it, making complex analysis, predictive analysis and visualizations in dashboards for users and customers. 
Strong product and start-up environment experience, proficient writing very complex SQL queries and stored procedures, as well as data mining and predictive modeling scripts (R and Python)

  
  </div>
  </div>
  <br>
  <br>

  <div class="about-sub-text">
  <div>

  <img src="/img/inna.jpg" alt="Inna" style="width:100px">
  </div>
  <div class="about-margin">

Inna managed multinational, multi m$ complex e-learning projects in Government and high tech domains. Worked with Ministry of Education, Campus, Universities and with international telecommunication companies.
Managed large scale complex software projects in high tech domain for more than seven years. She beleives that a good project manager is one that has the trio of “time-budget-resources” working perfectly, driving customer satisfaction in internal teamwork.

  
  </div>
<br>
 <br>
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
        Self-service: 
        <br> 
        
        A free assessment of the client situation will be provided by GMBDragon.
        <br> 
        <br>This is online tutorial for the business owners to perform self-check of the current business status and make simple do-it-yourself steps to improve their visibility.
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
Basic optimization sevice + Content creation (Google Trusted Photographer images for GMB listing, website articles, video content), <br> Review campaign with present and past customers; <br> White-hat backlinks     </div>
  </div>

  <div class="program-item">
    <img src="/img/4.png" alt="Maintenance Package"/>
    <div class="price-content">
      <h3 class="program-name">Maintenance Package</h3>
      <p class="program-brief">
      For customers which finish the 3 month subscription. This is a low cost monthly maintenance to help keep the listing high:
      Content (2-3 image, 1 article) creation, Citations (25 per month), Backlinks (1-5 per month), Review campaign
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
