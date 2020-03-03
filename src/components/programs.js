import { html } from "../../core/Spaf.js";

const ProgramsPage = () => {
  console.log("Programs page");
  return html`
  <main role="main" class="home">
  <section class="hero">
    <div class="program-banner">
      <h1 class="hero-text">Web Design and Development</h1> <br>
    </div>
    <div class="program-info-nav">
    </section>
<nav>
<div class="program-button"> CURRICULIUM</div>
<div class="program-button"> ACADEMIC STUFF</div>
<div class="program-button"> ADMISSION REQUIREMENTS</div>
<div class="program-button"> FEES</div>
<div class="program-button"> HOW TO APPLY</div>
</nav>




  `;
};

export default ProgramsPage;
