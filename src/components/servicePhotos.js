import { html } from "../../core/Spaf.js";

const servicePhotos = () => {

    return html`
  <main role="main" class="home">
  <section class="hero">
    <div class="program-banner-3">
      <h1 class="hero-text">Photo Optimization Services</h1> <br>
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
            <h2 class="main-text">What are Photo Optimization services ?</h2>
            Image optimization is the process of editing web page images in order to increase the overall speed and 
            visibility of the website. Image optimization falls under on-page SEO and deals with optimizing image size, 
            alt tags, and file types to be more SEO-friendly.
            <br>
            <br>
            Having images on website makes web pages more appealing to the human eye and are an important part to any 
            websites design.
            
            <br>
            <br>
            Optimized images do more than just look appealing and can not only increase your websites load time, 
            but also rank on search engines and increase your websites visibility.
<br>
<br>
Optimizing your images has two main benefits:
<br>

<ul class="b">
  <li> Faster page load time: With properly optimized images, users won’t be turned away by slow loading pages 

  </li>
  <li> Increased website visibility: It can also help to improve the overall ranking of your various web pages. 
 
  The faster the page loads, the higher it could rank on search engines.
  </li>
  
</ul>


<br>


</article>
    </section>


  `;
};

export default servicePhotos;






