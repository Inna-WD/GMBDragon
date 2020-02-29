import { html } from "../../core/Spaf.js";

const StudentProfilePage = () => {
  console.log("Student Profile page");
  return html`
  <main class="class-of">
    <h1 class="graduation">Class of 2020 </h1>
        <div class="student-profile">
            <div class="student-intro">
                <section>
                    <article class="personal-basic">
                        <h1 class="full-name">Bijaya Gautam</h1>
                        <h2 class="professional-position">App System Engineer</h2>
                        <img src="/img/bijaya_pro_pic.png" alt="professional image" class="pro-image">
                    </article>
                    
                    <article>
                        <hr>
                        <div class="personal-contact">
                            <i class="fas fa-home"></i>
                            <p class="vertical-line"></p>
                            <h3>79 Woodhaven Dr, Brampton, ON</h3>
                        </div>

                        <hr>
                        <div class="personal-contact">
                            <i class="fas fa-envelope"></i>
                            <p class="vertical-line"></p>
                            <h3>bijayagautam.ca@outlook.com</h3>
                        </div>
                        
                        <hr>
                        <div class="personal-contact">
                            <i class="fas fa-mobile "></i>
                            <p class="vertical-line"></p>
                            <h3>647-529-3579</h3>
                        </div>
                        <hr>
                    </article>
                </section>

                <section>
                    <article>
                        <h4 class="paragraph-title">Intro</h4>
                        <p class="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis nisi ut eligendi temporibus harum autem amet fugiat quae. At beatae sunt iusto reiciendis eaque unde nesciunt vero repellendus. Iste.</p>
                    </article>

                    <article>
                        <h4 class="paragraph-title">Why humber wddm?</h4>
                        <p class="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur adipisci modi. Eos quis esse expedita impedit qui dolorum explicabo sapiente consequatur, ea, sequi minima natus blanditiis eaque inventore quidem?</P>
                    </article>

                    <article>
                        <h4 class="paragraph-title">What are your major achievements during your studies?</h4>
                        <p class="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur adipisci modi. Eos quis esse expedita impedit qui dolorum explicabo sapiente consequatur, ea, sequi minima natus blanditiis eaque inventore quidem?</P>
                    </article>
                </section>

                <section>
                    <hr class="horizontal-line">
                    <div class="title-icon">
                        <i class="fas fa-layer-group"></i>
                        <p class="group-title">Portfolio</p>
                    </div>
                    <hr class="horizontal-line">

                    <ul class="paragraph-content portfolio-link">
                        <li><a href="#">Personal Site</a></li>
                        <li><a href="https://github.com/bijayagautam">Git Hub</a></li>
                        <li><a href="#">Shopify</a></li>
                        <li>Other :</li>
                    </ul>

                    <div>
                        <ul class="personal-social-media">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                            <li><a href="#"><i class="fab fa-skype"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </section>
            </div>

            <div class="student-indepth-detail">
                <section>
                    <hr class="horizontal-line">
                    <div class="title-icon">
                        <i class="fas fa-briefcase"></i>
                        <p class="group-title">Experience</p>
                    </div>
                    <hr class="horizontal-line">
                    <article>
                        <ul>
                            <li class="job-position">Application Systems Engineer</li>
                            <li class="company-name">Wells Fargo</li>
                        </ul>
                        <p class="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur adipisci modi. Eos quis esse expedita impedit qui dolorum explicabo sapiente consequatur, ea, sequi minima natus blanditiis eaque inventore quidem?</P>
                    </article>

                    <article>
                        <ul>
                            <li class="job-position">Application Developer</li>
                            <li class="company-name">Accenture</li>
                        </ul>
                        <p class="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur adipisci modi. Eos quis esse expedita impedit qui dolorum explicabo sapiente consequatur, ea, sequi minima natus blanditiis eaque inventore quidem?</P>
                    </article>

                    <article>
                        <ul>
                            <li class="job-position">Software Developer</li>
                            <li class="company-name">Dell Inc.</li>
                        </ul>
                        <p class="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur adipisci modi. Eos quis esse expedita impedit qui dolorum explicabo sapiente consequatur, ea, sequi minima natus blanditiis eaque inventore quidem?</P>
                    </article>
                </section>

                <section>
                    <hr class="horizontal-line">
                    <div class="title-icon">
                        <i class="fas fa-graduation-cap"></i>
                        <p class="group-title">Education</p>
                    </div>
                    <hr class="horizontal-line">
                    <article>
                        <ul>
                            <li class="job-position">Humber College</li>
                            <li class="company-name">Certification in Web Design and Development</li>
                        </ul>
                        <p class="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.Earum tenetur adipisci modi. </P>
                    </article>
                    <article>
                        <ul>
                            <li class="job-position">Tarleton State University</li>
                            <li class="company-name">Bsc in Computer Information Systems</li>
                        </ul>
                        <p class="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur adipisci modi. Eos quis esse expedita impedit qui dolorum explicabo sapiente consequatur</P>
                    </article>
                </section>

                <section>
                    <hr class="horizontal-line">
                    <div class="title-icon">
                        <i class="fas fa-cogs"></i>
                        <p class="group-title">Skill & Expertise</p>
                    </div>
                    
                    <hr class="horizontal-line">
                    <article>
                        <p class="paragraph-content">CSS, HTML, Javascript, Node.js, Shopify, Adobe:XD, Photoshop, After Effects, Illustrator</P>
                        <p class="paragraph-content">Team Work, Collaboration</P>
                    </article>
                </section>

                <section>
                    <hr class="horizontal-line">
                    <div class="title-icon">
                        <i class="fas fa-language"></i>
                        <p class="group-title">Languages</p>
                    </div>
                    <hr class="horizontal-line">
                    <article>
                        <p class="paragraph-content">English, Nepalese</P>
                    </article>
                </section>
            </div>
        </div>
    </main>
  `;
};

export default StudentProfilePage;