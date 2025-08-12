# EmailJS Configuration – Youssef Mehtadi

## Updated EmailJS Credentials

Your EmailJS configuration has been updated:

### Public Key:

```
DuCcvLzFGeYmbowpg
```

### Service ID:

```
service_egjp5dd
```

### Template ID:

```
template_s745bl5
```

## Update Status

- Updated `static/js/script.js` with EmailJS credentials
- Contact form ready to use
- Application is ready to run

## Run the Application

```bash
python app.py
```

Then open: `http://localhost:5000`

## Test the Form

1. Fill the contact form
2. Click "Send"
3. Check your email inbox

## Changing Settings

To change credentials later:

- Open `static/js/script.js`
- Update Public Key, Service ID, Template ID

## Template Variables

The code sends these variables to EmailJS template:

- `name` – sender name
- `email` – sender email
- `message` – message body
- `to_name` – recipient name

Ensure your EmailJS template uses these variable names.

---

**Last Updated:** 2025
**Status:** Ready to use
