# ML@PSU Websitee

This is the official website for the Machine Learning Club at Penn State University. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd [repo-name]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # App Router directory
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── resources/         # Resources and articles
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
└── styles/               # Additional styles

public/                   # Static assets
```

## 📝 Adding Content

### Blog Posts
1. Create a new MDX file in `src/app/resources/[article-name]/page.mdx`
2. Add frontmatter with title, date, and description
3. Write your content in MDX format

### Updating Team Members
Edit the `staff` array in `src/app/page.tsx` to update team member information.

### Adding Resources
Edit the `resources` array in `src/app/resources/page.tsx` to add new resources.

## 🎨 Styling

The site uses:
- Tailwind CSS for styling
- Framer Motion for animations
- Custom retro pixelated font
- Dark theme with salmon pink accents

## 🛠️ Development

### Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Create the component following the existing pattern
4. Update navigation if needed

## 📄 License

MIT License - feel free to use this code for your own projects!

## 👥 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📧 Contact

Email: machinelearningpennstate@gmail.com
