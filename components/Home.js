const HomeSection = `
    <div class="container-lg py-5">
        <!-- Profile Section -->
        <div class="d-flex flex-column flex-md-row align-items-center">
            <div class="md-6 d-flex justify-content-center fade-in" style="animation-delay: 0.2s;">
                <div
                    class="position-relative rounded-circle overflow-hidden border border-4 border-white shadow"
                    style="width: 16rem; height: 16rem;"
                >
                    <img
                        src="resources/profile/tanya.JPG"
                        alt="Profile Photo"
                        class="w-100 h-100 object-fit-cover"
                    />
                </div>
            </div>

            <div class="md-6 mb-4 mb-md-0 d-flex flex-column px-3 justify-content-center ps-md-4 fade-in">
                <h1 class="display-4 fw-bold mb-4 text-white ">
                    <span class="text-primary">Tanyaradzwa Shepherd Murimi</span>: <span style="font-size:40px;">Where design meets purpose-driven technology.</span>
                </h1>

                <div class="container1">
                    ${[...Array(22).keys()].map(i => `<div class="circle" style="--i:${i};"></div>`).join('')}
                </div>

                <h2 class="h3 fw-semibold text-secondary mb-4">Full Stack Developer</h2>

                <p class="lead text-white mb-4 mission" style="max-width: 36rem;">
                    "I build digital experiences that are fast, easy for everyone to use, and visually awesome — 
                    all with the goal of making tech that actually helps people live better."
                </p>

                <div class="d-flex gap-3">
                    <a href="#contact" class="btn btn-primary btn-lg btn-bd-primary">Contact Me</a>
                    <a href="#projects" class="btn btn-outline-primary btn-lg ">View Work</a>
                </div>
            </div>
        </div>
    </div>
`;
export default HomeSection;
