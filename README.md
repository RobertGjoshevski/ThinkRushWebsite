# ThinkRush Privacy Policy Website

This folder contains the privacy policy website for ThinkRush that can be deployed to GitHub Pages.

## Files

- `index.html` - Homepage with app features and legal links
- `privacy.html` - Privacy policy page with comprehensive content
- `terms.html` - Terms of service page
- `contact.html` - Contact page with form and FAQ
- `styles.css` - Modern, responsive CSS styling
- `README.md` - This file with deployment instructions

## Features

- ✅ Modern, responsive design
- ✅ Multi-page website with proper navigation
- ✅ Homepage with app features and legal links
- ✅ Dedicated privacy policy page
- ✅ Terms of service page
- ✅ Contact page with form and FAQ
- ✅ Mobile-first approach
- ✅ Beautiful animations and transitions
- ✅ Professional typography with Inter font
- ✅ Smooth scrolling navigation
- ✅ Print-friendly styles
- ✅ SEO optimized
- ✅ Accessible design
- ✅ App logo integration

## Deployment to GitHub Pages

### Option 1: Deploy from this repository

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/website" folder
   - Click "Save"

2. **Your site will be available at:**
   ```
   https://yourusername.github.io/thinkrush/
   ```

### Option 2: Create a separate repository

1. **Create a new repository:**
   - Create a new repository called `ThinkRushWebsite`
   - Copy the contents of this `website` folder to the new repository
   - Create an `assets` folder and add your `AppIcon.png` file

2. **Enable GitHub Pages:**
   - Go to the new repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be available at:**
   ```
   https://yourusername.github.io/ThinkRushWebsite/
   ```

## Customization

### Update Contact Information

Edit the contact information in `index.html`:

```html
<div class="contact-item">
    <strong>Email:</strong>
    <a href="mailto:privacy@thinkrush.app">privacy@thinkrush.app</a>
</div>
<div class="contact-item">
    <strong>Support:</strong>
    <a href="mailto:support@thinkrush.app">support@thinkrush.app</a>
</div>
```

### Update GitHub Links

The GitHub link is already updated to point to your ThinkRushWebsite repository:

```html
<a href="https://github.com/RobertGjoshevski/ThinkRushWebsite" target="_blank">GitHub</a>
```

### Update App Icon

The app icon is already configured to use the local assets folder:

```html
<link rel="icon" type="image/x-icon" href="assets/AppIcon.png">
```

Make sure to:
1. Create an `assets` folder in your repository
2. Add your `AppIcon.png` file to the assets folder

### Customize Colors

Edit the CSS variables in `styles.css` to match your brand colors:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... other colors */
}
```

## Content Updates

The privacy policy content is comprehensive and covers:

- Information collection and usage
- Data security measures
- User rights and choices
- Children's privacy
- International data transfers
- Contact information

You may want to customize the content based on your specific:
- Data collection practices
- Third-party services used
- Legal jurisdiction requirements
- Contact information

## Browser Support

The website is designed to work on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance

The website is optimized for:
- Fast loading times
- Minimal file sizes
- Efficient CSS
- Responsive images
- Smooth animations

## License

This website template is created for ThinkRush. Feel free to modify and use it for your own projects. 