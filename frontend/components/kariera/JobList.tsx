import parse from "html-react-parser";

const headingClasses =
  "my-16 text-center text-2xl font-extrabold uppercase dark:text-stone-200";

interface Job {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  tags: any;
}

export default function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <>
      <h3 className={headingClasses}>Obecnie poszukujemy</h3>
      {jobs.map((job) => (
        <div className="my-8 mx-auto lg:px-40" key={job.id}>
          <h4 className="my-4 text-3xl">{job.title.rendered}</h4>
          {/* TODO: get and show post tags */}
          {/* {job.tags.map((tag: any) => (
            <span key={tag.id}>{tag.name}</span>
          ))} */}
          <div className="p-8 bg-stone-200 dark:bg-stone-800 rounded-xl text-left">
            {parse(job.content.rendered)}
          </div>
        </div>
      ))}
    </>
  );
}
