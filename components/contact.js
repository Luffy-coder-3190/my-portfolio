const ContactSection = `
    <div class="container-lg">
        <h2 class="text-center fw-bold text-dark mb-5">Get In Touch</h2>

        <div class="row row-cols-1 row-cols-md-2">
            <div class="d-md-block fade-in">
                <h3 class="h4 fw-semibold text-secondary mb-4">Contact Information</h3>
                <p class="text-muted mb-4">
                    Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>

                <div class="mb-3 d-flex align-items-start">
                    <div class="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10" style="width: 2.5rem; height: 2.5rem;">
                        <i class="fas fa-envelope text-primary"></i>
                    </div>
                    <div class="ms-3">
                        <h4 class="h6 fw-medium text-dark">Email</h4>
                        <p class="text-muted mb-0">sherpmurimi1@gmail.com</p>
                    </div>
                </div>

                <div class="mb-3 d-flex align-items-start">
                    <div class="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10" style="width: 2.5rem; height: 2.5rem;">
                        <i class="fas fa-phone-alt text-success"></i>
                    </div>
                    <div class="ms-3">
                        <h4 class="h6 fw-medium text-dark">Phone</h4>
                        <p class="text-muted mb-0">+263 78 360 9981</p>
                    </div>
                </div>

                <div class="mb-3 d-flex align-items-start">
                    <div class="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle bg-purple-1 bg-opacity-10" style="width: 2.5rem; height: 2.5rem;">
                        <i class="fas fa-map-marker-alt "></i>
                    </div>
                    <div class="ms-3">
                        <h4 class="h6 fw-medium text-dark">Location</h4>
                        <p class="text-muted mb-0">Gweru, Zimbabwe</p>
                    </div>
                </div>

                <div class="mt-4">
                    <h4 class="h6 fw-medium text-dark mb-3">Follow Me</h4>
                    <div class="d-flex gap-3">
                        <a href="https://www.linkedin.com/in/shepherd-murimi"
                            class="btn flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle shadow-sm"
                            style="width: 2rem; height: 2rem; background-color: #eee; color:var(--bs-gray-500); transition: transform 0.3s;"
                                onmouseover="this.style.backgroundColor='blue'; this.style.color='white'; this.style.transform='scale(1.1)'"
                                onmouseout="this.style.backgroundColor='#eee'; this.style.color='var(--bs-gray-500)'; this.style.transform='scale(1)'"   
                        >
                            <i class="fab fa-linkedin-in" style="font-size: 15px;"></i>
                        </a>
                        <a href="https://github.com/Luffy-coder-3190" class="btn text-dark flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle text-secondary shadow-sm" 
                            style="width: 2rem; height: 2rem; background-color: #eee; color: var(--bs-gray-900); transition: transform 0.3s;"
                            onmouseover="this.style.backgroundColor='var(--bs-gray-200)'; this.style.color='white'; this.style.transform='scale(1.1)'"
                            onmouseout="this.style.backgroundColor='#eee'; this.style.color='var(--bs-gray-900)'; this.style.transform='scale(1)'"
                        >
                            <i class="fab fa-github" style="font-size: 15px;"></i>
                        </a>
                        <a href="https://www.facebook.com/sherpherd.murimi" class="btn text-blue-500 flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle text-secondary shadow-sm" 
                            style="width: 2rem; height: 2rem; background-color: #eee; color: blue; transition: transform 0.3s;"
                            onmouseover="this.style.backgroundColor='white'; this.style.color='var(--bs-info-border-subtle)'; this.style.transform='scale(1.1)'"
                            onmouseout="this.style.backgroundColor='#eee'; this.style.color='var(--bs-gray-500)'; this.style.transform='scale(1)'"
                        >
                            <i class="fab fa-facebook" style="font-size:15px;" ></i>
                        </a>
                        <a href="https://wa.me/263783609981" class="btn text-green-300 flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle text-secondary shadow-sm " 
                            style="width: 2rem; height: 2rem; background-color: #eee; color: var(--bs-gray-500); transition: transform 0.3s;"
                            onmouseover="this.style.backgroundColor='var(--bs-white)'; this.style.color='white'; this.style.transform='scale(1.1)'"
                            onmouseout="this.style.backgroundColor='#eee'; this.style.color='var(--bs-gray-500)'; this.style.transform='scale(1)'"
                        >
                            <i class="fab fa-whatsapp" style="font-size:15px;"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!--contact form-->
            <!-- Popup Modal -->
                <div id="popup" class="popupmes">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>
                        <span class="ms-3 text-white">Sending, please wait...</span>
                    </div>
                </div>
            <div class="d-md-block fade-in" style="animation-delay: 0.2s;">

                <form action="submit.php" method="POST" id="contact-form" class="bg-light p-4 rounded shadow-sm">
                    <div class="mb-3">
                        <label for="name" class="form-label fw-medium text-dark">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            class="form-control"
                            required
                        />
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label fw-medium text-dark">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="form-control"
                            required
                        />
                    </div>

                    <div class="mb-3">
                        <label for="subject" class="form-label fw-medium text-dark">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            class="form-control"
                            required
                        />
                    </div>

                    <div class="mb-3">
                        <label for="message" class="form-label fw-medium text-dark">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            class="form-control"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary w-100">
                        Send Message
                    </button>
                </form>

                <div id="response"></div>

            </div>
        </div>
    </div>
`;

export default ContactSection;
