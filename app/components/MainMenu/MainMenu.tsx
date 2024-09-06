import menuData from '@/app/lib/mainmenu.json';
import Link from 'next/link';

type MenuItem = {
  label: string;
  id: number;
  url: string;
};

export default function MainMenu() {
  return (
    <div className="main-menu relative w-full md:w-1/2">
      <nav className="w-full py-2">
        <ul className="categories flex justify-between">
          {menuData.map((item: MenuItem) => (
            <li key={item.id} className="category relative">
              <Link href={item.url} className="category-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
