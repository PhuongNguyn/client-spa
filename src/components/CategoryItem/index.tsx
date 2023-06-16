import { ICategory } from "@/interface";
import Link from "next/link";

const CategoryItem = ({ category }: { category: ICategory }) => {
  return (
    <Link href={`/dich-vu/${category.slug}`}>
      <div className="category-item p-2">
        <div className="category-item-image relative">
          <img className="w-full" src={category.thumbnail} alt="delis spa" />
        </div>
        <p className="category-item-title">{category.name}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
