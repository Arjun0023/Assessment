export const API = "https://videodubber.ai/testinput";

export const LANDING_BG1 =
  "https://www.happyscribe.com/assets/landing/illustrations/banner-left-e2d503ffa2704d79ba092bf4d386c66cc2e4bfa8264b4b0b95d442f5cd39481e.jpg";
export const LANDING_BG2 =
  "https://www.happyscribe.com/assets/landing/illustrations/banner-right-b129c8f71a26d1e7652f54dba0a1390c72e8a44b43629eab5275a485e0a7e9cc.jpg";

export const FEATURE_LIMIT =
  "https://www.happyscribe.com/assets/landing/illustrations/limit-4633da879e60923dde8b2e63ef246a99d1a67dcf2c78d63750a34cbcf5c08f20.jpg";

export const IMG_TROPHY1 =
  "https://www.happyscribe.com/assets/landing/g2-leader-award-a392a31dcceba7fa195d3c4919e3fe1ce2c9ec91ee08ccd4b0a6c553a4f6f0b8.svg";
export const IMG_TROPHY2 =
  "https://www.happyscribe.com/assets/landing/g2-momentum-leader-award-5e76b21f9f89b72e7c4f247221e7515bc47f71029cb06ddc2c3a01a602c5153f.svg";

export const IMG_CMP = [
  "https://www.happyscribe.com/assets/landing/old-land-bbc-6ce540d3e8e5db34bce6f26eb89fab653d548d0b86b67c25766eb58ee48d92d7.jpg",
  "https://www.happyscribe.com/assets/landing/old-land-forbes-1a1c3abb5b615571ec152f6c02e06c1ffb9fc32acd1d7b0fa96d7b60a4a694d6.jpg",
  "https://www.happyscribe.com/assets/landing/old-land-rte-06cb3d1983462472368f54fd86d3b5c6bab71a406492a04ce20b9268e79a3480.jpg",
  "https://www.happyscribe.com/assets/landing/old-land-spotify-4ac1b6608eef96dfcc9f06df3f59f73bf40eaff417fc5920e01a0f3489dbecbb.jpg",
  "https://www.happyscribe.com/assets/landing/old-land-un-15904f809336cbe7b46e0a9b7a0cf86e0c661c1ffcb21d623c26862e4e3b73e5.jpg",
  "https://www.happyscribe.com/assets/landing/old-land-dpa-9a142170d4272a3a8e26fec3b0b89ac8c5c1171b14d47545c5774d4661964786.jpg",
];

export const IMG_FEATURE =
  "https://www.happyscribe.com/assets/landing/illustrations/subtitle-editor-145f5d99a593843c3a0771d4f5a06fce37ffb9639281bacad91526a16ca4421c.jpg";

export const IMG_FEATURES = [
  {
    type: "l-r",
    head: "100% Human Translation Customization",
    text: "All your translations are done by one of our French to English subtitle translators to ensure the absolute highest quality. No machines are used here, just the talents and abilities of our translators.",
    img: "https://www.happyscribe.com/assets/landing/illustrations/translation-63e0db588c30d86fe83adf1ab08b84c03a021eee75b66de57a7f121edd8fd10c.jpg",
  },
  {
    type: "l-r",
    head: "Format & Hardcode Subtitles",
    text: "Once your subtitles have been translated, you can format your subtitles to make them match your brand. You can select multiple settings and get your video ready to publish. You can also directly download the video with burned-in subtitles.",
    img: "https://www.happyscribe.com/assets/landing/illustrations/format-befc13683c6d8f7868474610a42bca756d21ade77449602cf899f7be20210c35.jpg",
  },
  {
    type: "r-l",
    head: "Subtitle Customization",
    text: "Our translation experts take care of the translation and making sure that your subtitles look pretty. But even then you can still decide how your subtitles are going to look with our line, CPL, and CPS management.",
    img: "https://www.happyscribe.com/assets/landing/illustrations/limit-4633da879e60923dde8b2e63ef246a99d1a67dcf2c78d63750a34cbcf5c08f20.jpg",
  },
];

export const LIST = [
  {
    head: "Upload your file.",
    text: "With our uploader, you can import your file from anywhere, whether it's on your laptop, Google Drive, Youtube, or Dropbox.",
  },
  {
    head: "Select 'French'.",
    text: "Determine the language of the audio of your video.",
  },
  {
    head: "Select 'Human made'.",
    text: "With our Human-Made service, the original (French) subtitles will be created by a native subtitler and proofread by an experienced reviewer.",
  },
  {
    head: "Toggle 'Translate subtitles to another language'.",
    text: "Select 'English' to determine the target language for the subtitle translation process.",
  },
  {
    head: "Get notified when your French and English subtitles are ready.",
    text: "Receive an email when the subtitles have been created within 24 hours for the French subtitles and 3-5 days for English subtitles.",
  },
  {
    head: "Receive your subtitles.",
    text: "Access your subtitles from the dashboard.",
  },
  {
    head: "Click on 'Export' and choose your preferred file format.",
    text: "You can export to SRT, VTT, and many more. It's that easy to have your video professionally subtitled!",
  },
];

export const ICO_STAR = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ICO_HALF_STAR = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <defs>
        <linearGradient id="grad">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="grey" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        fill="url(#grad)"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ICO_CROSS = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

export const ICO_BACK = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
      />
    </svg>
  );
};
