# 🏡 Homy — Trusted Home Care Services

> **ดูแลบ้านให้คุณ อย่างใส่ใจ เหมือนคนในครอบครัว**
> *Taking care of your home with heart — like family.*

![Homy Homepage](./public/screenshot.png)

---

## ✨ About

**Homy** is a web application for booking professional home-care services in Thailand. Whether you're traveling or simply busy, Homy connects you with trusted professionals who take care of your home, pets, and plants while you're away.

---

## 🛠 Services

| Service | Description |
|---|---|
| 🧹 **House Cleaning** | Deep cleaning every corner of your home |
| 🐶 **Pet Sitting** | Feeding and caring for your furry friends |
| 🌿 **Plant Watering** | Keeping your garden green and healthy |

---

## 🚀 Features

- **User Authentication** — Secure login & registration via Supabase
- **Service Booking** — Easy online booking with date & service selection
- **Dashboard** — Track all your bookings in one place
- **Responsive Design** — Works beautifully on mobile and desktop
- **Thai Language** — Fully localized for Thai users

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework (App Router) |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Accessible UI components |
| [Supabase](https://supabase.com/) | Auth & database backend |
| [Lucide React](https://lucide.dev/) | Icons |

---

## 📦 Getting Started

### Prerequisites

- **Node.js** 18+ installed
- A **Supabase** project with Auth enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/homy.git
cd homy

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials:
#   NEXT_PUBLIC_SUPABASE_URL=your-url
#   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key

# Start the development server
npm run dev
```

Open [https://homy-by-thana.vercel.app/](https://homy-by-thana.vercel.app/) to view the app.

---

## 📁 Project Structure

```
homy/
├── app/
│   ├── page.tsx          # Home page (hero + services)
│   ├── booking/          # Service booking page
│   ├── dashboard/        # User booking dashboard
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   ├── services/         # Services listing page
│   ├── about/            # About page
│   └── layout.tsx        # Root layout with Navbar
├── components/
│   ├── navbar.tsx         # Navigation bar
│   └── ui/               # shadcn/ui components
├── lib/
│   └── supabase.ts       # Supabase client
└── public/               # Static assets
```

---

## 📄 License

This project is for educational purposes.

---

<p align="center">
  Made with ❤️ by the Homy Team
</p>
