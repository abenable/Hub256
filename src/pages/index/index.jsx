import { Typography } from '@material-tailwind/react';

export default function IndexPage() {
  return (
    <>
      <Typography
        variant="h2"
        className="items-center justify-center flex text-dark mb-3.5 text-2xl font-bold sm:text-4xl xl:text-heading-3"
      >
        Latest blogs
      </Typography>
      <div className="flex flex-row gap-3"></div>
    </>
  );
}
