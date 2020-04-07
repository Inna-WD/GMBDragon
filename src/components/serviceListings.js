import { html } from "../../core/Spaf.js";

const serviceListings = () => {

    return html`
  <main role="main" class="home">
  <section class="hero">
    <div class="program-banner-2">
      <h1 class="hero-text">Listing Optimization Services</h1> <br>
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
            <h2 class="main-text">What are Listing Optimization services ?</h2>
              <p>
Google My Business is a free tool offered by Google for business owners to manage how their information is listed in search results. 
 
If you have a local business, you will definitely want to set up your business location on Google My Business so people can find you 
when they search in Google Maps. 
<br>
<br>
When people do a search in Google, they’ll see a map and a list of the top three local listings that are nearby, 
before they see any other results.
With Google My Business, you can manage your location on Google maps, the knowledge graph, and online reviews.
              </p>
<br>
<p>
The first step is to set up your Google My Business Listing. 
Then you'll need to choose the category, which will help Google decide which searches your local listing belongs in. 
<br>
<br>
Photos help your listing to stand out and give potential customers a glimpse of what to expect.  
Make sure you use high-quality images that make your business look good and show off your products.
<br>
<br>
Consistency of the information - Google’s algorithm looks to verify the legitimacy of a listing and its consistency in how it’s listed 
across different websites. 
Pick a standard way to write out your address, a consistent phone number to use, and make sure all your listings match both each other 
and the information you provide on your website. 
<br>
<br>


Reviews - Google wants to provide the most useful information to its users, and users want to find the nearby business that seems the best. 
In both cases, it benefits your business to have a high star rating.
<br>
<br>


Site optimization - An optimized website for both customers and search engines will be much more likely 
to make it into the list of the top three in a local Google search.
<br>
<br>


<br>

     </article>
    </section>


  `;
};

export default serviceListings;