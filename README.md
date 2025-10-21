# 🐅 Clemson Grade Lookup

A Clemson-themed web application for students to search and view course grade distributions by semester, professor, and course title.

## Features

- 🔍 **Autocomplete Search** - Quick search by course number or title
- 🎯 **Advanced Filters** - Filter by term, instructor, and sort options
- 📊 **Grade Visualizations** - Interactive bar charts showing grade distributions
- 📱 **Responsive Design** - Works seamlessly on mobile and desktop
- 🎨 **Clemson Branding** - Official Clemson orange and purple color scheme

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Recharts** - Grade distribution charts
- **GitHub Pages** - Deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/groovymango3429/CuGradeHistory.git
cd CuGradeHistory
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

Or push to the `main` branch - GitHub Actions will automatically build and deploy.

## Project Structure

```
CuGradeHistory/
├── public/
│   └── course_grades_combined.json
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── FilterSection.jsx
│   │   ├── CourseCard.jsx
│   │   ├── GradeChart.jsx
│   │   └── Stats.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Data Format

The application uses `course_grades_combined.json` with the following structure:

```json
{
  "term": "Fall 2024",
  "course_number": "ACCT 2010",
  "section": "001",
  "course_title": "Financial Accounting Concepts",
  "grades": {"A": 18, "B": 28, "C": 45, "D": 0, "F": 10, "P": 0, "FP": 0, "W": 0},
  "instructor": "Doe, John",
  "honor": 0
}
```

## License

This project is for educational purposes only.

## Go Tigers! 🐅