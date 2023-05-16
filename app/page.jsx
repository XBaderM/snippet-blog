import Feed from "components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Learn
      <br className="max-md:hidden" />
      <span className="green_gradient text-center"> Snippets and more</span>
    </h1>
    <p className="desc text-center">
      {}is tool for modern world to discover, create and share Snippets to
      enhance their knowledge
    </p>

    <Feed />
  </section>
);

export default Home;
