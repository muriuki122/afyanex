// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '15px 0';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Simple JavaScript to ensure video plays correctly
        document.addEventListener('DOMContentLoaded', function() {
            const video = document.querySelector('video');
            
            // Ensure video plays even if autoplay is blocked
            video.play().catch(function(error) {
                console.log('Video autoplay was prevented: ', error);
                // Show play button for user interaction
            });
            
            // Add fade-in animation to hero content
            const heroContent = document.querySelector('.hero-content');
            heroContent.style.opacity = 0;
            heroContent.style.transition = 'opacity 1.5s ease-in-out';
            
            setTimeout(function() {
                heroContent.style.opacity = 1;
            }, 500);
        });

// Chatbot functionality
const chatbotToggler = document.querySelector('.chatbot-toggler');
const chatbotContainer = document.querySelector('.chatbot-container');
const closeChatbot = document.querySelector('.close-chatbot');
const chatbotInput = document.querySelector('.chatbot-input input');
const chatbotSendBtn = document.querySelector('.chatbot-input button');
const chatbotMessages = document.querySelector('.chatbot-messages');

// Toggle chatbot
chatbotToggler.addEventListener('click', () => {
    chatbotContainer.classList.toggle('active');
});

closeChatbot.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
});

// AI responses
const medicalResponses = {
    'hello': 'Hello! How can I assist you with your health concerns today?',
    'hi': 'Hi there! How can I help you today?',
    'services': 'We offer a wide range of services including General Outpatient, Diagnostic Laboratory, Pharmaceutical Services, and Maternal & Child Health. Would you like to know more about any specific service?',
    'appointment': 'To book an appointment, you can call us at 0759 887 759 or use our online booking system on our website.',
    'hours': 'We are open 24/7 for emergencies. Our regular consultation hours are from 8:00 AM to 8:00 PM Monday to Saturday, and 9:00 AM to 5:00 PM on Sundays.',
    'location': 'We are located at Muteremko, Bungoma Opp Slaughter House.',
    'doctor': 'We have a team of experienced doctors including Dr. Jesse Gitaka (CEO & Lead Physician), Dr. Terry Kuria (Clinical Manager), and Dr. Sarah Nekesa (General Practitioner).',
    'default': "I'm sorry, I didn't understand that. Could you please rephrase? I can help with information about our services, appointments, doctors, hours, or location."
};

// Function to get AI response
function getAIResponse(message) {
    message = message.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi')) {
        return medicalResponses['hello'];
    } else if (message.includes('service')) {
        return medicalResponses['services'];
    } else if (message.includes('appointment') || message.includes('book')) {
        return medicalResponses['appointment'];
    } else if (message.includes('hour') || message.includes('open') || message.includes('time')) {
        return medicalResponses['hours'];
    } else if (message.includes('location') || message.includes('address') || message.includes('where')) {
        return medicalResponses['location'];
    } else if (message.includes('doctor') || message.includes('physician') || message.includes('staff')) {
        return medicalResponses['doctor'];
    } else {
        return medicalResponses['default'];
    }
}

// Function to create message element
function createMessageElement(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    
    const messageP = document.createElement('p');
    messageP.textContent = message;
    
    messageDiv.appendChild(messageP);
    return messageDiv;
}

// Function to handle user message
function handleUserMessage() {
    const userMessage = chatbotInput.value.trim();
    
    if (userMessage) {
        // Add user message to chat
        chatbotMessages.appendChild(createMessageElement(userMessage, true));
        
        // Clear input
        chatbotInput.value = '';
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        // Simulate AI thinking
        setTimeout(() => {
            // Get AI response
            const aiResponse = getAIResponse(userMessage);
            
            // Add AI response to chat
            chatbotMessages.appendChild(createMessageElement(aiResponse, false));
            
            // Scroll to bottom
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 1000);
    }
}

// Event listeners for sending messages
chatbotSendBtn.addEventListener('click', handleUserMessage);

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserMessage();
    }
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .team-member, .testimonial');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements for animation
document.querySelectorAll('.service-card, .team-member, .testimonial').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initial check on page load
window.addEventListener('load', animateOnScroll);

