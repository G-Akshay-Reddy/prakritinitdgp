export interface ShrishtiIssue {
  slug: string;
  issue: number;
  title: string;
  category: "Recent Issues" | "Archive";
  coverImage: string;
  pdfUrl: string;
}

export const shrishti = {
  title: "SHRISHTI",
  subtitle: "The official environmental journal of PRAKRITI",
  launch: "Launched in October 2020",
  description:
    "SHRISHTI is PRAKRITI's environmental journal, built here as a scalable digital magazine archive for covers, issue search, future articles, and PDF reading.",
  issues: [
    { slug: "issue-16", issue: 16, title: "SHRISHTI Issue 16", category: "Recent Issues", coverImage: "/media/Shrishti/16.jpg", pdfUrl: "" },
    { slug: "issue-15", issue: 15, title: "SHRISHTI Issue 15", category: "Recent Issues", coverImage: "/media/Shrishti/15.jpg", pdfUrl: "" },
    { slug: "issue-14", issue: 14, title: "SHRISHTI Issue 14", category: "Recent Issues", coverImage: "/media/Shrishti/14.jpg", pdfUrl: "" },
    { slug: "issue-13", issue: 13, title: "SHRISHTI Issue 13", category: "Recent Issues", coverImage: "/media/Shrishti/13.jpg", pdfUrl: "" },
    { slug: "issue-12", issue: 12, title: "SHRISHTI Issue 12", category: "Archive", coverImage: "/media/Shrishti/12.jpg", pdfUrl: "" },
    { slug: "issue-11", issue: 11, title: "SHRISHTI Issue 11", category: "Archive", coverImage: "/media/Shrishti/11.jpg", pdfUrl: "" },
    { slug: "issue-10", issue: 10, title: "SHRISHTI Issue 10", category: "Archive", coverImage: "/media/Shrishti/10.jpg", pdfUrl: "" },
    { slug: "issue-9", issue: 9, title: "SHRISHTI Issue 9", category: "Archive", coverImage: "/media/Shrishti/9.jpg", pdfUrl: "" },
    { slug: "issue-8", issue: 8, title: "SHRISHTI Issue 8", category: "Archive", coverImage: "/media/Shrishti/8.jpg", pdfUrl: "" },
    { slug: "issue-7", issue: 7, title: "SHRISHTI Issue 7", category: "Archive", coverImage: "/media/Shrishti/7.jpg", pdfUrl: "" },
    { slug: "issue-6", issue: 6, title: "SHRISHTI Issue 6", category: "Archive", coverImage: "/media/Shrishti/6.jpg", pdfUrl: "" },
    { slug: "issue-5", issue: 5, title: "SHRISHTI Issue 5", category: "Archive", coverImage: "/media/Shrishti/5.jpg", pdfUrl: "" },
    { slug: "issue-4", issue: 4, title: "SHRISHTI Issue 4", category: "Archive", coverImage: "/media/Shrishti/4.jpg", pdfUrl: "" },
    { slug: "issue-3", issue: 3, title: "SHRISHTI Issue 3", category: "Archive", coverImage: "/media/Shrishti/3.jpg", pdfUrl: "" },
    { slug: "issue-2", issue: 2, title: "SHRISHTI Issue 2", category: "Archive", coverImage: "/media/Shrishti/2.jpg", pdfUrl: "" },
    { slug: "issue-1", issue: 1, title: "SHRISHTI Issue 1", category: "Archive", coverImage: "/media/Shrishti/1.jpg", pdfUrl: "" }
  ] satisfies readonly ShrishtiIssue[]
};
