export default function TailwindResponsiveDesign() {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="/images/reactjs.jpg"
            alt="ReactJS logo"
          />
        </div>
        <div className="p-8">
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            Professional Courses
          </div>
          <a
            href="#"
            className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
          >
            Rocket Propulsion Fundamentals
          </a>
          <p className="mt-2 text-gray-500">
            This course provides an in-depth study of the fundamentals of rocket
            propulsion, covering topics such as propulsion theory, engine types,
            fuel chemistry, and the practical applications of rocket technology.
            Designed for students with a strong background in physics and
            engineering, the course includes both theoretical instruction and
            hands-on laboratory work
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}
