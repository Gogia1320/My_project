## Approach in building the project

## 1. Layout Design
- Sidebar: Create a fixed sidebar for navigation with items like Dashboard, My Cases, Activities, etc.
 - Main Content Area: Design a clean layout for the multi-step form with sections for Claim Value, Place, Language, and file uploads.

## 2. Multi-Step Form
 - Add a step indicator at the top (e.g., Preliminary, Your Details, etc.).
 - Highlight the current step for better user guidance.
 - Use clear labels and placeholders for form fields like Contract Value and Claim Value.

## 3. File Upload
  - Design a *drag-and-drop file upload component* for documents:
  - Use icons and labels (e.g., "Upload the Contract").
  - Add a "+" button for uploading additional documents.
  - Display file format restrictions (e.g., Max 2MB, PDF).

## 4. Responsive Design
  - Ensure the sidebar and form adapt to different screen sizes:
  - Sidebar collapses into a hamburger menu on smaller screens.
  - Form fields stack vertically for better mobile usability.
    
## 5. Styling
- Use a blue and white color scheme for a professional look.
- Add rounded corners and hover effects to buttons and form inputs.
- Include subtle animations*for step transitions.

## 6. Illustrations and Icons
- Add engaging illustrations (e.g., the judge with the scale on the left).
- Use meaningful icons for navigation items and file upload sections.

## 7. Estimated Time Display
- Include a time estimate for each step (e.g., "Approx 5 minutes") to keep users informed.

## 8. Validation and Feedback
- Use inline validation for form fields (e.g., required fields, incorrect formats).
- Show success/error messages for file uploads.

## 9. Consistent UI/UX
- Maintain consistent spacing, typography, and alignment throughout.
- Use a modern, minimalist design to ensure clarity and usability.

## Challenges faced and how i resolve them 

The main challenge I faced while creating the responsive web design was ensuring the header displayed correctly on mobile and tablet views. Despite my efforts, I couldn't fully resolve the issue, as the header alignment and spacing did not behave as expected across these devices. Although I made several adjustments, the issue persists and requires further work to achieve the desired responsiveness.

## Assumptions 

## 1. Purpose of the Application:
   - The application is designed for filing legal claims and managing disputes.
   - It likely aims to simplify and digitize legal proceedings for users.

## 2. Target Audience:
   - Businesses or individuals involved in contractual disputes.
   - Legal professionals and arbitrators who handle such cases.

## 3. Key Features:
   - Dashboard: Centralized access to all user activities, cases, and files.
   - Step-by-Step Process: The claim filing process is broken into multiple stages for simplicity (e.g., Preliminary, Details, KYC, etc.).
   - Upload Documents: Users can upload contracts, arbitration agreements, and additional documents in supported formats like PDF.

 ## 4. Assumptions for Automation:
   - Automated calculations for claim values (e.g., 150% of contract value).
   - Potential automation in verifying agreement compliance (e.g., place and language matching).

