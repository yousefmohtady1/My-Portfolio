# Yousef Mohtady Portfolio - Personal Website

Personal portfolio website built with Flask, featuring a fully functional contact form powered by EmailJS.

## Features

- Modern, responsive design
- Fully functional contact form
- Arabic language support
- Form validation
- Clear confirmation messages
- Easy to maintain and extend

## Installation & Setup

### Requirements

- Python 3.7+
- Flask

### Quick Setup

1. **Install dependencies:**

```bash
pip install -r requirements.txt
```

2. **Configure EmailJS:**

   - Follow the `SETUP_FINAL.md` guide
   - Obtain Service ID, Template ID, and Public Key

3. **Update the code:**

   - Open `static/js/script.js`
   - Replace `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID` with actual values

4. **Run the application:**

```bash
python app.py
```

5. **Open the website:**
   - Go to `http://localhost:5000`

## Project Structure

```
Project_1/
├── app.py                    # Main Flask application
├── requirements.txt          # Python dependencies
├── static/
│   ├── css/
│   │   └── styles.css        # CSS files
│   └── js/
│       └── script.js         # JavaScript with EmailJS integration
├── templates/
│   └── index.html            # Main portfolio page
├── SETUP_FINAL.md            # Setup guide
└── README.md                 # This file
```

## Sections

- **Hero Section** – Personal introduction
- **About** – About me
- **Achievements** – Achievements
- **Experience** – Experience
- **Projects** – Projects
- **Skills** – Skills
- **Testimonials** – Testimonials
- **Contact** – Contact form

## Contact Form

The form is powered by EmailJS and includes:

- Name field
- Email field
- Message field
- Validation
- Clear confirmation messages

## Customization

### Update personal info:

- Open `templates/index.html`
- Edit text and personal details

### Update design:

- Open `static/css/styles.css`
- Adjust colors and layout

### Update JavaScript logic:

- Open `static/js/script.js`
- Modify as needed

## Deployment

### Local:

```bash
python app.py
```

### Online:

- Deploy to any Python-compatible hosting
- Services: Heroku, Vercel, Netlify

## Support

If you encounter issues:

1. Check `SETUP_FINAL.md`
2. Verify EmailJS configuration
3. Check browser console for errors

## License

This project is **not open-source**.  
All rights reserved © [Yousef Mohtady] [2025].  
No part of this project may be copied, modified, distributed, or used without prior written permission from the owner.

---

**Developed by:** Yousef Mohtady  
**Date:** 2025
