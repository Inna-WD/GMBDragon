// fake db
export default {

    students: [
        {
            studentId: 'n012345678',
            name: 'Bijaya Gautam',
            classOf: '2020',
            currentPosition: 'App System Engineer',
            profileImg: '/img/bijaya_pro_pic.png',
            address: '79 Woodhaven Dr, Brampton, ON',
            email: 'bijayagautam.ca@outlook.com',
            phoneNumber: '647-529-3579',
            introMsg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis nisi ut eligendi temporibus harum autem amet fugiat quae. At beatae sunt iusto reiciendis eaque unde nesciunt vero repellendus. Iste',
            whyHumber: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur adipisci modi. Eos quis esse expedita impedit qui dolorum explicabo sapiente consequatur, ea, sequi minima natus blanditiis eaque inventore quidem?',
            majorAchievements: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur adipisci modi. Eos quis esse expedita impedit qui dolorum explicabo sapiente consequatur, ea, sequi minima natus blanditiis eaque inventore quidem?',
            portfolio: {
                personalSite: '',
                github: '',
                shopify: '',
                others: ''
            },
            socialMediaLinks: {
                facebook: '',
                twitter: '',
                googlePlus: '',
                skype: '',
                linkedIn: '',
            },
            experience : [
                {
                    position: 'APPLICATION SYSTEMS ENGINEER',
                    company: 'Wells Fargo',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur adipisci modi. Eos quis esse expedita impedit qui dolorum explicabo sapiente consequatur, ea, sequi minima natus blanditiis eaque inventore quidem?'

                },
                {
                    position: 'APPLICATION DEVELOPER',
                    company: 'Accenture',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur adipisci modi. Eos quis esse expedita impedit qui dolorum explicabo sapiente consequatur, ea, sequi minima natus blanditiis eaque inventore quidem?'

                },
                {
                    position: 'SOFTWARE DEVELOPER',
                    company: 'Dell Inc.',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur adipisci modi. Eos quis esse expedita impedit qui dolorum explicabo sapiente consequatur, ea, sequi minima natus blanditiis eaque inventore quidem?'

                }
            ],
            education : [
                {
                    school: 'HUMBER COLLEGE',
                    program: 'Certification in Web Design and Development',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Earum tenetur adipisci modi.'
                },
                {
                    school: 'TARLETON STATE UNIVERSITY',
                    program: 'Bsc in Computer Information Systems',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Earum tenetur adipisci modi.'
                }
            ],
            skills: 'CSS, HTML, Javascript, Node.js, Shopify, Adobe:XD, Photoshop, After Effects, Illustrator Team Work, Collaboration',
            languages: 'English, Nepalese'

        }
    ],

    getAllStudents() {
        return this.students;
    },
    getStudentData(id) {
        return this.students.filter(data => data.studentId == id)[0];
    }
}