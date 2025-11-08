# Data Structure Documentation

This directory contains all modular data files for the AgroInternational website. All content can be easily updated by editing these JSON files.

## Files Overview

### products.json
Contains all product information with the following structure:
```json
{
  "products": [
    {
      "id": "unique-product-id",
      "name": "Product Name",
      "category": "category-id",
      "shortDescription": "Brief description for cards",
      "fullDescription": "Detailed description for product pages",
      "origin": "Product origin",
      "packaging": "Packaging information",
      "certifications": ["Organic", "Fair Trade"]
    }
  ]
}
```

**To add a new product:**
1. Copy an existing product object
2. Update all fields with new information
3. Use an existing category ID or create a new one in categories.json

### categories.json
Contains product category information:
```json
{
  "categories": [
    {
      "id": "category-id",
      "name": "Category Name",
      "description": "Category description",
      "icon": "LucideIconName"
    }
  ]
}
```

**Available icons:** Coffee, Wheat, Flame (from lucide-react)

### company.json
Contains all company information:
- Basic details (name, ABN, CEO)
- Address information
- Contact details
- Mission, vision, and values
- Company history

**To update company info:** Simply edit the relevant fields in this file.

### certifications.json
Contains certification and quality process information:
```json
{
  "certifications": [
    {
      "id": "cert-id",
      "name": "Certification Name",
      "description": "Description",
      "icon": "LucideIconName"
    }
  ],
  "qualityProcess": [
    {
      "step": "1",
      "title": "Process Title",
      "description": "Process description"
    }
  ]
}
```

## Adding New Data

### Adding a Product
1. Open `products.json`
2. Add a new object to the `products` array
3. Ensure the category ID matches an existing category
4. Product will automatically appear on the Products page

### Adding a Category
1. Open `categories.json`
2. Add a new category object
3. Choose an appropriate icon from lucide-react
4. Update products to use the new category ID

### Updating Company Information
1. Open `company.json`
2. Edit the relevant fields
3. Changes will reflect across all pages (Footer, About, Contact)

### Adding Certifications
1. Open `certifications.json`
2. Add to the `certifications` array
3. Choose an appropriate icon (Leaf, Handshake, Award, Globe)

## SEO Considerations

When adding or updating content:
- Keep descriptions clear and keyword-rich
- Include relevant product origins and certifications
- Update meta descriptions if adding major new categories
- Ensure all text is professional and error-free

## Notes

- All data is imported dynamically by React components
- Changes to these files require no code modifications
- Keep JSON format valid (check for trailing commas, quotes)
- Backup files before making major changes
