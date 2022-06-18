export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62ad9842e6a18058b3daafd1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4vt4bvwr",
                  apiId: "9010e20e-61e8-4978-b573-38d233c76635",
                },
                {
                  buildHookId: "62ad984277999b575406fbea",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-6mwuy9hh",
                  apiId: "097bf297-ef80-4076-8772-cd4559255ebb",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kaleabd/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-6mwuy9hh.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
