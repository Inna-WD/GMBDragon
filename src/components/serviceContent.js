import { html } from "../../core/Spaf.js";

const serviceContent = () => {

    return html`
  <main role="main" class="home">
  <section class="hero">
    <div class="program-banner-6">
      <h1 class="hero-text">Listings' content creation</h1> <br>
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
  <div><a href="/serviceSeo" data-route="/serviceSeo"><h1 class="program-button">KEYWORD RESEARCH and SEO</h1></a></div>
</nav>

    <section class="program-home">
      <article>
            <h2 class="main-text">What is Listings' content creation ?</h2>
              <p>
                    some content
              </p>

            <h2 class="main-text">Title 1</h2>
                <p>
                    Content 1 Content 1Content 1Content 1
                </p>

            <h2 class="main-text">Title 2</h2>
                <p>
                    Content 2  Content 2  Content 2  Content 2  Content 2  
              </p>
        </article>
    </section>


  `;
};

export default serviceContent;