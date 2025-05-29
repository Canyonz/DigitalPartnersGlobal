import { PostList } from "@/widgets/postList";

export default function Home() {
	return (
		<div className="container mx-auto py-10">
			<h1 className="text-2xl font-semibold">Список постов:</h1>
			<PostList className="mt-10" />
		</div>
	);
}
