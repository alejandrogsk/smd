import React from "react";

const BlogPostsSection = ({ blog }) => {
    const { before_title, title, posts } = blog;

    return (
        <section className="relative py-24 bg-gradient-to-b from-ui-gray-light to-white">
            <div className="mx-4 sm:mx-8  md:mx-12 mx:mx-20 relative z-10">
                <h6 className="text-lg md:text-xl text-ui-black font-medium	 text-start capitalize	">
                    {before_title}
                </h6>
                <h2 className="text-3xl md:text-5xl	font-semibold	text-ui-black text-start	">
                    {title}
                </h2>

                <div className="blog-section__grid">
                    {posts.map((item, i) => (
                        <div
                            key={i}
                            className="blog-section__grid--item bg-transparent relative my-12"
                        >
                            <img src={item.img_url} />

                            <div className="blog-section__grid--content p-4  bg-white shadow">
                                <h3 className="font-semibold">{item.title}</h3>

                                <span>{item.date}</span>

                                <a className="ml-auto cursor-pointer underline text-right text-ui-orange-main capitalize">
                                    {item.link.name}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <svg
                className="blog-section__blobs-1"
                width="1000"
                height="921"
                viewBox="0 0 1000 921"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M999.641 498.849C991.957 693.494 810.289 810.813 625.397 872.135C435.762 935.029 210.903 958.683 87.9121 801.234C-45.6911 630.199 -18.0069 387.773 110.312 212.739C236.848 40.138 455.211 -43.2235 658.943 22.3199C864.449 88.4343 1008.16 283.138 999.641 498.849Z"
                    fill="#ECECEC"
                />
            </svg>
            <svg
                className="blog-section__blobs-2"
                width="1000"
                height="921"
                viewBox="0 0 1000 921"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M999.641 498.849C991.957 693.494 810.289 810.813 625.397 872.135C435.762 935.029 210.903 958.683 87.9121 801.234C-45.6911 630.199 -18.0069 387.773 110.312 212.739C236.848 40.138 455.211 -43.2235 658.943 22.3199C864.449 88.4343 1008.16 283.138 999.641 498.849Z"
                    fill="#ECECEC"
                    fillOpacity="0.7"
                />
            </svg>
        </section>
    );
};

export default BlogPostsSection;
