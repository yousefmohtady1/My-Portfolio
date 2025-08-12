# Final Setup Guide – Yousef Mohtady Portfolio

## Quick Setup (5 minutes)

### Step 1: Install dependencies
```bash
pip install -r requirements.txt
```

### Step 2: Configure EmailJS
1. Go to [EmailJS.com](https://www.emailjs.com/) and create an account
2. Create an Email Service (Gmail or Outlook)
3. Create an Email Template
4. Get your Public Key

### Step 3: Update the code
Open `static/js/script.js` and replace:
- `YOUR_PUBLIC_KEY` with your Public Key
- `YOUR_SERVICE_ID` with your Service ID
- `YOUR_TEMPLATE_ID` with your Template ID

### Step 4: Run the app
```bash
python app.py
```

## Detailed EmailJS Setup

### 1. Create Email Service:
- Go to "Email Services" in EmailJS
- Select "Gmail" or "Outlook"
- Link your account
- Copy the Service ID

### 2. Create Email Template:
- Go to "Email Templates"
- Create a new template
- Use this content:

```
Subject: New message from {{from_name}}

Hello {{to_name}},

You have received a new message from:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio website.
```

### 3. Get Public Key:
- Go to "Account" > "API Keys"
- Copy your Public Key

## Example Final Code
```javascript
// in static/js/script.js
emailjs.init("user_abc123def456"); // Public Key

emailjs.send(
  "service_xyz789", // Service ID
  "template_abc123", // Template ID
  templateParams
);
```

## Test the form
1. Run: `python app.py`
2. Visit: `http://localhost:5000`
3. Fill the contact form
4. Click "Send"
5. Check your email inbox

## Troubleshooting

### If messages are not sent:
1. Verify Service ID and Template ID
2. Check that Public Key is correct
3. Inspect browser console for errors
4. Ensure template variables are correct

### Common Errors:
- "Service ID not found" → Check Service ID
- "Template ID not found" → Check Template ID
- "Public Key invalid" → Check Public Key

## Final Project Structure
```
Project_1/
├── app.py
├── requirements.txt
├── static/
│   └── js/
│       └── script.js
├── templates/
│   └── index.html
├── SETUP_FINAL.md
└── README.md
```

## Done!
You now have a fully working portfolio with EmailJS integration.

**Features:**
- Fully functional contact form
- Form validation
- Clear confirmation messages
- Responsive design
- Easy to maintain
