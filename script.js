


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');





menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll=()=> {

    sections .forEach(sec => {{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');

            })
        }
    }
        
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}




// portfolio

document.addEventListener("DOMContentLoaded", function() {
  // Swiper initialization
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Project details
  const projectDetails = {
    "tailor-tech": {
      title: "Tailor Tech",
      description: "Developed Tailor Tech, a cross-platform mobile application that connects customers with professional tailors for tailoring services. The app features 3D modeling technology for virtual clothing design and accurate body measurements, allowing for precise stitching. Built using Flutter for a responsive user experience, Firebase Authentication for secure login, Cloud Firestore for real-time data management, and GetX for state management and routing. The app supports real-time messaging, push notifications, and a user-friendly interface to streamline the tailoring process for both customers and tailors.",
      image: "images/tailortech.jpg"
    },
    "dr-app": {
      title: "DR. APP",
      description: "Dr.App is an Android application developed using Java and Android Studio, with Firebase for both database management and user authentication. Designed to assist users in diagnosing diseases based on their symptoms, Dr.App offers a comprehensive platform that not only provides medical diagnosis but also locates nearby hospitals and clinics using geolocation services. Additionally, the app features a curated feed of news articles related to various diseases and includes essential emergency contact information, ensuring users have access to crucial health resources and updates right at their fingertips.",
      image: "images/drapp.jpg"
    },
    "alnoor-restaurant": {
      title: "Al-Noor Restaurant",
      description: "Al-Noor Restaurant is a dynamic React-based webpage designed to showcase the restaurant's offerings and engage with customers. The site features a comprehensive menu with detailed information about each dish, highlights new and trending products, and displays authentic customer reviews to guide diners. Users can easily browse the menu, add items to their cart, and place orders seamlessly through the intuitive interface. The backend of the website is powered by MongoDB and Node.js, ensuring a robust and efficient system for managing orders and customer interactions.",
      image: "images/alnoor-rest.jpg"
    },
    "ci-cd": {
      title: "CI/CD pipelines of webapp",
      description: "The Open sorce code of django project todoapp was cloned by Github and was furthur deployed on AWS EC2 machine using a Docker file. This includes the steps like creating python Virtual environment, connecting the EC2 machine with with Ubuntu using SSH client. This project was deployed manually on AWS and automatically using docker file.",
      image: "images/devopsjpg.jpg"
    },
    "tera": {
      title: "Deployed Infrastructure with terraform",
      description: "Deploy infrastructure with Terraform and CircleCI for a DevOps project. Use Terraform to define infrastructure as code and CircleCI for automated deployment. Create an EC2 instance, RDS database, S3 bucket, and Elastic Load Balancer (ELB) on AWS. Initialize and apply Terraform configuration in CircleCI. Output deployed infrastructure details.",
      image: "images/tera.jpg"
    },
    "netflix": {
      title: "Netflix Clone App ",
      description: "Developed Netflix clone, a cross-platform mobile application using Flutter.",
      image: "images/netflix.jpg"
    },
    "weather": {
      title: "Weather App ",
      description: "Developed Weather app, a cross-platform mobile application using Flutter that shows weather of your current area using geo location and shows the weather forecast of that place using API.",
      image: "images/weather.jpg"
    },
  };

  // Modal functionality
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeModal = document.querySelector(".close");

  document.querySelectorAll(".card img, .card-content h3").forEach(element => {
    element.addEventListener("click", (event) => {
      const card = event.target.closest('.card');
      const projectKey = card.getAttribute("data-project");
      const project = projectDetails[projectKey];

      if (project) {
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalImage.src = project.image;

        modal.style.display = "block";
        document.body.classList.add("blur");
      }
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("blur");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("blur");
    }
  });
});

// Initialize EmailJS with your user ID
emailjs.init('NYoR4zLLD2OTbwgRr');

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Gather form data
  const formData = new FormData(event.target);
  const data = {
      from_name: formData.get('full_name'),
      from_email: formData.get('email'),
      contact_number: formData.get('contact_number'),
      subject: formData.get('subject'),
      message: formData.get('message')
  };

  // Send email
  emailjs.send('service_r1u3lqj', 'contact_form', data)
      .then(function(response) {
          alert('Email sent successfully!');
          // Optionally, clear the form after successful submission
          event.target.reset();
      }, function(error) {
          alert('Failed to send email. Please try again.');
      });
});

