import { render, screen } from "@testing-library/react";
//importer user event car un a des events
import userEvent from "@testing-library/user-event";
//importer le composant a tester
import Counter from "../components/Counter";

describe("counter", () => {
  it("incremente au clic", async () => {
    render(<Counter />);
    //etat initiale du rendu attendu => expect
    expect(screen.getByRole("heading", { level: 2, name: "Count: 0" }));
    const button = screen.getByRole("button", {
      name: "Increase",
    });
    //action au click event !
    await userEvent.click(button);
    // résultat attendu
    expect(
      screen.getByRole("heading", { level: 2, name: "Count: 1" })
    ).toBeInTheDocument();
  });

  it("decremente au clic", async () => {
    render(<Counter />);

    const h2 = screen.getByRole("heading", { level: 2, name: "Count: 0" });

    expect(h2).toBeInTheDocument;

    const DecButton = screen.getByRole("button", {
      name: "Decrease",
    });

    await userEvent.click(DecButton);

    expect(
      screen.getByRole("heading", { level: 2, name: "Count: -1" })
    ).toBeInTheDocument();
  });
});
