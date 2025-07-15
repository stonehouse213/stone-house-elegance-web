# Stone House Admin Panel

## Overview
Your Stone House website now includes a password-protected admin panel that allows you to manage your stone inventory.

## Accessing the Admin Panel

### Method 1: Direct URL
Navigate to: `http://localhost:8080/admin-login`

### Method 2: Footer Link
Scroll to the bottom of any page and click the "Admin" link in the footer.

## Login Credentials
- **Password**: `Stonehouse.rh`

## Admin Panel Features

### 1. Add New Stones
- Click the "Add New Stone" button
- Fill in all required fields:
  - Name
  - Category (Granite, Marble, Quartzite, Exotic Stones)
  - Origin
  - Price Level (Premium, Luxury, Ultra-Luxury)
  - Image URL
  - Description
  - Features (comma-separated)
  - Finish
  - Thickness

### 2. Edit Existing Stones
- Click the "Edit" button on any stone card
- Modify any field as needed
- Click "Update Stone" to save changes

### 3. Delete Stones
- Click the "Delete" button on any stone card
- Confirm the deletion in the popup dialog

### 4. View All Inventory
- All stones are displayed in a clean card layout
- See key information at a glance
- Filter and search functionality available on the main collection page

## Security Features
- Password-protected access
- Session-based authentication
- Automatic logout when browser is closed
- Redirect to login if not authenticated

## Navigation
- Use the "Back to Home" link to return to the main site
- Use the "Logout" button to end your admin session
- The admin session persists until you logout or close the browser

## Data Management
- All changes are stored in memory (will reset when you refresh the page)
- For permanent storage, you would need to integrate with a backend database
- The inventory is shared between the admin panel and the public collection page

## Tips
- Use high-quality image URLs for the best visual presentation
- Keep descriptions concise but informative
- Use consistent formatting for features (comma-separated)
- Test your changes by viewing the collection page after making updates

## Troubleshooting
- If you can't access the admin panel, make sure you're using the correct password
- If images don't load, check that the image URLs are valid and accessible
- If the page doesn't update, try refreshing the browser 