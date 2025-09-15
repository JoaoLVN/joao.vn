# João VN — Personal Website & CV

A minimal and clean personal website with my bio and resume. This project serves as a digital business card, providing a quick overview of my professional background and ways to get in touch.

You can visit the live site at: [joao.vn](https://joao.vn)

## Features

- **Responsive Design**: Looks great on both desktop and mobile devices.
- **Dynamic PDF Generation**: The CV is available for download as a PDF, generated on the fly using `@react-pdf/renderer`.
- **Interactive Resume**: A web-based version of my resume for easy viewing in the browser.
- **Social Links**: Quick links to my LinkedIn, GitHub, and email.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **PDF Generation**: [@react-pdf/renderer](https://react-pdf.org/)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## Project Structure

```
/
├── public/         # Static assets
├── src/
│   ├── assets/     # Images and other assets
│   ├── components/ # React components
│   ├── data/       # JSON file with CV data
│   ├── App.tsx     # Main application component
│   └── main.tsx    # Entry point
├── cdk.ts          # AWS CDK for infrastructure as code
└── vite.config.ts  # Vite configuration
```

## Local Development

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```
    The site will be available at `http://localhost:5173`.

### Other available scripts

- **Linting**:
  ```bash
  pnpm lint
  ```
- **Build for production**:
  ```bash
  pnpm build
  ```
- **Preview the production build**:
  ```bash
  pnpm preview
  ```
