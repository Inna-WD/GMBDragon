import { html } from "../../core/Spaf.js";

const StudentsPage = () => {
  console.log("Students page");
  window.loadStudent = id => {
        const route = '/students/' + id;
        window.history.pushState({ path: route }, "", route);
    };
  return html`
    <main>
        <div class="student-program-choice">
            <label class="program-choice">
                <input type="radio" name="program" value="webDesign" checked>
                <span>Web Design and Development</span>
            </label>

            <label class="program-choice">
                <input type="radio" name="program" value="grahicDesign">
                <span>Graphic Design for Print and Web</span>
            </label>

            <label class="program-choice">
                <input type="radio" name="program" value="3Dmodeling">
                <span>3D Modelling and Visual Effects</span>
            </label>
        </div>

        <div class="sort-option">
            <div class="sort-program">
                <label for="class of">Sort by class of</label>
                <select name="class-of">
                    <option value="2020" selected="selected">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>  
                </select>
            </div>
            
            <div class="sort-name">
                <label for="name">Sort by </label>
                <select name="by name">
                    <option>name</option>
                    <option value="ascending">A to Z</option>
                    <option value="descending">Z to A</option> 
                </select>
            </div>
        </div>
        
        <div class="students-headshot">
            <section class="all-students">
                <article class="student-basic">
                    <a href="#" onclick="loadStudent('n012345678')"><img src="/img/bijaya_pro_pic.png" alt="professional image" class="student-image"></a>
                    <a href="/studentProfile" data-route="/studentProfile"><h1 class="student-name">Bijaya Gautam</h1></a>
                    <h2 class="student-position">App System Engineer</h2>
                </article>

                <article class="student-basic">
                    <a href="/studentProfile" data-route="/studentProfile"><img src="/img/joseph_pro_pic.jpg" alt="professional image" class="student-image"></a>
                    <a href="/studentProfile" data-route="/studentProfile"><h1 class="student-name">Joseph Lao</h1></a>
                    <h2 class="student-position">Software Engineer</h2>
                </article>
                
                <article class="student-basic">
                    <a href="/studentProfile" data-route="/studentProfile"><img src="/img/inna_pro_pic.jpg" alt="professional image" class="student-image"></a>
                    <a href="/studentProfile" data-route="/studentProfile"><h1 class="student-name">Inna Manova</h1></a>
                    <h2 class="student-position">Web Designer</h2>
                </article>

                <article class="student-basic">
                    <a href="/studentProfile" data-route="/studentProfile"><img src="/img/bijay_pro_pic.png" alt="professional image" class="student-image"></a>
                    <a href="/studentProfile" data-route="/studentProfile"><h1 class="student-name">Bijay Karki</h1></a>
                    <h2 class="student-position">Application Engineer</h2>
                </article>
            </section>
        </div>
    </main>
  `;
};

export default StudentsPage;
