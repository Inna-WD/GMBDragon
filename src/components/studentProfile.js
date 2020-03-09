import { html } from "../../core/Spaf.js";
import data from '../studentdata.js'; // from fake DB

const StudentProfilePage = (id) => {
    const student = data.getStudentData(id);
    console.log("Student Profile page", student);
  const tempate = `
  <main class="class-of">
    <h1 class="graduation">Class of ${student.classOf}</h1>
        <div class="student-profile">
            <div class="student-intro">
                <section>
                    <article class="personal-basic">
                        <h1 class="full-name">${student.name}</h1>
                        <h2 class="professional-position">${student.currentPosition}</h2>
                        <img src="${student.profileImg}" alt="professional image" class="pro-image">
                    </article>
                    
                    <article>
                        <hr>
                        <div class="personal-contact">
                            <i class="fas fa-home"></i>
                            <p class="vertical-line"></p>
                            <h3>${student.address}</h3>
                        </div>

                        <hr>
                        <div class="personal-contact">
                            <i class="fas fa-envelope"></i>
                            <p class="vertical-line"></p>
                            <h3>${student.email}</h3>
                        </div>
                        
                        <hr>
                        <div class="personal-contact">
                            <i class="fas fa-mobile "></i>
                            <p class="vertical-line"></p>
                            <h3>${student.phoneNumber}</h3>
                        </div>
                        <hr>
                    </article>
                </section>

                <section>
                    <article>
                        <h4 class="paragraph-title">Intro</h4>
                        <p class="paragraph-content">${student.introMsg}</p>
                    </article>

                    <article>
                        <h4 class="paragraph-title">Why humber wddm?</h4>
                        <p class="paragraph-content">${student.whyHumber}</P>
                    </article>

                    <article>
                        <h4 class="paragraph-title">What are your major achievements during your studies?</h4>
                        <p class="paragraph-content">${student.majorAchievements}</P>
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
                        <li><a href="#">Personal Site: ${student.portfolio.personalSite}</a></li>
                        <li><a href="https://github.com/${student.portfolio.github}">Git Hub: @${student.portfolio.github}</a></li>
                        <li><a href="#">Shopify: ${student.portfolio.shopify}</a></li>
                        <li>Other :${student.portfolio.others}</li>
                    </ul>

                    <div>
                        <ul class="personal-social-media">
                            <li><a href="${student.socialMediaLinks.facebook}"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="${student.socialMediaLinks.twitter}"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="${student.socialMediaLinks.googlePlus}"><i class="fab fa-google-plus-g"></i></a></li>
                            <li><a href="${student.socialMediaLinks.skype}"><i class="fab fa-skype"></i></a></li>
                            <li><a href="${student.socialMediaLinks.linkedIn}"><i class="fab fa-linkedin-in"></i></a></li>
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
                            <li class="job-position">${student.experience[0].position}</li>
                            <li class="company-name">${student.experience[0].company}</li>
                        </ul>
                        <p class="paragraph-content">${student.experience[0].description}</p>
                    </article>

                    <article>
                        <ul>
                            <li class="job-position">${student.experience[1].position}</li>
                            <li class="company-name">${student.experience[1].company}</li>
                        </ul>
                        <p class="paragraph-content">${student.experience[1].description}</p>
                    </article>

                    <article>
                        <ul>
                            <li class="job-position">${student.experience[2].position}</li>
                            <li class="company-name">${student.experience[2].company}</li>
                        </ul>
                        <p class="paragraph-content">${student.experience[2].description}</p>
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
                            <li class="job-position">${student.education[0].school}</li>
                            <li class="company-name">${student.education[0].program}</li>
                        </ul>
                        <p class="paragraph-content">${student.education[0].description} </P>
                    </article>
                    <article>
                        <ul>
                            <li class="job-position">${student.education[1].school}</li>
                            <li class="company-name">${student.education[1].program}</li>
                        </ul>
                        <p class="paragraph-content">${student.education[1].description}</P>
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
                        <p class="paragraph-content">${student.skills.hard}</P>
                        <p class="paragraph-content">${student.skills.soft}</P>
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
                        <p class="paragraph-content">${student.languages}</P>
                    </article>
                </section>
            </div>
        </div>
    </main>
  `;

  return html(tempate)
};

export default StudentProfilePage;