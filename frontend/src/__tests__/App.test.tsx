import { render, screen } from "@testing-library/react";
import App from "../App"; // Assure-toi que le chemin d'accès est correct

// Description de ton test
describe("App Component", () => {
  // Le test lui-même
  test("renders the main heading", () => {
    // Rend le composant dans un environnement virtuel du DOM
    render(<App />);

    // Recherche un élément de titre de niveau 1 (h1) qui contient le texte "Vite + React"

    const heading = screen.getByRole("heading", { level: 1, name: "Hello" });
    // Vérifie que l'élément a bien été trouvé dans le document
    expect(heading).toBeInTheDocument();
  });
});
