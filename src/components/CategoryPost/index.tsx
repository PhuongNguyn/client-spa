import { IPost } from "@/interface"
import PostItem from "../PostItem"


const CategoryPost = ({ posts }: { posts: IPost[] }) => {
    return (
        <div className="flex category-post flex-wrap px-4">
            {
                posts?.map(item => <div key={item._id} className="category-post-item">
                    <PostItem post={item} />
                </div>)
            }

        </div>
    )
}

export default CategoryPost