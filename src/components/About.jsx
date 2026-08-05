import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <section className="min-h-[calc(100vh-85px)] py-12 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full mb-4">
          About Us
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Fresh food, fast service, and a simple ordering flow.
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          We built this app to keep the experience easy: browse restaurants,
          compare options quickly, and get to checkout without extra noise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <article className="bg-white p-6 rounded-2xl border border-orange-100 shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">What we focus on</h3>
          <p className="text-gray-600 leading-relaxed">
            Clear menus, helpful filters, and a clean interface that keeps the
            user journey straightforward.
          </p>
        </article>

        <article className="bg-white p-6 rounded-2xl border border-orange-100 shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">How we work</h3>
          <p className="text-gray-600 leading-relaxed">
            We keep the product lightweight and consistent with the existing UI
            so every screen feels connected.
          </p>
        </article>

        <article className="bg-white p-6 rounded-2xl border border-orange-100 shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Why it matters</h3>
          <p className="text-gray-600 leading-relaxed">
            A simple layout helps users move faster and makes the experience feel
            familiar from page to page.
          </p>
        </article>

        <UserClass name="Krishna Goyal" location="kolkata" />
      </div>
    </section>
  );
};

export default About;