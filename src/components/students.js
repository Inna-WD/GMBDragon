import { html } from "../../core/Spaf.js";

const StudentsPage = () => {
    console.log("Students page");
    window.loadStudent = id => {
        const route = '/students/' + id;
        window.history.pushState({ path: route }, "", route);
    };
    return html`
    <main class="class-of">
    <h1 class="graduation">Class of 2020 </h1>
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
    </main>
  `;
};

export default StudentsPage;
