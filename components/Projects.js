const ProjectSection = `
<div id="Project" class="container-lg">
<h2 class="text-center fw-bold text-dark mb-5">Projects I'm Working On</h2>
<div class="row row-cols-1 row-cols-md-2 g-4">

    <!-- Project 1 -->
    <div class="col">
        <div class="card rounded-3 shadow-sm h-100 hover-shadow fade-in">
            <div class="heights rounded-top-3 d-flex align-items-center justify-content-center primary-color-1 bg-gradient text-white fs-1">
                <i class="fas fa-project-diagram emoji"></i>
            </div>
            <div class="card-body">
                <h3 class="h5 fw-semibold text-dark mb-2">E-Commerce Platform</h3>
                <p class="text-muted mb-4">
                    A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes product listings,
                    shopping cart, user authentication, and payment processing.
                </p>
                <div class="d-flex flex-wrap gap-2 mb-4">
                    <span class="badge rounded-pill bg-primary bg-opacity-25 text-primary">React</span>
                    <span class="badge bg-success rounded-pill bg-opacity-25 text-success">Node.js</span>
                    <span class="badge bg-warning rounded-pill bg-opacity-25 text-warning text-opacity-50">MongoDB</span>
                    <span class="badge rounded-pill bg-purple-10 texts-purple">Stripe API</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Project 2 -->
    <div class="col">
        <div class="card rounded shadow-sm h-100 hover-shadow fade-in" >
            <div class="heights rounded-top-3 d-flex align-items-center justify-content-center success-color-1 bg-gradient text-white fs-1">
                <i class="fas fa-mobile-alt emoji"></i>
            </div>
            <div class="card-body">
                <h3 class="h5 fw-semibold text-dark mb-2">Fitness Tracker App</h3>
                <p class="text-muted mb-4">
                    A cross-platform mobile application for tracking workouts, nutrition, and progress.
                    Built with React Native and Firebase for real-time data synchronization.
                </p>
                <div class="d-flex flex-wrap gap-2 mb-4">
                    <span class="badge bg-primary">React Native</span>
                    <span class="badge bg-warning text-dark">Firebase</span>
                    <span class="badge bg-danger">Redux</span>
                    <span class="badge bg-indigo text-dark">Expo</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Project 3 -->
    <div class="col">
        <div class="card rounded shadow-sm h-100 hover-shadow fade-in">
            <div class="heights rounded-top-3 d-flex align-items-center justify-content-center bg-purple bg-gradient text-white fs-1">
                <i class="fas fa-robot emoji"></i>
            </div>
            <div class="card-body">
                <h3 class="h5 fw-semibold text-dark mb-2">AI-Powered Chatbot</h3>
                <p class="text-muted mb-4">
                    A conversational AI assistant built with Python and TensorFlow. Uses natural language processing
                    to understand user queries and provide relevant responses.
                </p>
                <div class="d-flex flex-wrap gap-2 mb-4">
                    <span class="badge bg-primary">Python</span>
                    <span class="badge bg-success">TensorFlow</span>
                    <span class="badge bg-warning text-dark">NLTK</span>
                    <span class="badge bg-danger">Flask</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Project 4 -->
    <div class="col">
        <div class="card rounded shadow-sm h-100 hover-shadow fade-in" >
            <div class="heights rounded-top-3 d-flex align-items-center justify-content-center primary-light-color-1 bg-gradient text-white fs-1">
                <i class="fas fa-chart-bar emoji"></i>
            </div>
            <div class="card-body">
                <h3 class="h5 fw-semibold text-dark mb-2">Data Visualization Dashboard</h3>
                <p class="text-muted mb-4">
                    An interactive dashboard for visualizing complex datasets. Built with D3.js and React,
                    it allows users to filter, sort, and explore data through various chart types.
                </p>
                <div class="d-flex flex-wrap gap-2 mb-4">
                    <span class="badge bg-primary">React</span>
                    <span class="badge bg-success">D3.js</span>
                    <span class="badge bg-warning text-dark">TypeScript</span>
                    <span class="badge bg-purple text-dark">Express</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="text-center mt-4 fade-in" style="animation-delay: 0.4s;">
    <a href="#Project" class="btn btn-outline-primary btn-lg">
        View All Projects
        <i class="fas fa-arrow-right ms-2"></i>
    </a>
</div>
</div>
`;

export default ProjectSection;