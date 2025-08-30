// types/youtube.ts
export interface YouTubeThumbnail {
    url: string;
    width: number;
    height: number;
}

export interface YouTubeVideo {
    type: string;
    videoId: string;
    title: string;
    description: string;
    viewCountText: string;
    viewCount: string;
    publishedTimeText: string;
    publishDate: string;
    publishedAt: string;
    lengthText: string;
    thumbnail: YouTubeThumbnail[];
    richThumbnail: YouTubeThumbnail[] | null;
}

export interface YouTubeApiResponse {
    data: YouTubeVideo[];
    continuation: string | null;
}