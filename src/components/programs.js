import { html } from "../../core/Spaf.js";

const ProgramsPage = () => {
  console.log("Programs page");
  return html`
  <main role="main" class="home">
  <section class="hero">
    <div class="program-banner">
      <h1 class="hero-text">Web Design and Development</h1> <br>
    </div>
  </section>

<nav class="program-info-nav">
        <div></div>
        <div class="program-button"> CURRICULIUM</div>
        <div class="program-button"> ACADEMIC STUFF</div>
        <div class="program-button"> ADMISSION REQUIREMENTS</div>
        <div class="program-button"> FEES</div>
        <div class="program-button"> HOW TO APPLY</div>
        <div></div>
</nav>



<div class="program-page-two-columns-structure">
    <div class="program-page-left-panel">
        <section>
            <article>
                   <hr class="horizontal-line">
                   <p>Credential:</p>
                   <p class="font-bold"> Certificate of Achievement</p>
                   <hr class="horizontal-line">
                   
                   <p> Program Code: WDDM911</p>
                   <hr class="horizontal-line">

                   <p>Length: 2 semesters</p>
                   <hr class="horizontal-line">
                  
                   <p>Location: North Campus</p>
                   <hr class="horizontal-line">
                 
                   <p class="font-bold">Next academic year programs</p>
                   <hr>
                   <p class="font-bold"> September 2020:</p>
                   <p>Domestic students: </p>
                   <p class="font-bold-red"> Closed</p>
                   <p>International students: </p>
                   <p class="font-bold"> Waiting List</p>
                   <hr>
                   <p class="font-bold"> January 2021:</p>
                   <p>Domestic students: </p>
                   <p class="font-bold-green"> Open</p>
                   <p>International students: </p>
                   <p class="font-bold-green"> Open</p>
                  <hr>
                  <br>
                </article>


                <article>
                      <a href="/students" data-route="/students"><h1 class="class-button">CLASS of 2019-20</h1></a>
                      <a href="/students" data-route="/students"><h1 class="class-button">CLASS of 2018-19</h1></a>
                </article>


                <article>
                    <h2 class="paragraph-title">Out Graduates work at:</h2>
                    <a href="https://www.timhortons.com/"><img src="/img/emp1.png" alt="Tim Hortons"></a>
                    <a href="https://www.aircanada.com/ca/en/aco/home.html"><img src="/img/emp2.png" alt="Air Canada"></a>
                    <a href="https://www.canadiantire.ca/en.html"><img src="/img/emp3.png" alt="Canadian Tire"></a>
                    <a href="https://www.cnrl.com/"><img src="/img/emp4.png" alt="Canadian Natural"></a>
                    <a href="https://canadianchemistry.ca/"><img src="/img/emp5.png" alt="Chemistry Industry of Canada"></a>
                    <a href="https://www.akzonobel.com/en"><img src="/img/emp6.png" alt="Akzo Nobel"></a>
                    <a href="https://www.bell.ca/"><img src="/img/emp7.png" alt="Bell"></a>
                    <a href="/"><img src="/img/emp8.png" alt="Majestic"></a>
                 </article>
        </article>
      </section>



    </div>


    <section class="program-home">
      <article>
            <h2 class="main-text">Web Design and Development Program at HUMBER</h2>
              <p>
              If you describe yourself as creative, resourceful, detail-oriented and a problem solver, then Humber's Web Design and Development certificate program is for you. You will learn to critically analyze problems and apply best practices to plan, design and build websites/applications. You will build sites and apps from the ground up using the most up-to-date techniques and fundamental technologies. You will also learn to tackle technical challenges by developing strong troubleshooting and problem solving skills. The solutions you create along your journey will be curated into a captivating portfolio website at the end of the program.
              <br><br>Our unique project-based approach leads students in the program through the entire process of creating websites and web applications. You will build static and dynamic websites utilizing the most current versions of industry-standard applications and tools. Programming and design skills are taught with a focus on following best practices and established industry standards including designing websites that are mobile-ready, accessible and future-proof.
              <br><br>You will be constantly challenged to learn more through the escalating curriculum, while working in our dedicated computer lab. You will be guided by experienced faculty and industry professionals who are passionate about the web and related media in a practical, hands-on style of teaching. Opportunities to network with potential employers, alumni and other professionals will help you to build your own network of invaluable contacts to shape your future career.
              <br><br>This program is not eligible for Ontario Student Assistance Program (OSAP). It is eligible for Second Career Funding. Further details and how to apply are found at ontario.ca/page/second-career.
              </p>

            <h2 class="main-text">Expert Faculty</h2>
                <p>
                Program co-ordinator Jennie Grimard is a graduate of the intensive student Graphic Design for Print and Web program who alongside her teaching runs a digital agency. Professors are industry professionals who actively pursue freelance work and their own projects, keeping their web-related skills up to date. They come from a mixture of design and programming backgrounds, which rounds out the expertise that is shared with the students.
                </p>

            <h2 class="main-text">Your Carrer</h2>
                <p>
                Our graduates are prepared to apply for junior and intermediate-level positions within the web and interactive field. Depending on how you choose to specialize and market yourself, a diverse range of positions including front-end development, backend development, web design, UI/UX design and many others are within reach. Our alumni use their skills to gain employment in interactive agencies, development studios and as in-house web professionals in a large variety of companies throughout the Greater Toronto Area and abroad. Opportunities also include freelance work.
                </p>
        </article>

        <article>
          <h2 class="main-text">Our graduates success stories</h2>
            <div class="success-stories">
                <article class="student-program">
                    <a href="/studentProfile" data-route="/studentProfile"><img src="/img/bijaya_pro_pic.png" alt="professional image" class="student-image"></a>
                    <a href="/studentProfile" data-route="/studentProfile"><h1 class="student-name">Bijaya Gautam</h1></a>
                    <h2 class="student-position">App System Engineer</h2>
                </article>
                <article >
                    <h1 class="success-graduation">Class of 2020 </h1>
                    <div class="success-content">
                        First Last joined Humber to assume sole responsibility to secure any responsibility other for compensation responsibility, indemnity or liability obligations.responsibility to secure any other for compensation, indemnity or liability obligationsresponsibility to secure any other for compensation, indemnity or liability obligations
                        <br> <br> First Last works in ABC corporation as a Web designer
                     </div>
                </article>
            </div>
         </article>

       <article>
          <h2 class="main-text">Possible carrer paths</h2>


         </article>




    </section>






</div>




  `;
};

export default ProgramsPage;
