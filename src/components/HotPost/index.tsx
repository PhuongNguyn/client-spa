import { IPost } from "@/interface";
import Link from "next/link";

const HotPost = ({ post }: { post: IPost }) => {
  return (
    <Link href={`/${post.slug}`}>
      <div className="hot-post p-4">
        <div className="hot-post-image relative">
          <img src={`${post.thumbnail}`} className="w-full" />
        </div>
        <p className="hot-post-title">{post.title}</p>
      </div>
    </Link>
  );
};

export default HotPost;
