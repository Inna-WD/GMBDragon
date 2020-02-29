import { html } from "../../core/Spaf.js";
import Button from "./test-sub-component.js";

const HomePage = () => {
  //logic here
  return html`
    <main role="main" class="home">
      <section class="hero">
        <div class="hero-banner">
          <h1 class="hero-text">Humber Media Pros</h1>
        </div>
      </section>
      <section class="programs">
        <h2 class="main-text">School of Media Studies</h2>
        <p class="sub-text">
          We offer the most comprehensive mix of Media, Arts & Communications
          programming of any college in Canada. Our Live Labs and
          work-integrated learning opportunities provide a layer of experience
          that complements the critical storytelling skills taught across
          multiple platforms. We leverage this multi-disciplinary power to
          create highly-skilled, adaptable and resourceful professionals that
          are career-ready.
        </p>
        <div class="program-grid">
          <div class="program-item">
            <img src="/img/web-dev.png" alt="Web Design and Development" />
            <div class="program-content">
              <h3 class="program-name">Web Design and Development</h3>
              <p class="program-brief">
                If you describe yourself as creative, resourceful,
                detail-oriented and a problem solver, then Humber's Web Design
                and Development certificate program is for you.
              </p>
              <button class="btn learn-more">Learn More</button>
            </div>
          </div>
          <div class="program-item">
            <img
              src="/img/graphics-desgin.png"
              alt="Graphic Design for Print and Web"
            />
            <div class="program-content">
              <h3 class="program-name">Graphic Design for Print and Web</h3>
              <p class="program-brief">
                Motivated. Creative. Innovative. If these words describe you,
                then our intensive Graphic Design for Print and Web certificate
                program is for you.
              </p>
              <button class="btn learn-more">Learn More</button>
            </div>
          </div>
          <div class="program-item">
            <img
              src="/img/3dmodeling.png"
              alt="3D Modelling and Visual Effects"
            />
            <div class="program-content">
              <h3 class="program-name">3D Modelling and Visual Effects</h3>
              <p class="program-brief">
                Humber's 3D Modelling and Visual Effects Production certificate
                program focuses on both the conceptual and the technical, as you
                learn to master visual techniques to bring ideas to life.
              </p>
              <button class="btn learn-more">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <section class="students-work">
        <h2 class="main-text">OUR STUDENTS WORK</h2>
        <p class="sub-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa alias
          voluptas, dolore aliquam laboriosam amet quaerat eum distinctio est at
          fugit voluptatibus nesciunt ducimus adipisci iure, dolores illum
          necessitatibus totam!
        </p>
        <ul class="work-grid">
          <li><img src="/img/studentwork1.png" alt="students work img" /></li>
          <li><img src="/img/studentwork2.png" alt="students work img" /></li>
          <li><img src="/img/studentwork3.png" alt="students work img" /></li>
        </ul>
      </section>
      <section class="news-events">
        <h2 class="main-text">NEWS AND EVENTS</h2>
        <p class="sub-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa alias
          voluptas, dolore aliquam laboriosam amet quaerat eum distinctio est at
          fugit voluptatibus nesciunt ducimus adipisci iure, dolores illum
          necessitatibus totam!
        </p>
        <div class="hero-banner events-banner">
          <button class="btn learn-more events">Learn More</button>
        </div>
      </section>
    </main>
  `;
};

export default HomePage;
