import { cn } from "@/shared/lib/utils";

interface PostProps {
	index: number;
	title: string;
	body: string;
	className?: string;
}

export const Post = ({ index, title, body, className }: PostProps) => {
	return (
		<div className={cn("flex items-center gap-4 p-2", className)}>
			<span>{index}.</span>
			<div className="flex flex-col">
				<p className="text-lg font-medium">{title}</p>
				<span>{body}</span>
			</div>
		</div>
	);
};
