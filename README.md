# 🐅 Clemson Grade Lookup

A modern, interactive web application designed for Clemson University students to explore historical grade distributions across courses, professors, and semesters.

[![Deploy to GitHub Pages](https://github.com/groovymango3429/CuGradeHistory/actions/workflows/deploy.yml/badge.svg)](https://github.com/groovymango3429/CuGradeHistory/actions/workflows/deploy.yml)

**Live Demo:** [https://groovymango3429.github.io/CuGradeHistory/](https://groovymango3429.github.io/CuGradeHistory/)

---

## ✨ Features

### 🔍 **Smart Search**
- Autocomplete search functionality for quick course discovery
- Search by course number (e.g., "ACCT 2010") or course title (e.g., "Financial Accounting")
- Real-time suggestions as you type

### 🎯 **Advanced Filtering**
- **Filter by Semester** - View grades from specific terms (Fall, Spring, Summer)
- **Filter by Professor** - Compare different instructors for the same course
- **Sort Options** - Sort by course number, A% (high to low), or instructor name

### 📊 **Visual Grade Distributions**
- Interactive bar charts powered by Recharts
- Color-coded grades (A through F)
- Detailed breakdown showing total students and withdrawal counts
- A-percentage badges for quick comparison

### ⚡ **Performance Optimized**
- Pagination system handling thousands of course records
- Adjustable results per page (15, 30, 50, or 100)
- Smooth navigation and fast filtering

### 📱 **Responsive Design**
- Fully mobile-responsive layout
- Clean card-based interface
- Clemson-branded color scheme (Orange #F56600 & Purple #522D80)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework for building interactive components |
| **Vite** | Lightning-fast build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **Recharts** | Composable charting library for grade visualizations |
| **GitHub Pages** | Free hosting with automated CI/CD deployment |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed
- Git installed

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/groovymango3429/CuGradeHistory.git
   cd CuGradeHistory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173/CuGradeHistory/`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
CuGradeHistory/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── course_grades_combined.json  # Course grade data
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header with Clemson branding
│   │   ├── SearchBar.jsx       # Autocomplete search component
│   │   ├── FilterSection.jsx  # Filter and sort controls
│   │   ├── Stats.jsx           # Statistics and results display
│   │   ├── CourseCard.jsx      # Individual course card
│   │   ├── GradeChart.jsx      # Grade distribution chart
│   │   └── Pagination.jsx      # Pagination controls
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles with Tailwind
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies and scripts
```

---

## 📊 Data Format

The application uses `course_grades_combined.json` with the following structure:

```json
{
  "term": "Fall 2024",
  "course_number": "ACCT 2010",
  "section": "001",
  "course_title": "Financial Accounting Concepts",
  "grades": {
    "A": 47,
    "B": 39,
    "C": 13,
    "D": 0,
    "F": 0,
    "P": 0,
    "FP": 0,
    "W": 0
  },
  "instructor": "Doe, John",
  "honor": 0
}
```

---

## 🎨 Design Philosophy

### Clemson Brand Colors
- **Primary:** Clemson Orange `#F56600`
- **Secondary:** Regalia Purple `#522D80`
- **Accent:** White `#FFFFFF` & Gray `#F2F2F2`

### Typography
- **Headers:** Montserrat (bold, modern)
- **Body:** Open Sans (clean, readable)

### User Experience
- Intuitive search and filter system
- Visual feedback with loading states
- Smooth animations and transitions
- Accessibility-focused design

---

## 🚢 Deployment

This project uses **GitHub Actions** for automated deployment to GitHub Pages.

### Automatic Deployment
Every push to the `main` branch automatically:
1. Installs dependencies
2. Builds the production bundle
3. Deploys to GitHub Pages

### Manual Deployment
```bash
npm run build
# Then manually upload the 'dist' folder to your hosting provider
```

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📈 Future Enhancements

- [ ] Add GPA calculator feature
- [ ] Export grade data to CSV/PDF
- [ ] Compare multiple courses side-by-side
- [ ] Historical trend analysis with line charts
- [ ] Professor rating integration
- [ ] Dark mode toggle
- [ ] Advanced statistics (median, average, distribution curves)
- [ ] Course prerequisite visualization

---

## 📄 License

This project is for educational purposes only. Grade data is provided as-is for informational use by Clemson University students.

---

## 🙏 Acknowledgments

- Clemson University for educational inspiration
- The React and Vite communities for excellent documentation
- All contributors who help improve this tool

---

## 📧 Contact

**Project Maintainer:** [@groovymango3429](https://github.com/groovymango3429)

**Issues & Bug Reports:** [GitHub Issues](https://github.com/groovymango3429/CuGradeHistory/issues)

---

<div align="center">

### Go Tigers! 🐅🧡💜

*Made with ❤️ for Clemson Students*

</div>
