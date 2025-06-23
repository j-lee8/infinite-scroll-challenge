import "./App.css";
import { ProductList } from "@components/ProductList";
import { MainLayout } from "@layouts/MainLayout";
import { SeeMoreProductsButton } from "@components/button";
import { Footer } from "@components/Footer";

const App = () => {
  return (
    // IMPROVEMENT: Use internationalisation (i18) to support different languages
    <MainLayout title="Home Office" additionalTitle="Essentials.">
      <ProductList />

      {/* Use semantic HTML for better a11y */}
      <Footer>
        <h3 className="mb-2">See more products</h3>
        <SeeMoreProductsButton />
      </Footer>
    </MainLayout>
  );
};

export default App;
