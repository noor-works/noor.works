const title = 'Noor'

const description = "Hi, my name is Noor and I'm still figuring things out.";

const SEO = {
  title,
  description,
  canonical: "https://noor.works",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://noor.works",
    title,
    description,
    images: [
      {
        url: "https://noor.works/media/banner.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@noor.works",
    site: "@noor.works",
    cardType: "summary_large_image",
  },
};

export default SEO;