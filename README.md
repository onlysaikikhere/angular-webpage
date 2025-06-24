# 🏢 Employee Management System

A modern, responsive web application built with Angular for managing employee data efficiently. This system provides a clean interface for adding, viewing, and managing employee records with local storage capabilities.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## ✨ Features

- 🏠 **Modern Landing Page** - Clean, responsive homepage with gradient design
- 👤 **Add Employee** - Comprehensive form for adding new employee records
- 📋 **View Employees** - Interactive table to browse and manage employee data
- 🔍 **Search Functionality** - Real-time search through employee records
- ✏️ **Edit & Delete** - Modify or remove employee information
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 💾 **Local Storage** - Data persistence using browser local storage
- 🎨 **Bootstrap UI** - Modern, professional styling with Bootstrap 5
- 🧭 **Smart Navigation** - Intuitive header navigation with active route highlighting

## 🛠️ Tech Stack

- **Framework:** Angular 18+
- **Language:** TypeScript
- **Styling:** Bootstrap 5, Custom CSS
- **Storage:** Browser Local Storage
- **Routing:** Angular Router
- **Forms:** Angular Reactive Forms
- **Build Tool:** Angular CLI

## 📋 Prerequisites

Before running this project, make sure you have:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.io/cli) installed globally

```bash
npm install -g @angular/cli
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/employee-management-system.git
   cd employee-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 📁 Project Structure

```
src/
├── app/
│   ├── header/              # Navigation header component
│   ├── footer/              # Footer component
│   ├── landing-page/        # Homepage component
│   ├── home/                # Add employee form component
│   ├── submitted-component/ # View employees component
│   ├── app.component.*      # Root component
│   ├── app.routes.ts        # Application routing
│   └── app.config.ts        # App configuration
├── styles.css               # Global styles
└── index.html              # Main HTML file
```

## 🎯 Usage

### Adding a New Employee
1. Navigate to "Add Employee" from the header or landing page
2. Fill in the comprehensive employee form:
   - Personal Information (Email, DOB, Contact Numbers)
   - Address Details
   - Gender Selection
   - Professional Details (Experience, Salary, Department)
   - Additional Information (Bio, Website, Resume Upload)
3. Click "Submit" to save the employee record

### Viewing Employees
1. Navigate to "View Employees" from the header or landing page
2. Browse the employee table with all details
3. Use the search bar to find specific employees
4. Click on any row to view detailed employee information in a modal
5. Use "Edit" or "Delete" buttons to modify records

### Navigation
- Click the "Employee Management System" logo to return to the homepage
- Use the header navigation links for quick access to different sections
- All navigation is handled with Angular Router for smooth transitions

## 🔧 Available Scripts

```bash
# Start development server
ng serve

# Build for production
ng build

# Run unit tests
ng test

# Run end-to-end tests
ng e2e

# Lint the code
ng lint
```

## 🎨 Customization

### Changing Colors
Update the CSS custom properties in `src/styles.css`:

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6f42c1;
  --success-color: #28a745;
}
```

### Adding New Fields
1. Update the form group in `home/home.ts`
2. Add form controls to `home/home.html`
3. Update the display table in `submitted-component/submitted-component.html`

## 📱 Responsive Design

The application is fully responsive and tested on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1200px+)

## 🔒 Data Storage

- All employee data is stored in **browser local storage**
- Data persists between browser sessions
- No external database required
- Perfect for demo and development purposes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sahishnu**
- GitHub: [@onlysaikikhere](https://github.com/onlysaikikhere)
- Portfolio: [Your Portfolio](https://your-portfolio.com)

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Bootstrap team for the UI components
- Icons provided by Font Awesome
- All contributors and testers

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact me directly.

---

<div align="center">
  <strong>⭐ Star this repository if you found it helpful! ⭐</strong>
</div>
