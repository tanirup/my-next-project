import { getNewsList } from "../_libs/microcms";
import NewsLayout from "@/app/_components/NewsList";

export default async function Page() {
    const { contents: news } = await getNewsList();

    return <NewsLayout news={news} />;
    
}