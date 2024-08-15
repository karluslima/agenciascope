import menu from '@/app/lib/mainmenu.json'
import Link from 'next/link'

type menu = {
  label: string;
  id: number;
  url: string;
}

export default function MainMenu() {
  return (
    <div className="main-menu relative w-full md:w-1/4">
      <nav className="w-full py-2">
        <ul className="categories flex justify-between">
          {menu.map((menu) => {
            return (
              <li key={menu.id} className="category relative">
                <Link href={menu.url} className="category-link">
                  {menu.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}