import React from 'react'
import Home from '../views/Home'
import Blog from '../views/Blog'
import About from '../views/About'
import Courses from '../views/Courses'
import Contact from '../views/Contact'
// const Home = React.lazy(() => import('../views/Home'));
// const Blog = React.lazy(() => import('../views/Blog'));
// const About = React.lazy(() => import('../views/About'));
// const Courses = React.lazy(() => import('../views/Courses'));
// const Contact = React.lazy(() => import('../views/Contact'));
const routes = [
    { path: '/', exact: true, name: 'Page Initial' },
    { path: '/blog', name: 'Blog', component: Blog },
    { path: "/home", name: 'Home', component: Home },
    { path: "/about", name: 'About', component: About },
    { path: "/courses", name: 'Courses', component: Courses },
    { path: "/contact", name: 'Contact', component: Contact },
];
export default routes;