import Card from "./components/Card";
import { PROGRAMMING_LANGUAGES } from "./constants";

function Home() {
  return (
    <div className="px-36 py-16 text-center text-white h-screen flex">
      <div className="mx-auto pt-24">
        <h1 className="text-3xl font-bold">Proqramlaşdırmaya aid hər şey</h1>
        <p className="mt-4">
          formatika.io ilə siz nəzəri və praktiki biliklərinizi artıra və real
          müsahibə suallarını <br /> görərək özünüzü müsahibəyə hazırlaya
          bilərsiniz. Elə isə başla.
        </p>
        <div className="flex justify-center items-center mt-7">
          <div className="h-[1px] w-full bg-white" />
          <div className="px-3 py-2 border-white border rounded-md">
            Proqramlaşdırma dilləri
          </div>
          <div className="h-[1px] w-full bg-white" />
        </div>
        <div className="mt-7 flex justify-center flex-wrap gap-4">
          {PROGRAMMING_LANGUAGES.map((language, i) => (
            <Card
              key={i}
              title={language.title}
              to={`/programming-language/${language.id}`}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-12">
          <div className="h-[1px] w-full bg-white" />
          <div className="px-3 py-2 border-white border rounded-md">
            Kitabxanalar
          </div>
          <div className="h-[1px] w-full bg-white" />
        </div>
        <div className="mt-7 flex justify-center flex-wrap gap-4">
          {PROGRAMMING_LANGUAGES.map((language, i) => (
            <Card
              key={i}
              title={language.title}
              to={`/programming-language/${language.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
