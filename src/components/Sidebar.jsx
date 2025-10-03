import { IoIosArrowForward } from "react-icons/io";
import Sheet from "./comment/Sheet";
import Menu from "./comment/Menu";

export default function Sidebar({ isOpen, onClose }) {
  const categories = [
    {
      name: "Women's Fashion",
      children: [{ label: "item 1" }, { label: "item 2" }],
    },
    {
      name: "Men's Fashion",
      children: [{ label: "item 1" }, { label: "item 2" }],
    },
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];
  return (
    <>
      <Sheet isOpen={isOpen} onClose={onClose} side="left">
        <aside className=" toptablet:border-r w-full flex justify-center items-center  border-gray-300  toptablet:pt-6 pt-[20%] ">
          <ul className="flex flex-col h-full gap-2 toptablet:w-full w-[90%] sm:text-base text-sm  text-black/80">
            {categories.map((cat, i) => {
              if (cat.name == undefined)
                return (
                  <li key={i} className=" font-medium cursor-pointer ">
                    {cat}
                  </li>
                );
              else {
                return (
                  <Menu
                    label={cat.name}
                    iconPosition="right"
                    key={i}
                    icon={IoIosArrowForward}
                    items={cat.children}
                  />
                );
              }
            })}
          </ul>
        </aside>
      </Sheet>
    </>
  );
}
