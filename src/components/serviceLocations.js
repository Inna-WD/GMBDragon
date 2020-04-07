import { html } from "../../core/Spaf.js";

const serviceLocations = () => {

    return html`
  <main role="main" class="home">
  <section class="hero">
    <div class="program-banner">
      <h1 class="hero-text">Location Verification Services</h1> <br>
    </div>
  </section>
    
  <nav class="program-info-nav">
  <div><a href="/serviceLocations" data-route="/serviceLocations"><h1 class="program-button">LOCATION VERIFICATION</h1></a></div>
  <div><a href="/serviceListings" data-route="/serviceListings"><h1 class="program-button">LISTING OPTIMIZATION</h1></a></div>
  <div><a href="/servicePhotos" data-route="/servicePhotos"><h1 class="program-button">PHOTOS OPTIMIZATION</h1></a></div>
  <div><a href="/serviceCitations" data-route="/serviceCitations"><h1 class="program-button">CITATIONS and BACKLINKS</h1></a></div>
  <div><a href="/serviceReviews" data-route="/serviceReviews"><h1 class="program-button">CUSTOMER REVIEWS</h1></a></div>
  <div><a href="/serviceContent" data-route="/serviceContent"><h1 class="program-button">LISTING CONTENT CREATION</h1></a></div>
  <div><a href="/servicePhotographer" data-route="/servicePhotographer"><h1 class="program-button">GOOGLE PHOTOGRAPHER</h1></a></div>
  <div><a href="/serviceSEO" data-route="/serviceSEO"><h1 class="program-button">KEYWORD RESEARCH and SEO</h1></a></div>
</nav>


    <section class="program-home">
      <article>
            <h2 class="main-text">What are location verification services ?</h2>
              
              Verification of your business location helps ensure the accuracy of your business information as registered by Google. 
              Verified businesses are twice as likely to be considered reputable by users.
              <br>
              <br>
              Verification of your business protects you from anyone who might pretent as a representative of your business. 
              
              <br>
              <br>
              Verification is a very structured procedure defined by Google. Practically you need to fill in the form and and wait for the postcard.
              It will be sent to the address you provided for your business.
              <br>
              <br>

              Until you’ve completed verification, you won’t be able to edit the business information that appears on Google products.               
              For most businesses, verification means requesting, receiving, and reading a verification postcard from Google.
              <br>
              <br>
              That's practically it!
           
           
        </article>
    </section>


  `;
};

export default serviceLocations;
