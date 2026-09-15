export default function TailwindFilters() {
  return (
    <div>
      <div>
        <h3>Blurs</h3>
        <div className="flex">
          <img className="blur-none w-1/4" src="/images/angel-falls.jpg" />
          <img className="blur-sm w-1/4" src="/images/angel-falls.jpg" />
          <img className="blur-lg w-1/4" src="/images/angel-falls.jpg" />
          <img className="blur-2xl w-1/4" src="/images/angel-falls.jpg" />
        </div>
      </div>
    </div>
  );
}
