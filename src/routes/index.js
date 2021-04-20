import Home from '../views/Home'
import Blog from '../views/Blog'
import About from '../views/About'
import Courses from '../views/Courses'
import Contact from '../views/Contact'

const routes = [
    { path: '/', exact: true, name: 'Page Initial' },
    { path: '/blog', name: 'Blog', component: Blog },
    { path: "/home", name: 'Home', component: Home },
    { path: "/about", name: 'About', component: About },
    { path: "/courses", name: 'Courses', component: Courses },
    { path: "/contact", name: 'Contact', component: Contact },
];
export default routes;