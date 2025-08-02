# LinkedIn Clone - Developer Edition

A modern LinkedIn clone built with React, Redux, Firebase, and Tailwind CSS. This project is optimized for development and learning.

## 🚀 Features

- **Modern Tech Stack**: React 19, Redux Toolkit, Firebase
- **Responsive Design**: Tailwind CSS with custom LinkedIn theme
- **Real-time Posts**: Firebase Firestore integration
- **Authentication**: Firebase Auth with email/password
- **Smooth Animations**: Framer Motion for enhanced UX
- **Developer Friendly**: ESLint, Prettier, and development tools

## 🛠️ Tech Stack

- **Frontend**: React 19, Redux Toolkit
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Firestore, Auth)
- **Animations**: Framer Motion
- **UI Components**: Material-UI Icons
- **Development**: ESLint, Prettier

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd linkedin-clone-yt--template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project
   - Enable Authentication and Firestore
   - Add your Firebase config to `src/firebase.js`

4. **Start development server**
   ```bash
   npm run dev
   # or
   npm start
   ```

## 🎯 Available Scripts

### Development

- `npm run dev` - Start development server
- `npm start` - Start development server (alias)
- `npm test` - Run tests

### Code Quality

- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Fix linting errors automatically
- `npm run format` - Format code with Prettier

### Maintenance

- `npm run clean` - Clean and reinstall dependencies
- `npm run eject` - Eject from Create React App (irreversible)

## 🎨 Customization

### Tailwind CSS Theme

The project uses custom LinkedIn colors defined in `tailwind.config.js`:

```javascript
colors: {
  'linkedin-blue': '#0074b1',
  'linkedin-lightBlue': '#0073b1',
  'linkedin-darkBlue': '#006097',
  'linkedin-gray': '#f3f2ef',
  'linkedin-lightGray': '#eef3f8',
  'linkedin-darkGray': '#666666',
}
```

### Responsive Breakpoints

- `xs`: 360px (extra small)
- `sm`: 480px (small mobile)
- `md`: 640px (medium)
- `lg`: 768px (large mobile)
- `xl`: 1024px (tablet)
- `2xl`: 1200px (desktop)

## 📱 Responsive Design

The application is fully responsive with:

- **Desktop**: Three-column layout (Sidebar | Feed | Widgets)
- **Tablet**: Adjusted spacing and layout
- **Mobile**: Single-column layout with optimized touch targets
- **Small Mobile**: Compact layout for small screens

## 🔧 Development Workflow

1. **Start Development**

   ```bash
   npm run dev
   ```

2. **Code Quality Checks**

   ```bash
   npm run lint
   npm run format
   ```

3. **Testing**
   ```bash
   npm test
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── App.js          # Main application component
│   ├── Header.js       # Navigation header
│   ├── Sidebar.js      # User profile sidebar
│   ├── Feed.js         # Post feed
│   ├── Post.js         # Individual post component
│   ├── Widgets.js      # News widget
│   ├── Login.js        # Authentication
│   ├── HeaderOption.js # Header navigation items
│   └── InputOptions.js # Input option buttons
├── features/
│   └── userSlice.js    # Redux user state
├── firebase.js         # Firebase configuration
└── index.css           # Tailwind CSS imports
```

## 🎯 Key Features

### Authentication

- Email/password registration and login
- User profile management
- Firebase Auth integration

### Posts

- Create and view posts
- Real-time updates with Firestore
- Smooth animations with Framer Motion

### Responsive Design

- Mobile-first approach
- Touch-friendly interface
- Optimized for all screen sizes

## 🚀 Getting Started

1. **Firebase Setup**

   ```javascript
   // src/firebase.js
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-domain.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-bucket.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id",
   };
   ```

2. **Environment Variables** (optional)
   ```bash
   # .env.local
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-domain.firebaseapp.com
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and formatting
5. Submit a pull request

## 📝 License

This project is for educational purposes. Feel free to use and modify as needed.

## 🆘 Support

For development questions or issues:

- Check the Firebase documentation
- Review React and Redux documentation
- Check Tailwind CSS documentation

---

**Happy Coding! 🎉**
