"use client";

import { useEffect, useState } from "react";
import { TPost } from "@/entities/post";
import { $api } from "@/shared/api/axiosApi";
import { toast } from "sonner";
import { getLocalKeyPosts } from "@/shared/consts/localStorage";

export const usePostList = () => {
	const [posts, setPosts] = useState<TPost[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getPosts = async () => {
			setIsLoading(true);

			try {
				const { data } = await $api.get<TPost[]>("/posts");

				if (!data || !data.length) {
					throw new Error("Не удалось загрузить данные");
				}

				localStorage.setItem(getLocalKeyPosts, JSON.stringify(data));
				setPosts(data);
				toast("Данные успешно загружены");
			} catch (error) {
				console.error(error);

				const localPosts = localStorage.getItem(getLocalKeyPosts);

				if (!localPosts) {
					return toast("Не удалось загрузить данные", {
						description: "Нет данных для отображения",
					});
				}

				setPosts(JSON.parse(localPosts));

				toast("Не удалось загрузить данные", {
					description: "Данные были загружены из кэша",
				});
			} finally {
				setIsLoading(false);
			}
		};

		getPosts();
	}, []);

	return {
		posts,
		isLoading,
	};
};
