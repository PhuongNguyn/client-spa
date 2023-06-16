import { IPost } from "@/interface"
import Link from "next/link"


const PostItem = ({ post }: { post: IPost }) => {
    return (
        <Link href={`/${post.slug}`}>
            <div className="post-item">

                <div className="post-item-image">
                    <img src={`${post.thumbnail}`} alt="delisspa" />
                </div>
                <p className="post-item-title mt-4">{post.title}</p>
            </div>
        </Link>

    )
}

export default PostItem