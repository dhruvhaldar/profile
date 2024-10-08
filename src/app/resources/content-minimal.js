import { InlineCode } from "@/once-ui/components";
import Link from 'next/link'

const person = {
    firstName: 'Dhruv',
    lastName:  'Haldar',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Aerospace Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Swedish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/dhruvhaldar',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/dhruvhaldar/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:haldardhruv@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Aerospace, Optimization, CFD & Machine Learning Professional</>,
    subline: <>I'm Dhruv, an Aerospace Engineer at <InlineCode>Sankhyasutra Labs</InlineCode>, designing CFD post-processing tools and custom Python modules, and testing with models like the Ahmed body, Eppler airfoil, and drivAer car.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: false,
        subItems: false
    },
    avatar: {
        display: false
    },
    calendar: {
        display: true,
        link: 'https://cal.com/dhruvhaldar'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description:
            <>
                TODO
            </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Sankhyasutra Labs Limited',
                timeframe: 'December 2022 - Present',
                role: 'Senior CFD Engineer (Aerospace)',
                achievements: [
                    <>Collaborated with a team of 10+ CFD software developers, contributing to the development of post-processing functions and performing tests using over 15 established test cases, including the drivAer car model, Ahmed body, and Eppler airfoil.</>,
                    <>Developed 5+ customized modules in Python using Pyvista and Visualization Toolkit (VTK), optimizing performance and enhancing functionality by 80%.</>,
                    <>Created 3 comprehensive product documentations using Sphinx, resulting in a 20% improvement in product usage efficiency for clients.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                    }
                ]
            },
            {
                company: 'SAAB AB',
                timeframe: 'May 2020 - May 2021',
                role: 'Examensarbete',
                achievements: [
                    <>Implemented an Ice Protection System (IPS) model in compliance with EASA CS-25 aviation standards.</>,
                    <>Conducted aircraft programming automation using IronPython.</>,
                    <>Evaluated the feasibility of electrifying conventional aircraft through the project outcome.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'KTH Royal Institute of Technology',
                description: <>Master of Science (M.Sc.) in Aerospace Engineering (Systems Track).</>,
            },
            {
                name: 'SRM Institute of Science and Technology',
                description: <>Bachelor of Technology (B.Tech.) in Mechanical Engineering.</>,
            }
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Python',
                description: <></>,
                images: [
                    {
                        
                    },
                    {
                        
                    },
                ]
            },
            {
                title: 'MATLAB',
                description: <></>,
                images: [
                    {
                    
                    },
                ]
            },
            {
                title: 'GAMS',
                description: <></>,
                images: [
                    {
                    
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [
        { 
            
        },
        { 
            
        },
        { 
            
        },
        { 
            
        },
        { 
            
        },
        { 
           
        },
        { 
            
        },
        { 
            
        },
        { 
            
        },
        { 
            
        },
        { 
            
        },
        { 
            
        },
        { 
            
        },
        { 
                },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };