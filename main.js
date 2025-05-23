import NavigationSection from './components/Navigation.js';
import HomeSection from './components/Home.js';
import AboutSection from './components/About.js';
import ExpertiseSection from './components/Expertise.js';
import SkillsSection from './components/Skills.js';
import ProjectSection from './components/Projects.js';
import ContactSection from './components/contact.js';
import FooterSection from './components/Footer.js';


document.addEventListener('DOMContentLoaded', () => {

document.getElementById('navigation').innerHTML = NavigationSection
document.getElementById('home').innerHTML = HomeSection;
document.getElementById('about').innerHTML = AboutSection;
document.getElementById('expertise').innerHTML = ExpertiseSection;
document.getElementById('skills').innerHTML = SkillsSection;
document.getElementById('projects').innerHTML = ProjectSection;
document.getElementById('contact').innerHTML = ContactSection;
document.getElementById('footer').innerHTML = FooterSection;

});