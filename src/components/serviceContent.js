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
  <div><a href="/serviceSEO" data-route="/serviceSEO"><h1 class="program-button">KEYWORD RESEARCH and SEO</h1></a></div>
</nav>

<style>
ul.b { 
  list-style-type: square;
  list-style-position: inside;
 
}
</style>

    <section class="program-home">
      <article>
            <h2 class="main-text">What is Content Creation services ?</h2>
              <p>
              Content creation is the ultimate inbound marketing practice. When you create content, you’re providing free and useful information to your audience, attracting potential customers to your website, and retaining existing customers through quality engagement. Content marketing stats demonstrate:             </p>
              </article>
<ul class="b">
  <li> Content marketing brings in 3X as many leads as traditional marketing and costs 62% less </li>
  <li> Small businesses that use content marketing get 126% more leads than those that don’t </li>
  <li> 61% of online purchases are the direct result of a customer reading a blog.</li>
  <li>Companies that publish 16+ blog posts per month get 3.5X more traffic than those that post four or fewer posts per month. </li>
  
</ul>
<br>
<br>
Excellent content and content strategy equal business growth. <br>
<br>
    </section>


  `;
};

export default serviceContent;