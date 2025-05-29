"use client";

import { cn } from "@/shared/lib/utils";
import { usePostList } from "../hooks/usePostList";
import { Skeleton } from "@/shared/ui/skeleton";
import { Separator } from "@/shared/ui/separator";
import { Post } from "@/entities/post";

interface PostListProps {
	className?: string;
}

export const PostList = ({ className }: PostListProps) => {
	const { posts, isLoading } = usePostList();

	if (isLoading) {
		return (
			<ul className={cn("space-y-4", className)}>
				{Array(9)
					.fill("")
					.map((_, index) => (
						<li key={index}>
							<Skeleton className="h-16 w-full" />
						</li>
					))}
			</ul>
		);
	}

	return (
		<ul className={cn(className)}>
			{posts.map((post, index) => (
				<li key={post.id}>
					<Post index={index + 1} title={post.title} body={post.body} />
					<Separator />
				</li>
			))}
		</ul>
	);
};
