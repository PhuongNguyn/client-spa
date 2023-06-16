import { ICategory, IPost } from "@/interface"
import Link from "next/link"


const Breadcrump = ({category, post}: {category: ICategory, post: IPost}) => {
    return (
        <div className="bread-crump">
            <p className="bread-crump-title text-center"><Link href={'/'}>Home</Link> » <Link href={`/${category.slug}`}>{category.name}</Link> » {post.title}</p>
        </div>
    )
}

export default Breadcrump